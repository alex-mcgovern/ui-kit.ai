import type { CalendarDate, ZonedDateTime } from "@internationalized/date";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@boondoggle.design/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseAbsoluteToLocal } from "@internationalized/date";
import { z } from "zod";

import { Form } from ".";
import { Checkbox } from "../checkbox";
import { FormCheckboxGroup } from "../checkbox-group";
import { ComboBoxButton, FormComboBox } from "../combo-box";
import { FormComboBoxCountry } from "../combo-box-country";
import { css } from "../css/index.css";
import { DateInput } from "../date-input";
import { DatePickerButton, FormDatePicker } from "../date-picker";
import { Group } from "../group";
import { FlagEu } from "../icon-flag/eu";
import { FlagGb } from "../icon-flag/gb";
import { FlagUs } from "../icon-flag/us";
import { Input } from "../input";
import { Label } from "../label";
import {
    FormNumberField,
    NumberFieldDecrementButton,
    NumberFieldIncrementButton,
} from "../number-field";
import {
    FormSelect,
    SelectButton,
} from "../../packages/components/select/src/select";
import { TextArea } from "../text-area";
import { FormTextField, TextFieldVisibilityButton } from "../text-field";
import { Toaster } from "../toaster";

const zodSchema = z.object({
    amount: z.number(),
    count: z.number(),
    country: z.string(),
    currency: z.enum(["EUR", "USD", "GBP"]),
    date_of_birth: z.custom<CalendarDate>().transform((v) => {
        return v.toString();
    }),
    date_time: z.custom<ZonedDateTime>().transform((v) => {
        return v.toString();
    }),
    description: z.string().min(1).max(20),
    email_address: z.string().email(),
    favourite_food: z.enum(["apple", "tomato", "carrot", "lettuce"]),
    fruits: z.enum(["apple", "orange", "lemon"]).array().nonempty(),
    full_name: z.string(),
    password: z.string(),
});

type FieldValues = z.infer<typeof zodSchema>;

const meta = {
    args: {
        children: null,
        className: css({ width: "main_sm" }),
        handleSubmit: (fieldValues) => {
            alert(
                `Form submitted successfully \n ${JSON.stringify(fieldValues)}`,
            );
        },
        name: "form",
        resolver: zodResolver(zodSchema),
    },
    component: Form,
    decorators: [
        (Story) => {
            return (
                <>
                    <Toaster />
                    <Story />
                </>
            );
        },
    ],
    render: (args) => {
        return (
            <Form<FieldValues> {...args}>
                {({ currency }) => {
                    return (
                        <>
                            {/** --------------------------------------------
                             * @example Text field
                             * ----------------------------------------------- */}

                            <FormTextField
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                name="full_name"
                            >
                                <Label>Full name</Label>
                                <Input />
                            </FormTextField>

                            {/** --------------------------------------------
                             * @example Text field with email validation
                             * ----------------------------------------------- */}

                            <FormTextField
                                autoComplete="off"
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                name="email_address"
                                type="email"
                            >
                                <Label>Email address</Label>
                                <Input />
                            </FormTextField>

                            {/** --------------------------------------------
                             * @example Text field with visibility toggle
                             * ----------------------------------------------- */}

                            <FormTextField
                                autoComplete="off"
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                name="password"
                                type="password"
                            >
                                <Label>Password</Label>
                                <Group>
                                    <Input variant="unstyled" />
                                    <TextFieldVisibilityButton />
                                </Group>
                            </FormTextField>

                            {/** --------------------------------------------
                             * @example Check box group
                             * ----------------------------------------------- */}

                            <FormCheckboxGroup
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                name="fruits"
                            >
                                <Label>Fruits</Label>
                                <Checkbox
                                    className={css({
                                        marginBottom: "space_2",
                                    })}
                                    value="apple"
                                >
                                    Apple
                                </Checkbox>
                                <Checkbox
                                    className={css({
                                        marginBottom: "space_2",
                                    })}
                                    value="orange"
                                >
                                    Orange
                                </Checkbox>
                                <Checkbox
                                    className={css({
                                        marginBottom: "space_2",
                                    })}
                                    value="lemon"
                                >
                                    Lemon
                                </Checkbox>
                            </FormCheckboxGroup>

                            {/** --------------------------------------------
                             * @example Date picker field with date
                             * ----------------------------------------------- */}

                            <FormDatePicker
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                name="date_of_birth"
                            >
                                <Label>Date of birth</Label>
                                <Group>
                                    <DateInput variant="unstyled" />
                                    <DatePickerButton />
                                </Group>
                            </FormDatePicker>

                            {/** --------------------------------------------
                             * @example Date picker field with datetime
                             * ----------------------------------------------- */}

                            <FormDatePicker
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                defaultValue={parseAbsoluteToLocal(
                                    new Date().toISOString(),
                                )}
                                name="date_time"
                            >
                                <Label>Date/time</Label>
                                <Group>
                                    <DateInput variant="unstyled" />
                                    <DatePickerButton />
                                </Group>
                            </FormDatePicker>

                            {/** --------------------------------------------
                             * @example Number field
                             * ----------------------------------------------- */}

                            <FormNumberField
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                name="count"
                                step={100}
                            >
                                <Label>Count</Label>
                                <Group>
                                    <Input variant="unstyled" />
                                    <NumberFieldDecrementButton />
                                    <NumberFieldIncrementButton />
                                </Group>
                            </FormNumberField>

                            {/** --------------------------------------------
                             * @example Number field with currency select
                             * ----------------------------------------------- */}

                            <div
                                className={css({
                                    marginBottom: "space_2",
                                })}
                            >
                                <Label htmlFor="amount">Amount</Label>
                                <div
                                    className={css({
                                        alignItems: "start",
                                        display: "flex",
                                        gap: "space_2",
                                    })}
                                >
                                    <FormNumberField
                                        className={css({ width: "100%" })}
                                        formatOptions={{
                                            currency: currency ?? "GBP",
                                            currencyDisplay: "code",
                                            style: "currency",
                                        }}
                                        id="amount"
                                        name="amount"
                                    >
                                        <Input />
                                    </FormNumberField>

                                    <FormSelect<"EUR" | "GBP" | "USD">
                                        aria-label="Currency"
                                        items={[
                                            {
                                                id: "EUR",
                                                name: "EUR",
                                                slotLeft: (
                                                    <FlagEu
                                                        height="space_4"
                                                        width="space_4"
                                                    />
                                                ),
                                            },
                                            {
                                                id: "USD",
                                                name: "USD",
                                                slotLeft: (
                                                    <FlagUs
                                                        height="space_4"
                                                        width="space_4"
                                                    />
                                                ),
                                            },
                                            {
                                                id: "GBP",
                                                name: "GBP",
                                                slotLeft: (
                                                    <FlagGb
                                                        height="space_4"
                                                        width="space_4"
                                                    />
                                                ),
                                            },
                                        ]}
                                        name="currency"
                                        placement="bottom end"
                                    >
                                        <SelectButton aria-label="Currency" />
                                    </FormSelect>
                                </div>
                            </div>

                            {/** --------------------------------------------
                             * @example Combobox
                             * ----------------------------------------------- */}

                            <FormComboBox<
                                "apple" | "carrot" | "lettuce" | "tomato"
                            >
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                defaultItems={[
                                    {
                                        children: [
                                            {
                                                id: "apple",
                                                name: "Apple",
                                            },
                                            {
                                                description:
                                                    "Yes, it's a fruit",
                                                id: "tomato",
                                                name: "Tomato",
                                            },
                                        ],
                                        id: "fruits",
                                        name: "Fruits",
                                    },
                                    {
                                        children: [
                                            {
                                                id: "carrot",
                                                name: "Carrot",
                                            },
                                            {
                                                id: "lettuce",
                                                name: "Lettuce",
                                            },
                                        ],
                                        id: "vegetables",
                                        name: "Vegetables",
                                    },
                                ]}
                                name="favourite_food"
                            >
                                <Label>Favourite food</Label>
                                <Group>
                                    <Input
                                        placeholder="Type a food..."
                                        variant="unstyled"
                                    />
                                    <ComboBoxButton />
                                </Group>
                            </FormComboBox>

                            {/** --------------------------------------------
                             * @example Combobox with country list
                             * ----------------------------------------------- */}

                            <FormComboBoxCountry
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                name="country"
                            >
                                <Label>Country</Label>
                                <Group>
                                    <Input
                                        placeholder="Type a country..."
                                        variant="unstyled"
                                    />
                                    <ComboBoxButton />
                                </Group>
                            </FormComboBoxCountry>

                            {/** --------------------------------------------
                             * @example Text area
                             * ----------------------------------------------- */}

                            <FormTextField
                                className={css({
                                    marginBottom: "space_2",
                                })}
                                name="description"
                            >
                                <Label>Description of your issue</Label>
                                <TextArea />
                            </FormTextField>

                            <Button
                                className={css({ width: "100%" })}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </>
                    );
                }}
            </Form>
        );
    },
    title: "Form",
} satisfies Meta<typeof Form<FieldValues>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
