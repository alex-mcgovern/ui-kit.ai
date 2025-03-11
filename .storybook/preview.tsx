import React from "react";
import "./storybook.css";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import {
    initialize as initializeMsw,
    mswLoader,
} from "msw-storybook-addon";
import theme from "./theme";
import { Title, ArgTypes } from "@storybook/blocks";
import { Heading } from "../src/components/heading";
import { Description } from "./components/description";
import { Usage } from "./components/usage";
import { MDXProvider } from "@mdx-js/react";

import { DocsContainer as StorybookDocsContainer } from "@storybook/blocks";
import {
    type Preview,
    type ArgTypes as TArgTypes,
} from "@storybook/react";
import { Primary } from "./components/primary";
import { Stories } from "./components/stories";
import { Source } from "./components/source";

const DocsContainer = (props) => (
    <MDXProvider
        components={{
            h1: (props) => <Heading {...props} level={1} />,
            h2: (props) => <Heading {...props} level={2} />,
            h3: (props) => <Heading {...props} level={3} />,
            h4: (props) => <Heading {...props} level={4} />,
            h5: (props) => <Heading {...props} level={5} />,
            h6: (props) => <Heading {...props} level={6} />,
        }}
    >
        <StorybookDocsContainer {...props} />
    </MDXProvider>
);

initializeMsw();

const preview: Preview = {
    parameters: {
        docs: {
            theme,
            toc: {
                headingSelector: "h2, h3",
            },
            // components: {
            //     source: Source,
            // },
            page: () => (
                <>
                    <Title />
                    <Description />
                    <Primary />
                    <Usage />
                    <Stories includePrimary={false} />
                    <Heading id="props" level={2}>
                        Props
                    </Heading>
                    <ArgTypes />
                </>
            ),
            container: DocsContainer,
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {},
        },
        layout: "fullscreen",
    },
    loaders: [mswLoader],
    decorators: [
        (Story) => {
            return (
                <QueryClientProvider
                    client={new QueryClient()}
                >
                    <Story />
                </QueryClientProvider>
            );
        },
        (Story) => {
            return (
                <div className="flex min-h-48 w-full items-center justify-center p-6">
                    <Story />
                    <div
                        className="absolute inset-0 z-[-1] h-full w-full bg-white
                            bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
                            [background-size:16px_16px]"
                    />
                </div>
            );
        },
    ],
};

export default preview;
