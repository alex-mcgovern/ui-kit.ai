import React from "react";
import "./storybook.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initialize as initializeMsw, mswLoader } from "msw-storybook-addon";
import theme from "./theme";

initializeMsw();

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        docs: {
            theme,
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {},
        },
    },
    loaders: [mswLoader],
    decorators: [
        (Story) => {
            return (
                <QueryClientProvider client={new QueryClient()}>
                    <Story />
                </QueryClientProvider>
            );
        },
    ],
};

export default preview;
