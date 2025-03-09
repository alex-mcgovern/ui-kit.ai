import { withoutVitePlugins } from "@storybook/builder-vite";
import { StorybookConfig } from "@storybook/react-vite";

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

const config: StorybookConfig = {
    stories: [
        "../src/stories/**/*.tsx",
        "../src/docs/**/*.docs.mdx",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
        "storycap",
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
                ...(await withoutVitePlugins(
                    config.plugins,
                    ["vite:dts"],
                )),
            ],
        };
    },
    docs: {
        autodocs: true,
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldIncludeExpression: false,
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            propFilter: (prop) => {
                return (
                    !prop.name.startsWith("aria-") &&
                    !excludedProps.has(prop.name)
                );
            },
        },
    },
};
export default config;
