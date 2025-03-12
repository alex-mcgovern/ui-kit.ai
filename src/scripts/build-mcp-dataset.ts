import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

// File paths
const indexPath = path.resolve("src", "index.ts");
const storiesDir = path.resolve("src", "stories");
const componentIndexOutputPath = path.resolve(
    "src",
    "mcp-server/data/available-components.json",
);
const componentUsageOutputPath = path.resolve(
    "src",
    "mcp-server/data/component-usage.json",
);

// Component Index Functions
function parseIndexFile(filePath: string): string[] {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const sourceFile = ts.createSourceFile(
        filePath,
        fileContent,
        ts.ScriptTarget.Latest,
        true,
    );
    const exports: string[] = [];

    ts.forEachChild(sourceFile, (node) => {
        if (
            ts.isExportDeclaration(node) &&
            node.exportClause &&
            ts.isNamedExports(node.exportClause)
        ) {
            node.exportClause.elements.forEach(
                (element) => {
                    exports.push(element.name.getText());
                },
            );
        }
    });

    return exports;
}

// Component Examples Functions
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
interface Example {
    name: string;
    description: string;
    example: string;
}

interface StoryMeta {
    component: any;
    render?: (args: any) => JSX.Element;
    args?: Record<string, any>;
    [key: string]: any;
}

function parseStoryFile(filePath: string): {
    [key: string]: Example[];
} {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const sourceFile = ts.createSourceFile(
        filePath,
        fileContent,
        ts.ScriptTarget.Latest,
        true,
    );
    const examples: { [key: string]: Example[] } = {};
    let meta: StoryMeta | undefined;

    ts.forEachChild(sourceFile, (node) => {
        console.debug("👉 node:", node);
        if (
            node.parent.filename?.endsWith(
                "button.stories.tsx",
            )
        )
            return;
        // Parse default export (meta)
        if (
            ts.isExportAssignment(node) &&
            node.isExportEquals === false
        ) {
            const text = node.expression.getText();
            // Safely evaluate the meta object
            try {
                meta = eval(`(${text})`);
            } catch (e) {
                console.warn(
                    `Failed to parse meta in ${filePath}`,
                );
            }
        }

        // Parse named exports (stories)
        if (
            ts.isVariableStatement(node) &&
            node.modifiers?.some(
                (m) =>
                    m.kind === ts.SyntaxKind.ExportKeyword,
            )
        ) {
            node.declarationList.declarations.forEach(
                (declaration) => {
                    if (ts.isIdentifier(declaration.name)) {
                        const storyName =
                            declaration.name.getText();
                        if (storyName === "default") return;

                        let description = "";
                        const jsDoc =
                            ts.getJSDocTags(declaration);
                        if (jsDoc.length > 0) {
                            description =
                                (jsDoc[0]
                                    .comment as string) ||
                                "";
                        }

                        // Get story args
                        let storyArgs: Record<string, any> =
                            {};
                        if (
                            declaration.initializer &&
                            ts.isObjectLiteralExpression(
                                declaration.initializer,
                            )
                        ) {
                            const argsProperty =
                                declaration.initializer.properties.find(
                                    (p) =>
                                        ts.isPropertyAssignment(
                                            p,
                                        ) &&
                                        p.name.getText() ===
                                            "args",
                                );
                            if (
                                argsProperty &&
                                ts.isPropertyAssignment(
                                    argsProperty,
                                )
                            ) {
                                try {
                                    storyArgs = eval(
                                        `(${argsProperty.initializer.getText()})`,
                                    );
                                } catch (e) {
                                    console.warn(
                                        `Failed to parse args in story ${storyName}`,
                                    );
                                }
                            }
                        }

                        // Combine meta args with story args
                        const combinedArgs = {
                            ...meta?.args,
                            ...storyArgs,
                        };

                        // Generate example JSX
                        const componentName = toPascalCase(
                            path.basename(
                                filePath,
                                ".stories.tsx",
                            ),
                        );
                        const propsString = Object.entries(
                            combinedArgs,
                        )
                            .map(([key, value]) => {
                                if (
                                    typeof value ===
                                    "string"
                                )
                                    return `${key}="${value}"`;
                                if (
                                    typeof value ===
                                        "boolean" &&
                                    value
                                )
                                    return key;
                                return `${key}={${JSON.stringify(value)}}`;
                            })
                            .join(" ");

                        const example = `<${componentName} ${propsString}>${componentName}</${componentName}>`;

                        if (!examples[componentName]) {
                            examples[componentName] = [];
                        }

                        examples[componentName].push({
                            name: storyName,
                            description,
                            example,
                        });
                    }
                },
            );
        }
    });

    return examples;
}

// Shared utility
function writeJsonFile(
    content: any,
    filePath: string,
): void {
    fs.writeFileSync(
        filePath,
        JSON.stringify(content, null, 2),
        "utf-8",
    );
}

// Main execution
function main() {
    // Build component index
    const exports = parseIndexFile(indexPath);
    writeJsonFile(exports, componentIndexOutputPath);
    console.log(
        "Component index JSON generated successfully.",
    );

    // Build component examples
    const storyFiles = getStoryFiles(storiesDir);
    const allExamples: { [key: string]: string } = {};
    storyFiles.forEach((file) => {
        const filePath = path.join(storiesDir, file);
        const examples = parseStoryFile(filePath);
        Object.assign(allExamples, examples);
    });
    writeJsonFile(allExamples, componentUsageOutputPath);
    console.log(
        "Component usage JSON generated successfully.",
    );
}

main();
