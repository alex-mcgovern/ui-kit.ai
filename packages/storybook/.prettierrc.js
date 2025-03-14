import { prettierConfig } from "@ui-kit.ai/prettier";

/**
 * @type {import("prettier").Config}
 */
const config = {
    ...prettierConfig,
    tailwindConfig: "./tailwind.config.ts",
};

export default config;
