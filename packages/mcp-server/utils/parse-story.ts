import type { ReactNode } from "react";

import { type Options } from "react-element-to-jsx-string";

const JSX_STRING_OPTIONS = {
    filterProps(_value, key) {
        return key !== "data-testid" && key !== "key";
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    functionValue: (fn: Function) => fn.toString(),
    showFunctions: true,
    useBooleanShorthandSyntax: true,

    useFragmentShortSyntax: true,
} as const satisfies Options;

export async function parseStory(
    filepath: string,
): Promise<Record<string, string>> {
    const storyModule = await import(filepath);

    // TODO: Add the ability to pass the renderer as an argument to the script
    // that builds the Storybook digest.
    const { composeStories } = await import("@storybook/react");

    const reactElementToJSXString = (
        await import("react-element-to-jsx-string")
    ).default;

    const composedStories = composeStories(storyModule, {
        applyDecorators: (storyFn) => storyFn, // We don't want to apply any decorators
    });

    const entries = Object.entries(composedStories);
    return Object.fromEntries(
        entries.map(([storyName, Story]) => [
            storyName,
            reactElementToJSXString(
                (Story as () => ReactNode)(),
                JSX_STRING_OPTIONS,
            ),
        ]),
    );
}
