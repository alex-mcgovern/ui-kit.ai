import type { FC } from "react";

import {
    Anchor,
    Description,
    type DocsStoryProps,
    useOf,
} from "@storybook/blocks";
import React from "react";

import { Heading } from "@ui-kit.ai/components";
import { Canvas } from "./canvas";

const removeEmptyEventHandlers = (code: string): string => {
    const withoutEmptyHandlers = code
        .split("\n")
        .filter((line) => !line.trim().match(/^on\w+={\(\) => \{\}}\s*,?\s*$/))
        .map((line) => line.replace(/\s*on\w+={}\s*,?\s*/g, ""))
        .join("\n");

    const hasNeedlessFragment =
        withoutEmptyHandlers.startsWith("<>") &&
        withoutEmptyHandlers.endsWith("</>");

    if (hasNeedlessFragment) {
        return withoutEmptyHandlers
            .slice(2, -3) // remove needless fragment
            .split("\n")
            .map((line) => line.replace(/^\s{1,2}/, ""))
            .join("\n");
    }
    return withoutEmptyHandlers;
};

export const DocsStory: FC<
    DocsStoryProps & {
        showDescription: boolean;
        showTitle: boolean;
    }
> = ({
    __forceInitialArgs = false,
    __primary = false,
    of,
    showDescription,
    showTitle,
}) => {
    const { story } = useOf(of ?? "story", ["story"]);

    return (
        <Anchor storyId={story.id}>
            {showTitle ? <Heading level={3}>{story.name}</Heading> : null}
            {showDescription ? <Description of={of} /> : null}
            <Canvas
                of={of}
                source={{
                    __forceInitialArgs,
                    transform: removeEmptyEventHandlers,
                }}
                story={{ __forceInitialArgs, __primary }}
            />
        </Anchor>
    );
};
