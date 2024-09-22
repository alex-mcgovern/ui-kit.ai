import { StorybookConfig } from "@storybook/react-webpack5";
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin";
import { merge } from "webpack-merge";

const config: StorybookConfig = {
    addons: ["@storybook/addon-essentials"],
    docs: {
        autodocs: false,
    },
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    stories: [
        "../(src|packages|documentation)/**/*.stories.tsx",
        "../(src|packages|documentation)/**/stories.tsx",
        "../(src|packages|documentation)/**/*.mdx",
    ],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            shouldIncludeExpression: false,
            shouldRemoveUndefinedFromOptional: true,
            shouldExtractLiteralValuesFromEnum: false,
        },
    },
    webpackFinal: async (config) =>
        merge(config, {
            plugins: [
                new VanillaExtractPlugin({
                    identifiers: "debug",
                    outputCss: true,
                }),
            ],
        }),
};

export default config;
