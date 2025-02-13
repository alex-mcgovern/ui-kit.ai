import { withoutVitePlugins } from "@storybook/builder-vite";

const excludedProps = new Set([
    "id",
    "slot",
    "onCopy",
    "onCut",
    "onPaste",
    "onCompositionStart",
    "onCompositionEnd",
    "onCompositionUpdate",
    "onSelect",
    "onBeforeInput",
    "onInput",
]);

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ["../**/*.mdx", "../**/*stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
    ],
    babelDefault: {},

    framework: {
        name: "@storybook/react-vite",
        options: {},
    },

    async viteFinal(config) {
        return {
            ...config,
            plugins: [
                ...(await withoutVitePlugins(config.plugins, ["vite:dts"])),
            ],
        };
    },
    docs: {
        autodocs: "tag",
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            propFilter: (prop) =>
                !prop.name.startsWith("aria-") && !excludedProps.has(prop.name),
        },
    },
};
export default config;
