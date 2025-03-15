// @ts-expect-error - no .dts
import { FlatCompat } from "@eslint/eslintrc";
import jsPlugin from "@eslint/js";
// @ts-expect-error - no .dts
import eslintConfigPrettier from "eslint-config-prettier";
// // @ts-expect-error - no .dts
// import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import sonarjsPlugin from "eslint-plugin-sonarjs";
// @ts-expect-error - no .dts
import tailwindPlugin from "eslint-plugin-tailwindcss";
import globals from "globals";
import path, { join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
        baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const config = [
    jsPlugin.configs.recommended,
    // importPlugin.flatConfigs.recommended,
    sonarjsPlugin.configs.recommended,
    perfectionist.configs["recommended-natural"],
    ...tailwindPlugin.configs["flat/recommended"],
    ...compat.extends(
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ),
    eslintConfigPrettier,
    {
        ignores: [
            "public/mockServiceWorker.js",
            "node_modules/**/*",
        ],
    },
    {
        settings: {
            // "import/resolver": {
            //     node: true,
            //     typescript: true,
            // },
            tailwindcss: {
                callees: ["tv", "twMerge"],
                config: join(
                    import.meta.dirname,
                    "./tailwind.config.ts",
                ),
            },
        },
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
    },
    {
        files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
        rules: {
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                },
            ],
            "@typescript-eslint/no-confusing-non-null-assertion":
                "error",
            "@typescript-eslint/no-deprecated": "error",
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-misused-promises":
                "error",
            "@typescript-eslint/no-non-null-assertion":
                "error",
            "@typescript-eslint/no-unnecessary-condition":
                "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "all",
                    argsIgnorePattern: "^_",
                    caughtErrors: "all",
                    caughtErrorsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    varsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/prefer-nullish-coalescing":
                "error",
            "@typescript-eslint/require-await": "error",
            "@typescript-eslint/strict-boolean-expressions":
                "error",
            "@typescript-eslint/switch-exhaustiveness-check":
                "error",
            eqeqeq: ["error", "smart"],
            // "import/namespace": "off",
            // "import/no-cycle": "error",
            // "import/no-duplicates": [
            //     "error",
            //     {
            //         considerQueryString: true,
            //     },
            // ],
            // "import/no-relative-packages": "error",
            "no-console": [
                "error",
                {
                    allow: ["warn", "error", "info"],
                },
            ],
            "no-implicit-coercion": "error",
            "no-useless-rename": [
                "error",
                {
                    ignoreDestructuring: false,
                    ignoreExport: false,
                    ignoreImport: false,
                },
            ],
            "perfectionist/sort-interfaces": [
                "error",
                {
                    customGroups: [],
                    groupKind: "mixed",
                    groups: [],
                    ignoreCase: false,
                    ignorePattern: [],
                    newlinesBetween: "ignore",
                    order: "asc",
                    partitionByComment: false,
                    partitionByNewLine: false,
                    specialCharacters: "keep",
                    type: "alphabetical",
                },
            ],
            // "perfectionist/sort-modules": [
            //     "error",
            //     {
            //         customGroups: [
            //             {
            //                 anyOf: [
            //                     {
            //                         selector: "const",
            //                         modifiers: ["export"],
            //                     },
            //                 ],
            //                 groupName: "public-constants",
            //             },
            //             {
            //                 anyOf: [
            //                     {
            //                         selector: "const",
            //                     },
            //                 ],
            //                 groupName: "private-constants",
            //             },
            //         ],
            //         groups: [
            //             ["declare-enum", "enum"],
            //             "export-enum",
            //             [
            //                 "declare-interface",
            //                 "declare-type",
            //                 "interface",
            //                 "type",
            //             ],
            //             ["export-interface", "export-type"],
            //             ["declare-class", "class"],
            //             "export-class",
            //             [
            //                 "private-constants",
            //                 "public-constants",
            //             ],
            //             ["declare-function", "function"],
            //             "export-function",
            //         ],
            //         ignoreCase: false,
            //         newlinesBetween: "ignore",
            //         order: "asc",
            //         partitionByComment: false,
            //         partitionByNewLine: false,
            //         specialCharacters: "keep",
            //         type: "alphabetical",
            //     },
            // ],
            "perfectionist/sort-objects": [
                "error",
                {
                    type: "alphabetical",
                },
            ],
            "perfectionist/sort-variable-declarations": [
                "error",
                {
                    ignoreCase: false,
                    order: "asc",
                    partitionByComment: false,
                    partitionByNewLine: false,
                    specialCharacters: "keep",
                    type: "alphabetical",
                },
            ],
            "require-await": "off",
            "sonarjs/no-redundant-boolean": "error",
            "tailwindcss/classnames-order": "off",
            "tailwindcss/enforces-negative-arbitrary-values":
                "error",
            "tailwindcss/enforces-shorthand": "error",
            "tailwindcss/no-contradicting-classname":
                "error",
            "tailwindcss/no-custom-classname": [
                "error",
                {
                    callees: ["tv", "twMerge"],
                    whitelist: [
                        "light",
                        "dark",
                        "text-inverted",
                        "h-ui-element",
                        "min-h-ui-element",
                        "max-h-ui-element",
                        "scrollbar-thin",
                        "font-default",
                        "font-title",
                        "font-code",
                        "subhead-bold",
                        "subhead-regular",
                    ],
                },
            ],
        },
    },
    // Ignore duplicate strings in tests
    {
        files: [
            "src/stories/**/*.tsx",
            "src/test/**/*.tsx",
            "**/*.test.*",
        ],
        rules: {
            "sonarjs/no-duplicate-string": "off",
        },
    },
];

export default config;
