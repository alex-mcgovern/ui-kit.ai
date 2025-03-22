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
            "no-restricted-syntax": [
                "error",
                {
                    message: "Story exports must have a parameters property",
                    selector:
                        "ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > ObjectExpression:not(:has(Property[key.name='parameters']))",
                },
                {
                    message:
                        "Story parameters must have a displayName property",
                    selector:
                        "Property[key.name='parameters'] > ObjectExpression:not(:has(Property[key.name='displayName']))",
                },
            ],
            "sonarjs/no-duplicate-string": "off",
        },
    },
];

export default config;
