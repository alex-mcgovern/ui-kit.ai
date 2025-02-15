import type { Meta, StoryObj } from "@storybook/react";

import {
    ComboBox,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
} from "../components/combobox";
import { FieldGroup } from "../components/field-group";
import { Input } from "../components/input";
import { Kbd } from "../components/kbd";
import { Select, SelectButton } from "../components/select";
import { getMockOptions } from "../mocks/options";

const meta = {
    args: {},
    component: FieldGroup,
    parameters: {
        actions: "disable",
        layout: "centered",
    },
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

export const Example: Story = {
    args: {
        children: (
            <>
                <Select
                    aria-label="Package type"
                    className="min-w-[104px] border-r border-r-gray-400"
                    defaultSelectedKey="pypi"
                    items={getMockOptions()}
                    name="packageManager"
                >
                    {(rp) => <SelectButton {...rp} isBorderless />}
                </Select>

                <ComboBox items={getMockOptions()}>
                    <ComboBoxFieldGroup isBorderless>
                        <ComboBoxInput
                            isBorderless
                            placeholder="Search for a package..."
                        />
                        <ComboBoxClearButton />
                    </ComboBoxFieldGroup>
                </ComboBox>
            </>
        ),
    },
    decorators: (Story) => {
        return (
            <div>
                <Story />
                <div className="text-sm text-gray-500">
                    <p>
                        This composition is similar to the &quot;package
                        search&quot; in Trusty
                    </p>
                </div>
            </div>
        );
    },
};
