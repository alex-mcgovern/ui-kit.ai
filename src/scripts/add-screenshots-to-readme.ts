import { readdir, readFile, writeFile } from "fs/promises";
import path from "path";

const SCREENSHOTS_START =
    "<!-- BEGIN-COMPONENT-SCREENSHOTS -->";
const SCREENSHOTS_END =
    "<!-- END-COMPONENT-SCREENSHOTS -->";

function pascalToKebab(str: string): string {
    return str
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();
}

function extractJsDocComment(
    fileContent: string,
    componentName: string,
): string {
    const regex = new RegExp(
        `\\/\\*\\*(.*?)\\*\\/\\s*export\\s+const\\s+${componentName}`,
        "s",
    );
    const match = fileContent.match(regex);
    if (!match) return "";

    return match[1]
        .split("\n")
        .map((line) => line.replace(/^\s*\*\s?/, ""))
        .filter((line) => line.trim())
        .join("\n");
}

async function main() {
    try {
        const assetFiles = await readdir("assets");
        const pngFiles = assetFiles.filter((file) =>
            file.endsWith(".png"),
        );

        const components = await Promise.all(
            pngFiles.map(async (file) => {
                // Extract component name in PascalCase
                const componentNameMatch = file.match(
                    /Components_(\w+)_Primary/,
                );
                if (!componentNameMatch) return null;

                const componentName = componentNameMatch[1];
                const kebabName =
                    pascalToKebab(componentName);
                const componentPath = path.join(
                    "src/components",
                    `${kebabName}.tsx`,
                );

                try {
                    const componentFile = await readFile(
                        componentPath,
                        "utf-8",
                    );
                    const jsDocContent =
                        extractJsDocComment(
                            componentFile,
                            componentName,
                        );

                    return {
                        name: componentName,
                        imagePath: `assets/${file}`,
                        jsDoc: jsDocContent,
                    };
                } catch (err) {
                    console.warn(
                        `Could not process component ${componentName}`,
                    );
                    return null;
                }
            }),
        );

        const validComponents = components.filter(
            (c) => c !== null,
        );

        // Generate markdown content
        const markdownContent = validComponents
            .map(
                (comp) => `
### ${comp!.name}

<img src="${comp!.imagePath}" alt="${comp!.name} component" />

${comp!.jsDoc}
`,
            )
            .join("\n\n");

        // Update README
        const readmeContent = await readFile(
            "README.md",
            "utf-8",
        );
        const startIndex = readmeContent.indexOf(
            SCREENSHOTS_START,
        );
        const endIndex =
            readmeContent.indexOf(SCREENSHOTS_END);

        if (startIndex === -1 || endIndex === -1) {
            throw new Error(
                "Screenshot markers not found in README.md",
            );
        }

        const newContent =
            readmeContent.substring(0, startIndex) +
            SCREENSHOTS_START +
            "\n\n" +
            markdownContent +
            "\n" +
            SCREENSHOTS_END +
            readmeContent.substring(
                endIndex + SCREENSHOTS_END.length,
            );

        await writeFile("README.md", newContent, "utf-8");
        console.log(
            "Successfully updated README.md with component documentation",
        );
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

main();
