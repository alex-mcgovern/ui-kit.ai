import type { Preview } from "@storybook/react";

import "./storybook.css";

import { MDXProvider } from "@mdx-js/react";
import { ArgTypes, Title } from "@storybook/blocks";
import { DocsContainer as StorybookDocsContainer } from "@storybook/blocks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Heading } from "@ui-kit.ai/components";
import { initialize as initializeMsw, mswLoader } from "msw-storybook-addon";
import React, { type ComponentProps, type HTMLProps } from "react";
import { type ScreenshotOptions, withScreenshot } from "storycap";

import { Description } from "./components/description";
import { Primary } from "./components/primary";
import { Stories } from "./components/stories";
import { Usage } from "./components/usage";

import "@ui-kit.ai/components/style.css";

const DocsContainer = (
    props: ComponentProps<typeof StorybookDocsContainer>,
) => (
    <MDXProvider
        components={{
            h1: (props: HTMLProps<HTMLHeadingElement>) => (
                <Heading {...props} level={1} />
            ),
            h2: (props: HTMLProps<HTMLHeadingElement>) => (
                <Heading {...props} level={2} />
            ),
            h3: (props: HTMLProps<HTMLHeadingElement>) => (
                <Heading {...props} level={3} />
            ),
            h4: (props: HTMLProps<HTMLHeadingElement>) => (
                <Heading {...props} level={4} />
            ),
            h5: (props: HTMLProps<HTMLHeadingElement>) => (
                <Heading {...props} level={5} />
            ),
            h6: (props: HTMLProps<HTMLHeadingElement>) => (
                <Heading {...props} level={6} />
            ),
        }}
    >
        <StorybookDocsContainer {...props} />
    </MDXProvider>
);

initializeMsw();

const screenshotOptions: ScreenshotOptions = {
    captureBeyondViewport: false,
    fullPage: false,
    viewport: {
        deviceScaleFactor: 3,
        height: 300,
        width: 600,
    },
};

const preview: Preview = {
    decorators: [
        // @ts-expect-error - the types seem out of date
        withScreenshot,
        (Story) => {
            return (
                <QueryClientProvider client={new QueryClient()}>
                    <Story />
                </QueryClientProvider>
            );
        },
        (Story) => {
            return (
                <div className="flex min-h-24 w-full items-center justify-center p-6">
                    <Story />
                    <div
                        className="absolute inset-0 z-[-1] size-full bg-muted-50
                            bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                    />
                </div>
            );
        },
    ],
    loaders: [mswLoader],
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {},
        },
        docs: {
            container: DocsContainer,
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
            toc: {
                headingSelector: "h2, h3",
            },
        },
        layout: "centered",
        screenshot: screenshotOptions,
    },
};

export default preview;
