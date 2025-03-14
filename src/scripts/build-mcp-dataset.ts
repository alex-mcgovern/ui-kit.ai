import * as fs from "fs";
import * as path from "path";
import { parseStory } from "../mcp-server/utils/parse-story";
import React from "react";

const storiesDir = path.resolve("src", "stories");
const outputPath = path.resolve(
    "src",
    "mcp-server/data/component-usage.json",
);

global.React = React;

const toPascal = (str: string) =>
    str.replace(/(^\w|-\w)/g, (text) =>
        text.replace(/-/, "").toUpperCase(),
    );

async function main() {
    const storyFiles = fs
        .readdirSync(storiesDir)
        .filter((file) => file.endsWith(".stories.tsx"));

    const examples: Record<string, any> = {};

    for (const file of storyFiles) {
        try {
            const componentName = toPascal(
                path.basename(file, ".stories.tsx"),
            );
            const fullPath = path.join(storiesDir, file);
            examples[componentName] =
                await parseStory(fullPath);
        } catch (e) {
            console.error(`Error processing ${file}`);
        }
    }

    fs.writeFileSync(
        outputPath,
        JSON.stringify(examples, null, 2),
        "utf-8",
    );
    console.log(
        "Component usage JSON generated successfully.",
    );
}

main();
