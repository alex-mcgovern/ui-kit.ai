import uiKitEslintConfig from "@ui-kit.ai/eslint";

/** @type {import('eslint').Linter.Config[]} */
const config = [
    ...uiKitEslintConfig(import.meta.dirname),
    {
        ignores: [
            "node_modules",
            ".turbo",
            "dist",
            "vite.config.js.timestamp-*.mjs",
        ],
    },
];

export default config;
