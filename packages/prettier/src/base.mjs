/**
 * @type {import("prettier").Config}
 */
export const prettierBase = {
    plugins: ["prettier-plugin-packagejson"],
    tabWidth: 2,
    useTabs: false,
    trailingComma: "es5",
    singleQuote: true,
    semi: false,
    jsxSingleQuote: true,
    quoteProps: "as-needed",
    singleAttributePerLine: true,
};
