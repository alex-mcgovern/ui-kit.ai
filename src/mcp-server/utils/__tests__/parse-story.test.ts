import { describe, it, expect } from "vitest";
import { parseStoryExports } from "../parse-story";
import path from "path";
import { fileURLToPath } from "url";

it("parseStoryExports", async () => {
    const storyPath = path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "./example.stories.tsx",
    );
    const exports = await parseStoryExports(storyPath);

    expect(exports).toEqual({
        Primary: {
            description: "",
            args: {
                name: "text field",
            },
        },
        IsDisabled: {
            description:
                "You can pass `isDisabled` to the `TextField` to disable it.\nThis will prevent any user input.",
            args: {
                name: "text field",
                isDisabled: true,
            },
        },
        IsInvalid: {
            description: "",
            args: {
                name: "text field",
                isInvalid: true,
            },
        },
        IsReadOnly: {
            description: "",
            args: {
                name: "text field",
                isReadOnly: true,
            },
        },
    });
});
