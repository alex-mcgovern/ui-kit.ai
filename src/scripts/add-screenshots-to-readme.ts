import { readdir, readFile, writeFile } from "fs/promises";

const SCREENSHOTS_START = "<!-- BEGIN-COMPONENT-LINKS -->";
const SCREENSHOTS_END = "<!-- END-COMPONENT-LINKS -->";

function generateDocsUrl(filename: string): string {
    const componentName = filename
        .replace(".png", "")
        .replace("Components_", "")
        .replace("_Primary", "")
        .toLowerCase();
    return `https://boondoggle.design/?path=/docs/components-${componentName}--docs`;
}

function formatComponentName(filename: string): string {
    return filename
        .replace(".png", "")
        .replace("Components_", "")
        .replace("_Primary", "");
}

async function main() {
    try {
        const assetFiles = await readdir("assets");
        const pngFiles = assetFiles.filter((file) =>
            file.endsWith(".png"),
        );

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

        const componentDivs = pngFiles
            .map((file) => {
                const componentName =
                    formatComponentName(file);
                const docsUrl = generateDocsUrl(file);
                return `<div style="margin: 2rem 0">
  <a href="${docsUrl}">
    <h3>${componentName}</h3>
    <img src="assets/${file}" alt="${componentName} component" />
  </a>
</div>`;
            })
            .join("\n");

        const newContent =
            readmeContent.substring(0, startIndex) +
            SCREENSHOTS_START +
            "\n" +
            componentDivs +
            "\n" +
            SCREENSHOTS_END +
            readmeContent.substring(
                endIndex + SCREENSHOTS_END.length,
            );

        await writeFile("README.md", newContent, "utf-8");
        console.log(
            "Successfully updated README.md with screenshot images",
        );
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

main();
