import type { Meta, StoryObj } from "@storybook/react";

import {
    ComboBox,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
} from "../components/combo-box";
import { FieldGroup } from "../components/field-group";
import { Input } from "../components/input";
import { Kbd } from "../components/kbd";
import { Select, SelectButton } from "../components/select";
import { getMockOptions } from "../mocks/options";

const meta = {
    args: {},
    component: FieldGroup,
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
                    aria-label="Package type"
                    className="min-w-64 border-r border-r-gray-400"
                    defaultSelectedKey="pypi"
                    items={getMockOptions()}
                    name="packageManager"
                >
                    {(rp) => (
                        <SelectButton
                            {...rp}
                            isBorderless
                        />
                    )}
                </Select>

                <ComboBox items={getMockOptions()}>
                    <ComboBoxFieldGroup isBorderless>
                        <ComboBoxInput
                            isBorderless
                            placeholder="Type to search..."
                        />
                        <ComboBoxClearButton />
                    </ComboBoxFieldGroup>
                </ComboBox>
            </>
        ),
    },
};
