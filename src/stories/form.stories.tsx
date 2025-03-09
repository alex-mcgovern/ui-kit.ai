import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";

import { Form } from "../components/form";
import { FormCheckboxGroup } from "../components/form-checkbox-group";
import { FormComboBox } from "../components/form-combobox";
// import { FormRadioGroup } from "../components/form-radio-group";
import { FormSelect } from "../components/form-select";
import { FormSubmitButton } from "../components/form-submit-button";
import { FormTextField } from "../components/form-text-field";
import { Label } from "../components/label";
import { FieldGroup } from "../components/field-group";
import { Input } from "../components/input";
import { TextFieldClearButton } from "../components/text-field";
import { getMockOptions } from "../mocks/options";
import { SelectButton } from "../components/select";
import {
    ComboBoxButton,
    ComboBoxClearButton,
    ComboBoxFieldGroup,
    ComboBoxInput,
} from "../components/combobox";
import { Checkbox } from "../components/checkbox";
import { Description } from "../components/description";
import {
    AtSignIcon,
    FlagIcon,
    GlobeIcon,
} from "lucide-react";

const communicationPreferencesSchema = z.enum([
    "account_updates",
    "newsletter",
    "advertising",
]);

const schema = z.object({
    email: z.string().email().nonempty(),
    country_of_birth: z.string().nonempty(),
    country_of_residence: z.string().nonempty(),
    immigration_status: z.enum([
        "citizen",
        "permanent_resident",
        "visa_holder",
    ]),
    communication_preference: z.array(
        communicationPreferencesSchema,
    ),
});

/** You can infer the type of your field values from the schema, and pass it as
 * a type param to the Form component. This adds the correct type to argument
 * provided to the `onSubmit` callback. */
type FieldValues = z.infer<typeof schema>;

/** You can dynamically create an enum from your zod schema, which can be used
 * to name fields and ensure that they stay in sync with the schema. */
const FIELD_NAME = schema.keyof().Enum;
const IMMIGRATION_STATUS =
    schema.shape.immigration_status.Enum;
const COMMUNICATION_PREFERENCE =
    communicationPreferencesSchema.Enum;

const meta = {
    component: Form,
    title: "Components/Form",
    args: {
        onSubmit: async (data) => {
            await new Promise((resolve) =>
                setTimeout(resolve, 1_000),
            );
            alert(
                `Submitted:\n\n${JSON.stringify(data, null, 4)}`,
            );
        },
        onError: (errors) => {
            alert(
                `Errors:\n\n${JSON.stringify(errors, null, 4)}`,
            );
        },
        options: {
            resolver: zodResolver(schema),
        },
        children: (
            <>
                <FormTextField
                    name={FIELD_NAME.email}
                    className="mb-4"
                    type="email"
                >
                    <Label>
                        Email address (Text field)
                    </Label>
                    <FieldGroup>
                        <Input
                            isBorderless
                            icon={<AtSignIcon />}
                            placeholder="Enter your email address"
                        />
                        <TextFieldClearButton />
                    </FieldGroup>
                </FormTextField>

                <FormSelect
                    items={getMockOptions({
                        withIcon: true,
                    })}
                    name={FIELD_NAME.country_of_birth}
                    className="mb-4"
                >
                    <Label>Country of birth (Select)</Label>
                    <SelectButton
                        slotLeft={<GlobeIcon />}
                    />
                </FormSelect>

                <FormComboBox
                    items={getMockOptions()}
                    name={FIELD_NAME.country_of_residence}
                    className="mb-4"
                >
                    <Label>
                        Country of residence (ComboBox)
                    </Label>
                    <ComboBoxFieldGroup>
                        <ComboBoxInput
                            isBorderless
                            icon={<GlobeIcon />}
                            placeholder="Type to search..."
                        />
                        <ComboBoxClearButton />
                        <ComboBoxButton />
                    </ComboBoxFieldGroup>
                </FormComboBox>

                {/* <FormRadioGroup
                    name={FIELD_NAME.immigration_status}
                    className="mb-4"
                >
                    <Label>
                        Immigration status (RadioGroup)
                    </Label>
                    <Radio
                        value={IMMIGRATION_STATUS.citizen}
                    >
                        Citizen
                    </Radio>
                    <Radio
                        value={
                            IMMIGRATION_STATUS.permanent_resident
                        }
                    >
                        Permanent resident
                    </Radio>
                    <Radio
                        value={
                            IMMIGRATION_STATUS.visa_holder
                        }
                    >
                        Visa holder
                    </Radio>
                </FormRadioGroup> */}

                <FormCheckboxGroup
                    name={
                        FIELD_NAME.communication_preference
                    }
                    className="mb-4"
                    defaultValue={[
                        COMMUNICATION_PREFERENCE.account_updates,
                    ]}
                >
                    <Label>Communication preferences</Label>
                    <Checkbox
                        value="account-updates"
                        isDisabled
                        isRequired
                        label="Account updates"
                        description="Necessary emails about your account & account security."
                    />
                    <Checkbox
                        value="newsletter"
                        label="Newsletter"
                        description="No more than one email per month with updates from our team."
                    />
                    <Checkbox
                        value="promotions"
                        label="Promotions and Offers"
                        description="Deals, discounts and suggestions we think you'll love."
                    />
                    <Description>
                        Your preferences can be updated at
                        any time in your account settings.
                    </Description>
                </FormCheckboxGroup>

                <FormSubmitButton />
            </>
        ),
    },
} satisfies Meta<typeof Form<FieldValues>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
