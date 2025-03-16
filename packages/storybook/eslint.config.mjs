import uiKitEslintConfig from "@ui-kit.ai/eslint";

/** @type {import('eslint').Linter.Config[]} */
const config = [
    ...uiKitEslintConfig(import.meta.dirname),
    {
        ignores: [
            ".turbo",
            "dist",
            "node_modules",
            "public/mockServiceWorker.js",
            "vite.config.mjs.timestamp-*.mjs",
        ],
    },
    // Ignore duplicate strings in stories
    {
        files: ["**/*.stories.tsx"],
        rules: {
            "sonarjs/no-duplicate-string": "off",
        },
    },
];

export default config;
