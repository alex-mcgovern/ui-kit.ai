import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

const storiesDir = path.resolve("src", "stories");
const jsonOutputPath = path.resolve(
    "src",
    "mcp-server/data/component-usage.json",
);

function getStoryFiles(dir: string): string[] {
    const files = fs.readdirSync(dir);
    return files.filter((file) =>
        file.endsWith(".stories.tsx"),
    );
}

function toPascalCase(str: string): string {
    return str.replace(/(^\w|-\w)/g, (match) =>
        match.replace("-", "").toUpperCase(),
    );
}

function parseStoryFile(filePath: string): {
    [key: string]: string;
} {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const sourceFile = ts.createSourceFile(
        filePath,
        fileContent,
        ts.ScriptTarget.Latest,
        true,
    );
    const examples: { [key: string]: string } = {};

    ts.forEachChild(sourceFile, (node) => {
        if (
            ts.isFunctionDeclaration(node) &&
            node.name &&
            node.name.getText() === "Example"
        ) {
            const start = node.getStart();
            const end = node.getEnd();
            const exampleCode = fileContent.substring(
                start,
                end,
            );
            const componentName = toPascalCase(
                path.basename(filePath, ".stories.tsx"),
            );
            examples[componentName] = exampleCode;
        }
    });

    return examples;
}

function writeJsonFile(
    content: { [key: string]: string },
    filePath: string,
): void {
    fs.writeFileSync(
        filePath,
        JSON.stringify(content, null, 2),
        "utf-8",
    );
}

const storyFiles = getStoryFiles(storiesDir);
const allExamples: { [key: string]: string } = {};

storyFiles.forEach((file) => {
    const filePath = path.join(storiesDir, file);
    const examples = parseStoryFile(filePath);
    Object.assign(allExamples, examples);
});

writeJsonFile(allExamples, jsonOutputPath);

console.log("Component usage JSON generated successfully.");
