import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { faker } from "@faker-js/faker";

import {
    V2MobileMenu,
    V2MobileMenuFooter,
    V2MobileMenuHeader,
    V2ScrollableMobileMenuContent,
} from ".";
import { css } from "../css/index.css";

const meta = {
    args: {
        children: ({ close }) => (
            <>
                <V2MobileMenuHeader
                    close={close}
                    title="MobileMenu Title"
                />
                <V2ScrollableMobileMenuContent>
                    <>
                        <p>
                            A modal MobileMenu component powered by{" "}
                            <a href="https://react-spectrum.adobe.com/react-aria/MobileMenu.html">
                                React Aria Components
                            </a>
                        </p>
                        {Array.from({ length: 10 }, () => {
                            return (
                                <p key={faker.string.alphanumeric(4)}>
                                    {faker.lorem.paragraphs(1)}
                                </p>
                            );
                        })}
                    </>
                </V2ScrollableMobileMenuContent>
                <V2MobileMenuFooter>
                    <Button
                        className={css({ width: "100%" })}
                        onPress={() => {
                            alert("Confirmed");
                            close();
                        }}
                    >
                        Confirm
                    </Button>
                </V2MobileMenuFooter>
            </>
        ),
        modalOverlayProps: {
            isDismissable: true,
        },
    },
    component: V2MobileMenu,
    title: "MobileMenu",
} satisfies Meta<typeof V2MobileMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
