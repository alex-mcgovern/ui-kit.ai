import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@ui-kit.ai/components";
import {
    ComboBoxButton,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
    Description,
    FieldGroup,
    Form,
    FormCheckboxGroup,
    FormComboBox,
    FormSelect,
    FormSubmitButton,
    FormTextField,
    Input,
    Label,
    SelectButton,
    TextFieldClearButton,
} from "@ui-kit.ai/components";
import { getMockOptions } from "@ui-kit.ai/mocks";
import { AtSignIcon, GlobeIcon } from "lucide-react";
import { z } from "zod";

const communicationPreferencesSchema = z.enum([
    "account_updates",
    "newsletter",
    "advertising",
]);

const schema = z.object({
    communication_preference: z.array(communicationPreferencesSchema),
    country_of_birth: z.string().nonempty(),
    country_of_residence: z.string().nonempty(),
    email: z.string().email().nonempty(),
    immigration_status: z.enum([
        "citizen",
        "permanent_resident",
        "visa_holder",
    ]),
});

/** You can infer the type of your field values from the schema, and pass it as
 * a type param to the Form component. This adds the correct type to argument
 * provided to the `onSubmit` callback. */
type FieldValues = z.infer<typeof schema>;

/** You can dynamically create an enum from your zod schema, which can be used
 * to name fields and ensure that they stay in sync with the schema. */
const FIELD_NAME = schema.keyof().Enum;
// const IMMIGRATION_STATUS =
//     schema.shape.immigration_status.Enum;
const COMMUNICATION_PREFERENCE = communicationPreferencesSchema.Enum;

function Template(props: ComponentProps<typeof Form<FieldValues>>) {
    return (
        <Form<FieldValues> {...props}>
            <FormTextField
                className="mb-4"
                name={FIELD_NAME.email}
                type="email"
            >
                <Label>Email address (Text field)</Label>
                <FieldGroup>
                    <Input
                        icon={<AtSignIcon />}
                        isBorderless
                        placeholder="Enter your email address"
                    />
                    <TextFieldClearButton />
                </FieldGroup>
            </FormTextField>

            <FormSelect
                className="mb-4"
                items={getMockOptions({
                    withIcon: true,
                })}
                name={FIELD_NAME.country_of_birth}
            >
                <Label>Country of birth (Select)</Label>
                <SelectButton slotLeft={<GlobeIcon />} />
            </FormSelect>

            <FormComboBox
                className="mb-4"
                items={getMockOptions()}
                name={FIELD_NAME.country_of_residence}
            >
                <Label>Country of residence (ComboBox)</Label>
                <ComboBoxFieldGroup>
                    <ComboBoxInput
                        icon={<GlobeIcon />}
                        isBorderless
                        placeholder="Type to search..."
                    />
                    <ComboBoxClearButton />
                    <ComboBoxButton />
                </ComboBoxFieldGroup>
            </FormComboBox>

            <FormCheckboxGroup
                className="mb-4"
                defaultValue={[COMMUNICATION_PREFERENCE.account_updates]}
                name={FIELD_NAME.communication_preference}
            >
                <Label>Communication preferences</Label>
                <Checkbox
                    description="Necessary emails about your account & account security."
                    isDisabled
                    isRequired
                    label="Account updates"
                    value="account-updates"
                />
                <Checkbox
                    description="No more than one email per month with updates from our team."
                    label="Newsletter"
                    value="newsletter"
                />
                <Checkbox
                    description="Deals, discounts and suggestions we think you'll love."
                    label="Promotions and Offers"
                    value="promotions"
                />
                <Description>
                    Your preferences can be updated at any time in your account
                    settings.
                </Description>
            </FormCheckboxGroup>

            <FormSubmitButton />
        </Form>
    );
}

const meta = {
    args: {
        onError: (errors) => {
            alert(`Errors:\n\n${JSON.stringify(errors, null, 4)}`);
        },
        onSubmit: async (data) => {
            await new Promise((resolve) => setTimeout(resolve, 1_000));
            alert(`Submitted:\n\n${JSON.stringify(data, null, 4)}`);
        },
        options: {
            resolver: zodResolver(schema),
        },
    },
    component: Form,
    render: Template,
    title: "Components/Form",
} satisfies Meta<typeof Form<FieldValues>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    // @ts-expect-error - we're not passing children and that's alright
    args: {},
};
