import React from "react";
import "./storybook.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initialize as initializeMsw, mswLoader } from "msw-storybook-addon";

initializeMsw();

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {},
        },
    },
    loaders: [mswLoader],
    decorators: [
        (Story) => {
            return (
                <div>
                    <Story />
                    <div
                        style={{
                            position: "absolute",
                            zIndex: -1,
                            backgroundImage:
                                "linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to bottom, #ddd 1px, transparent 1px)",
                            backgroundSize: "16px 16px",
                            inset: 0,
                        }}
                    />
                </div>
            );
        },
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
