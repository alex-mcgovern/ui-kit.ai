import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/button";
import { Form } from "../components/form";

const meta = {
    component: Form,
    parameters: {
        layout: "centered",
    },
    title: "Form",
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
    render: (args) => (
        <Form {...args}>
            {/* <TextField className="mb-4" isRequired name="email" type="email">
                <Label>Email</Label>
                <Input />
                <FieldError />
            </TextField>

            <DatePicker className="mb-4" isRequired>
                <Label>Birth date</Label>
                <FieldGroup>
                    <DateInput isBorderless />
                    <DatePickerButton />
                </FieldGroup>
                <FieldError />
            </DatePicker> */}

            <div className="flex gap-2">
                <Button type="submit">Submit</Button>
                <Button type="reset" variant="secondary">
                    Reset
                </Button>
            </div>
        </Form>
    ),
};
