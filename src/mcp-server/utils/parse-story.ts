import { readFileSync } from "fs";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

export async function parseStoryExports(
    filepath: string,
): Promise<Record<string, null>> {
    // Read the file content
    const content = readFileSync(filepath, "utf-8");

    // Parse the content into an AST
    const ast = parser.parse(content, {
        sourceType: "module",
        plugins: ["typescript", "jsx"],
    });

    const exports: Record<string, null> = {};

    // Traverse the AST to find named exports
    traverse(ast, {
        ExportNamedDeclaration(path) {
            const declaration = path.node.declaration;

            if (
                declaration?.type === "VariableDeclaration"
            ) {
                declaration.declarations.forEach((d) => {
                    if (d.id.type === "Identifier") {
                        exports[d.id.name] = null;
                    }
                });
            } else if (
                declaration?.type ===
                    "FunctionDeclaration" &&
                declaration.id
            ) {
                exports[declaration.id.name] = null;
            }

            // Handle export specifiers (export { x })
            path.node.specifiers.forEach((specifier) => {
                if (specifier.type === "ExportSpecifier") {
                    exports[specifier.exported.name] = null;
                }
            });
        },
    });

    return exports;
}
