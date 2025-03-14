import {
    Anchor,
    Description,
    useOf,
    type DocsStoryProps,
} from "@storybook/blocks";
import type { FC } from "react";
import React from "react";
import { Canvas } from "./canvas";
import { Heading } from "../../src/components/heading";

const removeEmptyEventHandlers = (code: string): string => {
    const withoutEmptyHandlers = code
        .split("\n")
        .filter(
            (line) =>
                !line
                    .trim()
                    .match(
                        /^on\w+={\(\) \=\> \{\}}\s*,?\s*$/,
                    ),
        )
        .map((line) =>
            line.replace(/\s*on\w+={}\s*,?\s*/g, ""),
        )
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
        showTitle: boolean;
        showDescription: boolean;
    }
> = ({
    of,
    __forceInitialArgs = false,
    __primary = false,
    showTitle,
    showDescription,
}) => {
    const { story } = useOf(of || "story", ["story"]);

    return (
        <Anchor storyId={story.id}>
            {showTitle ? (
                <Heading level={3}>{story.name}</Heading>
            ) : null}
            {showDescription ? (
                <Description of={of} />
            ) : null}
            <Canvas
                of={of}
                story={{ __forceInitialArgs, __primary }}
                source={{
                    __forceInitialArgs,
                    transform: removeEmptyEventHandlers,
                }}
            />
        </Anchor>
    );
};
