import fs from "fs";
import path from "path";
import { describe, expect, test } from "vitest";

const componentsDir = path.join(__dirname, "..");

const files = fs.readdirSync(componentsDir);
const componentFiles = files.filter(
    (file) =>
        file.endsWith(".tsx") &&
        !file.endsWith(".stories.tsx") &&
        !file.endsWith(".test.tsx"),
);

describe("DisplayName for named exports", async () => {
    for (const file of componentFiles) {
        const filePath = path.join(componentsDir, file);
        const module = await import(filePath);

        Object.keys(module)
            .filter((key) => key !== "default")
            .forEach((exportName) => {
                test(`Export "${exportName}" in ${file} should have a displayName property`, () => {
                    const component = module[exportName];
                    expect(
                        component.displayName,
                        `Export "${exportName}" in ${file} should have a displayName property`,
                    ).toBeDefined();
                    expect(
                        component.displayName,
                        `Export "${exportName}" in ${file} should have displayName matching the export name`,
                    ).toBe(exportName);
                });
            });
    }
});
