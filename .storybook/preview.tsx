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
        (Story) => {
            return (
                <div className="flex items-center justify-center py-6">
                    <Story />
                    <div
                        className="absolute inset-0 z-[-1] h-full w-full bg-white
                            bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                    />
                </div>
            );
        },
    ],
};

export default preview;
