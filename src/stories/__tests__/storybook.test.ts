import { test, expect } from "vitest";
import fs from "fs";
import path from "path";

const storiesDir = path.join(__dirname, "../..", "stories");

test("all Storybook stories export a named export with name `Primary`", async () => {
    const files = fs.readdirSync(storiesDir);

    const storyFiles = files.filter((file) =>
        file.endsWith("stories.tsx"),
    );

    for (const file of storyFiles) {
        const filePath = path.join(storiesDir, file);
        const module = await import(filePath);

        expect(
            module,
            `expected ${file} to have named export \`Primary\``,
        ).toHaveProperty("Primary");
    }
});

test("all exports in story files begin with a capital letter", async () => {
    const files = fs.readdirSync(storiesDir);
    const storyFiles = files.filter((file) =>
        file.endsWith("stories.tsx"),
    );

    for (const file of storyFiles) {
        const filePath = path.join(storiesDir, file);
        const module = await import(filePath);

        Object.keys(module)
            .filter((key) => key !== "default")
            .forEach((exportName) => {
                expect(
                    exportName[0],
                    `Export "${exportName}" in ${file} should start with capital letter`,
                ).toMatch(/[A-Z]/);
            });
    }
});
test("all exports except 'default' and 'Primary' have JSDoc comments", async () => {
    const files = fs.readdirSync(storiesDir);
    const storyFiles = files.filter((file) =>
        file.endsWith("stories.tsx"),
    );

    for (const file of storyFiles) {
        const filePath = path.join(storiesDir, file);
        const fileContent = fs.readFileSync(
            filePath,
            "utf8",
        );
        const module = await import(filePath);

        Object.keys(module)
            .filter(
                (key) =>
                    key !== "default" && key !== "Primary",
            )
            .forEach((exportName) => {
                const jsDocRegex = new RegExp(
                    `\\/\\*\\*[\\s\\S]*?\\*\\/[\\s]*export[^]*?${exportName}`,
                );
                expect(
                    jsDocRegex.test(fileContent),
                    `Export "${exportName}" in ${file} should have a JSDoc comment`,
                ).toBe(true);
            });
    }
});
