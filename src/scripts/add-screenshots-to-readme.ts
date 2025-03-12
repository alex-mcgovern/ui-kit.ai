import { readdir, readFile, writeFile } from "fs/promises";

const SCREENSHOTS_START =
    "<!-- BEGIN-COMPONENT-SCREENSHOTS -->";
const SCREENSHOTS_END =
    "<!-- END-COMPONENT-SCREENSHOTS -->";

async function main() {
    try {
        // Read all PNG files from assets directory
        const assetFiles = await readdir("assets");
        const pngFiles = assetFiles.filter((file) =>
            file.endsWith(".png"),
        );

        // Read the README.md content
        const readmeContent = await readFile(
            "README.md",
            "utf-8",
        );

        // Find the markers and extract the section
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

        // Generate image tags for each PNG
        const imageTags = pngFiles
            .map((file) => {
                const alt = file
                    .replace(".png", "")
                    .replace(/_/g, " ")
                    .replace("Components ", "")
                    .replace(" Primary", "");
                return `  <img src="assets/${file}" alt="${alt}" />`;
            })
            .join("\n");

        // Construct the new content
        const newContent =
            readmeContent.substring(0, startIndex) +
            SCREENSHOTS_START +
            "\n" +
            imageTags +
            "\n" +
            SCREENSHOTS_END +
            readmeContent.substring(
                endIndex + SCREENSHOTS_END.length,
            );

        // Write the updated content back to README.md
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
