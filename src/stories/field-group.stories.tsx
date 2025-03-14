import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { FieldGroup } from "../components/field-group";
import { Input } from "../components/input";
import { Kbd } from "../components/kbd";
import { Select, SelectButton } from "../components/select";
import { TextField } from "../components/text-field";
import { getMockOptions } from "../mocks/options";

function Template(
    props: ComponentProps<typeof FieldGroup>,
) {
    return (
        <FieldGroup {...props}>
            <Select
                aria-label="Country"
                className="min-w-64 border-r border-r-muted-400"
                items={getMockOptions({
                    withIcon: true,
                    withSections: true,
                })}
                name="country"
            >
                {(rp) => (
                    <SelectButton {...rp} isBorderless />
                )}
            </Select>

            <TextField aria-label="City">
                <Input placeholder="Enter your city..." />
            </TextField>
        </FieldGroup>
    );
}

const meta = {
    args: {},
    component: FieldGroup,
    decorators: [
        (Story) => (
            <div className="mx-auto w-96">{Story()}</div>
        ),
    ],
    parameters: { actions: "disable" },
    title: "Components/FieldGroup",
} satisfies Meta<typeof FieldGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WKbd: Story = {
    args: {
        children: (
            <>
                <Input isBorderless />
                <Kbd className="mr-1.5">/</Kbd>
            </>
        ),
    },
};

export const Primary: Story = {
    args: {
        children: (
            <>
                <Select
                    aria-label="Country"
                    className="min-w-64 border-r border-r-muted-400"
                    items={getMockOptions({
                        withIcon: true,
                        withSections: true,
                    })}
                    name="country"
                >
                    {(rp) => (
                        <SelectButton
                            {...rp}
                            isBorderless
                        />
                    )}
                </Select>

                <TextField aria-label="City">
                    <Input placeholder="Enter your city..." />
                </TextField>
            </>
        ),
    },
};
