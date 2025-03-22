"use client";

import {
    Card,
    CardBody,
    CardHeader,
    CodeBlock,
    Tab,
    TabList,
    TabPanel,
    Tabs,
} from "@ui-kit.ai/components";
import {
    createContext,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";

export const ShowCodeContext = createContext<
    [boolean, Dispatch<SetStateAction<boolean>>] | null
>(null);

export function Code({
    code,
    component,
}: {
    code: string;
    component: ReactNode;
}) {
    return (
        <Card>
            <Tabs>
                <CardHeader className="p-0">
                    <TabList className="w-full">
                        <Tab id="preview">Preview</Tab>
                        <Tab id="code">Code</Tab>
                    </TabList>
                </CardHeader>
                <CardBody>
                    <TabPanel
                        className="flex items-center justify-center"
                        id="preview"
                    >
                        {component}
                    </TabPanel>
                    <TabPanel id="code">
                        <CodeBlock language="typescript">{code}</CodeBlock>
                    </TabPanel>
                </CardBody>
            </Tabs>
        </Card>
    );
}
