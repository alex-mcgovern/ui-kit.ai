import { describe, it, expect } from "vitest";
import { parseStoryExports } from "../parse-story";
import path from "path";
import { fileURLToPath } from "url";

describe("parseStoryExports", () => {
    it("should parse named exports from a story file", async () => {
        const storyPath = path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            "./example.stories.tsx",
        );
        const exports = await parseStoryExports(storyPath);

        expect(exports).toEqual({
            Primary: {
                description: "",
            },
            IsDisabled: {
                description: "",
            },
            IsInvalid: {
                description: "",
            },
            IsReadOnly: {
                description: "",
            },
        });
    });
});
