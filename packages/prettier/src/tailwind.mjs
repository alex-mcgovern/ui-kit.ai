import { prettierBase } from "./base.mjs";
/**
 * @type {import("prettier").Config}
 */
export const prettierTailwind = {
    ...prettierBase,
    plugins: [
        "prettier-plugin-tailwindcss",
        "prettier-plugin-classnames",
        "prettier-plugin-merge",
    ],
    tailwindFunctions: ["tv", "twMerge", "composeTailwindRenderProps"],
    customFunctions: ["tv", "twMerge", "composeTailwindRenderProps"],
};
