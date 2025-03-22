"use client";
import type { ComponentDoc } from "react-docgen-typescript";

import { Heading, Markdown } from "@ui-kit.ai/components";
import * as components from "@ui-kit.ai/metadata";
import propTypes from "@ui-kit.ai/metadata/prop-types.json";
import usage from "@ui-kit.ai/metadata/usage-examples.json";

import { Code } from "../../../../components/code";
import { PropsTable } from "../../../../components/props-table";
import { getComponentStories } from "../../../../lib/get-story";
import { getUsageExample } from "../../../../lib/get-usage-example";

export default function Page({
    params,
}: {
    params: { component: keyof typeof components };
}) {
    if (params.component in components === false)
        throw new Error("Examples for component not found");
    if (params.component in usage === false)
        throw new Error("Code snippet for component not found");
    if (
        (propTypes as ComponentDoc[]).findIndex(
            (prop) => prop.displayName === params.component,
        ) === -1
    )
        throw new Error("Code snippet for component not found");

    const stories = getComponentStories(params.component);

    const docs = (propTypes as ComponentDoc[]).find(
        (prop) => prop.displayName === params.component,
    ) as ComponentDoc;

    return (
        <>
            <Heading level={1}>{docs.displayName}</Heading>
            <Markdown>{docs.description}</Markdown>

            <hr className="border-muted-200 my-12" />

            <Heading id="Examples" level={2}>
                Examples
            </Heading>

            {stories.map((Story) => (
                <section className="my-12" key={Story.id}>
                    <Heading id={Story.parameters.displayName} level={3}>
                        {Story.parameters.displayName}
                    </Heading>
                    <Code
                        code={getUsageExample(
                            params.component,
                            Story.storyName,
                        )}
                        component={<Story />}
                    />
                </section>
            ))}

            {/* <PropsTable docs={docs} /> */}
        </>
    );
}
