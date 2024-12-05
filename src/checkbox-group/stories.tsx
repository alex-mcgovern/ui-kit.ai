import type { Meta, StoryObj } from "@storybook/react";

import { CheckboxGroup } from ".";
import { Checkbox } from "../../packages/components/checkbox/src/components/checkbox";
import { css } from "../css/index.css";
import { Label } from "../label";

const meta = {
    args: {},
    component: CheckboxGroup,
    render: (props) => (
        <CheckboxGroup {...props}>
            <Label>Checkbox group</Label>
            <Checkbox
                className={css({ marginBottom: "space_2" })}
                value="checkbox_1"
            >
                Checkbox 1
            </Checkbox>
            <Checkbox
                className={css({ marginBottom: "space_2" })}
                value="checkbox_2"
            >
                Checkbox 2
            </Checkbox>
            <Checkbox
                className={css({ marginBottom: "space_2" })}
                value="checkbox_3"
            >
                Checkbox 3
            </Checkbox>
        </CheckboxGroup>
    ),
    title: "CheckboxGroup",
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
