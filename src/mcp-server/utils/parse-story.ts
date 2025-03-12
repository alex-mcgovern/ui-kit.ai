import { readFileSync } from "fs";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import { getArgsForStories } from "./get-args-for-stories";
// Helper function to extract JSDoc comment
function extractJSDocComment(path: any): string | null {
    const comments = path.node.leadingComments;
    if (!comments) return null;

    const jsDocComment: string | null = comments.find(
        (comment: any) =>
            comment.type === "CommentBlock" &&
            comment.value.startsWith("*"),
    );

    if (!jsDocComment) return null;

    // Remove the leading * from each line and trim whitespace
    return jsDocComment.value
        .split("\n")
        .map((line) => line.replace(/^\s*\*\s?/, ""))
        .join("\n")
        .trim();
}

export async function parseStoryExports(
    filepath: string,
): Promise<Record<string, { description: string }>> {
    const content = readFileSync(filepath, "utf-8");

    const argsMap = await getArgsForStories(filepath);

    const ast = parser.parse(content, {
        sourceType: "module",
        plugins: ["typescript", "jsx"],
    });

    const exports: Record<
        string,
        {
            description: string;
            args?: Record<string, unknown>;
        }
    > = {};

    traverse(ast, {
        ExportNamedDeclaration(path) {
            const declaration = path.node.declaration;
            const jsDocComment =
                extractJSDocComment(path) || "";

            if (
                declaration?.type === "VariableDeclaration"
            ) {
                declaration.declarations.forEach((d) => {
                    if (d.id.type === "Identifier") {
                        const name: string = d.id.name;
                        const args = argsMap[name];

                        exports[name] = {
                            description: jsDocComment,
                            args,
                        };
                    }
                });
            } else if (
                declaration?.type ===
                    "FunctionDeclaration" &&
                declaration.id
            ) {
                exports[declaration.id.name] = {
                    description: jsDocComment,
                };
            }

            path.node.specifiers.forEach((specifier) => {
                if (specifier.type === "ExportSpecifier") {
                    const name = specifier.exported.name;
                    const args = argsMap[name];

                    exports[name] = {
                        description: jsDocComment,
                        args,
                    };
                }
            });
        },
    });

    return exports;
}
