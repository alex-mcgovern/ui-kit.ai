import {
    Description,
    DocsContext,
    Unstyled,
} from "@storybook/blocks";
import type { FC } from "react";
import React, { useContext } from "react";
import { Heading } from "../../src/components/heading";
import lodash from "lodash-es";
import { DocsStory } from "./docs-story";
import {
    Tab,
    TabList,
    TabPanel,
    Tabs,
} from "../../src/components/tabs";
interface StoriesProps {
    includePrimary?: boolean;
}

export const Stories: FC<StoriesProps> = ({
    includePrimary = true,
}) => {
    const {
        componentStories,
        projectAnnotations,
        getStoryContext,
    } = useContext(DocsContext);

    let stories = componentStories();
    const { stories: { filter } = { filter: undefined } } =
        projectAnnotations.parameters?.docs || {};
    if (filter) {
        stories = stories.filter((story) =>
            filter(story, getStoryContext(story)),
        );
    }
    // NOTE: this should be part of the default filter function. However, there is currently
    // no way to distinguish a Stories block in an autodocs page from Stories in an MDX file
    // making https://github.com/storybookjs/storybook/pull/26634 an unintentional breaking change.
    //
    // The new behavior here is that if NONE of the stories in the autodocs page are tagged
    // with 'autodocs', we show all stories. If ANY of the stories have autodocs then we use
    // the new behavior.
    const hasAutodocsTaggedStory = stories.some((story) =>
        story.tags?.includes("autodocs"),
    );
    if (hasAutodocsTaggedStory) {
        // Don't show stories where mount is used in docs.
        // As the play function is not running in docs, and when mount is used, the mounting is happening in play itself.
        stories = stories.filter(
            (story) =>
                story.tags?.includes("autodocs") &&
                !story.usesMount,
        );
    }

    if (!includePrimary) {
        stories = stories.slice(1);
    }

    if (!stories || stories.length === 0) {
        return null;
    }

    const groupedStories = lodash.groupBy(
        stories,
        (story) => {
            const groupTag = story.tags?.find((tag) =>
                tag.startsWith("group-"),
            );
            return groupTag || story.id;
        },
    );

    const groups = Object.entries(groupedStories);

    return (
        <>
            <Heading id="examples" level={2}>
                Examples
            </Heading>
            {groups.map((group) => {
                if (group[1].length === 1) {
                    return (
                        <DocsStory
                            showDescription
                            showTitle
                            key={group[1][0].id}
                            of={group[1][0].moduleExport}
                            expanded
                            __forceInitialArgs
                        />
                    );
                } else {
                    const name = group[0].replace(
                        "group-",
                        "",
                    );

                    return (
                        <>
                            <Heading
                                id={name.toLowerCase()}
                                className="capitalize"
                            >
                                {name}
                            </Heading>
                            <Description
                                of={group[1][0].id}
                            />
                            <Tabs>
                                <Unstyled>
                                    <TabList>
                                        {group[1].map(
                                            (story) => (
                                                <Tab
                                                    id={
                                                        story.id
                                                    }
                                                >
                                                    {
                                                        story.name
                                                    }
                                                </Tab>
                                            ),
                                        )}
                                    </TabList>
                                </Unstyled>

                                {group[1].map((story) => (
                                    <TabPanel id={story.id}>
                                        <DocsStory
                                            showDescription={
                                                false
                                            }
                                            showTitle={
                                                false
                                            }
                                            key={story.id}
                                            of={
                                                story.moduleExport
                                            }
                                            expanded
                                            __forceInitialArgs
                                        />
                                    </TabPanel>
                                ))}
                            </Tabs>
                        </>
                    );
                }
            })}
        </>
    );
};
