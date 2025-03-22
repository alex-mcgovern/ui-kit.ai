import * as components from "@ui-kit.ai/storybook";
import * as fs from "node:fs";
import * as path from "node:path";

const outputPath = path.resolve(
    import.meta.dirname,
    "..",
    "dist",
    "usage-examples.json",
);

import { composeStories } from "@storybook/react";
import React, { type ReactNode } from "react";
import { type Options as ReactElementToJsxStringOptions } from "react-element-to-jsx-string";

global.React = React;

const JSX_STRING_OPTIONS = {
    filterProps(_value, key) {
        return key !== "data-testid" && key !== "key";
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    functionValue: (fn: Function) => fn.toString(),
    showFunctions: true,
    useBooleanShorthandSyntax: true,

    useFragmentShortSyntax: true,
} as const satisfies ReactElementToJsxStringOptions;

async function main() {
    const examples: Record<string, Record<string, string>> = {};

    // NOTE: Dynamic import seems to help avoid "function does not exist" errors
    const reactElementToJSXString = await (
        await import("react-element-to-jsx-string")
    ).default;

    for (const [componentName, stories] of Object.entries(components)) {
        try {
            const composedStories = composeStories(
                stories as Parameters<typeof composeStories>[0],
                {
                    applyDecorators: (storyFn) => storyFn, // We don't want to apply any decorators
                },
            );

            const composed = Object.fromEntries(
                Object.entries(composedStories).map(([storyName, Story]) => {
                    let jsx = reactElementToJSXString(
                        (Story as () => ReactNode)(),
                        JSX_STRING_OPTIONS,
                    );

                    jsx = `function ${storyName}() {\n${jsx}\n}`;

                    return [storyName, jsx];
                }),
            );
            examples[componentName] = composed;
        } catch (e) {
            console.error(`Error while processing ${componentName}: ${e}`);
        }
    }

    fs.writeFileSync(outputPath, JSON.stringify(examples, null, 2), "utf-8");
    console.info("✅ Component usage JSON generated successfully.");
}

main();
