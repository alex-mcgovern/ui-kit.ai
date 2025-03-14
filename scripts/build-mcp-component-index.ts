import * as fs from "fs";
import * as path from "path";
import * as ts from "typescript";

const indexPath = path.resolve("src", "index.ts");
const jsonOutputPath = path.resolve(
    "src",
    "mcp-server/data/available-components.json",
);

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

function writeJsonFile(
    content: string[],
    filePath: string,
): void {
    fs.writeFileSync(
        filePath,
        JSON.stringify(content, null, 2),
        "utf-8",
    );
}

const exports = parseIndexFile(indexPath);
writeJsonFile(exports, jsonOutputPath);

console.info("✅ Component JSON generated successfully.");
