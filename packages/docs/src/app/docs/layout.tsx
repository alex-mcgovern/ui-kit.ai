"use client";

import { Heading, ListBox, type OptionsSchema } from "@ui-kit.ai/components";
import * as components from "@ui-kit.ai/storybook";
import { useSelectedLayoutSegments } from "next/navigation";

import { hrefs } from "../../lib/hrefs";

const ITEMS: OptionsSchema<"listbox">[] = Object.keys(components).map(
    (componentName) => ({
        href: hrefs.component(componentName),
        id: componentName,
        textValue: componentName,
    }),
);

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const selectedLayoutSegments = useSelectedLayoutSegments();
    const selectedLayoutSegment =
        selectedLayoutSegments[selectedLayoutSegments.length - 1];

    return (
        <div className="grid grid-cols-[1fr_5fr_1fr] gap-8 min-h-screen">
            <nav className="bg-muted-50">
                <Heading className="px-2.5 text-sm" level={3}>
                    Components
                </Heading>
                <ListBox
                    className="max-w-64"
                    items={ITEMS}
                    selectedKeys={
                        selectedLayoutSegment != null
                            ? [selectedLayoutSegment]
                            : []
                    }
                />
            </nav>
            <main className="w-full px-4 mx-auto">{children}</main>
        </div>
    );
}
