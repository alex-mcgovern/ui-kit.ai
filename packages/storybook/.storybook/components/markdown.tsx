import type { ComponentProps } from "react";

import {
    AnchorMdx,
    CodeOrSourceMdx,
    Markdown as SbMarkdown,
} from "@storybook/blocks";
import React from "react";

import { Heading } from "../../src/components/heading";

export const Markdown = (
    props: ComponentProps<typeof SbMarkdown>,
) => {
    return (
        <>
            <SbMarkdown
                {...props}
                options={{
                    forceBlock: true,
                    overrides: {
                        a: AnchorMdx,
                        code: CodeOrSourceMdx,
                        h1: (props) => (
                            <Heading {...props} level={1} />
                        ),
                        h2: (props) => (
                            <Heading {...props} level={2} />
                        ),
                        h3: (props) => (
                            <Heading {...props} level={3} />
                        ),
                        h4: (props) => (
                            <Heading {...props} level={4} />
                        ),
                        h5: (props) => (
                            <Heading {...props} level={5} />
                        ),
                        h6: (props) => (
                            <Heading {...props} level={6} />
                        ),
                        ...props.options?.overrides,
                    },
                    ...props.options,
                }}
            />
        </>
    );
};
