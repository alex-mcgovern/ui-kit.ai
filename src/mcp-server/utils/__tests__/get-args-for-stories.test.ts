import { it, expect } from "vitest";
import { getArgsForStories } from "../get-args-for-stories";
import path from "path";
import { fileURLToPath } from "url";

it("getArgsForStories", async () => {
    const storyPath = path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "./example.stories.tsx",
    );
    const exports = await getArgsForStories(storyPath);

    expect(exports).toEqual({
        Primary: {
            name: "text field",
        },
        IsDisabled: {
            name: "text field",
            isDisabled: true,
        },
        IsInvalid: {
            name: "text field",
            isInvalid: true,
        },
        IsReadOnly: {
            name: "text field",
            isReadOnly: true,
        },
    });
});
