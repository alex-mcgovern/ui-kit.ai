"use client";
import type { ReactNode } from "react";

import {
    Card,
    CardBody,
    CardHeader,
    Description,
    Heading,
    TabsItem,
    TabsList,
    TabsPanel,
    Tabs,
} from "@ui-kit.ai/components";
import * as components from "@ui-kit.ai/storybook";
import { groupBy } from "lodash-es";
import {
    type Options,
    default as reactElementToJSXString,
} from "react-element-to-jsx-string";

const JSX_STRING_OPTIONS = {
    filterProps(_value, key) {
        return key !== "data-testid" && key !== "key";
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    functionValue: (fn: Function) => fn.toString(),
    showFunctions: true,
    useBooleanShorthandSyntax: true,

    useFragmentShortSyntax: true,
} as const satisfies Options;
export default function Page({
    params,
}: {
    params: { component: keyof typeof components };
}) {
    if (params.component in components === false) {
        throw new Error("Component not found");
    }
    const stories = components[params.component];

    const groupedStories = groupBy(stories, (story) => {
        const groupTag = story.tags.find((tag) => tag.startsWith("group-"));
        return groupTag ?? story.id;
    });

    const groups = Object.entries(groupedStories);
    console.debug("👉 groups:", groups);

    console.debug("👉 components:", components);

    return (
        <>
            <Heading className="text-3xl" level={1}>
                {params.component}
            </Heading>
            {groups.map((group) => {
                if (group[1].length === 1) {
                    const Story = group[1][0];

                    return (
                        <>
                            <Heading
                                className="text-lg capitalize"
                                id={Story.storyName}
                                level={3}
                            >
                                {Story.storyName}
                            </Heading>
                            <ExampleContainer>
                                <Story />
                            </ExampleContainer>

                            <code>
                                {reactElementToJSXString(
                                    (Story as () => ReactNode)(),
                                    JSX_STRING_OPTIONS,
                                )}
                            </code>
                        </>
                    );
                } else {
                    const name = group[0].replace("group-", "");

                    return (
                        <section className="mb-12 w-full">
                            <Heading
                                className="text-lg capitalize"
                                id={name.toLowerCase()}
                                level={3}
                            >
                                {name}
                            </Heading>
                            {/* <Description of={group[1][0]} /> */}
                            <Card>
                                <Tabs>
                                    <CardHeader className="p-0">
                                        <TabsList className="w-full">
                                            {group[1].map((story) => (
                                                <TabsItem id={story.storyName}>
                                                    {group[0].replace(
                                                        "group-",
                                                        "",
                                                    )}
                                                </TabsItem>
                                            ))}
                                        </TabsList>
                                    </CardHeader>
                                    {group[1].map((Story) => {
                                        console.debug("👉 Story:", Story);
                                        return (
                                            <TabsPanel id={Story.storyName}>
                                                <CardBody className="border-b border-b-muted-300 flex items-center justify-center min-h-24">
                                                    <Story key={Story} />
                                                </CardBody>
                                                <CardBody>
                                                    <code className="text-sm">
                                                        {reactElementToJSXString(
                                                            (
                                                                Story as () => ReactNode
                                                            )(),
                                                            JSX_STRING_OPTIONS,
                                                        )}
                                                    </code>
                                                </CardBody>
                                            </TabsPanel>
                                        );
                                    })}
                                </Tabs>
                            </Card>
                        </section>
                    );
                }
            })}
        </>
    );
    // return (
    //     <>
    //         {Object.values(stories).map((Component) => {
    //             console.debug("👉 Component:", Component);
    //             return (
    //                 <div>
    //                     <Heading className="text-lg" level={3}>
    //                         {Component.storyName}
    //                     </Heading>
    //                     <Component />
    //                 </div>
    //             );
    //         })}
    //     </>
    // );
}

function ExampleContainer({ children }: { children: ReactNode }) {
    return (
        <div className=" bg-base shadow-sm flex min-h-24 mb-12 w-full items-center justify-center border border-muted-300 px-6 py-4 rounded-md">
            {children}
        </div>
    );
}
