import { test, expect } from "vitest";
import fs from "fs";
import path from "path";

const storiesDir = path.join(__dirname, "../..", "stories");

test("all Storybook stories export a named export with name `Example`", async () => {
    const files = fs.readdirSync(storiesDir);

    const storyFiles = files.filter((file) =>
        file.endsWith("stories.tsx"),
    );

    for (const file of storyFiles) {
        const filePath = path.join(storiesDir, file);
        const module = await import(filePath);

        expect(
            module,
            `expected ${file} to have named export \`Example\``,
        ).toHaveProperty("Example");
    }
});
