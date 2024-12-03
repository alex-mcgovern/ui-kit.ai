import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";

import {
    NumberField,
    NumberFieldDecrementButton,
    NumberFieldIncrementButton,
} from ".";
import { css } from "../css/index.css";
import { Group } from "../group";
import { FlagEu } from "../icon-flag/eu";
import { FlagGb } from "../icon-flag/gb";
import { FlagUs } from "../icon-flag/us";
import { Input } from "../input";
import { Label } from "../label";
import {
    Select,
    SelectButton,
} from "../../packages/components/select/src/select";
import { Toaster } from "../toaster";

const meta = {
    args: {},
    component: NumberField,
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
            <NumberField {...args}>
                <Label>Label</Label>
                <Input />
            </NumberField>
        );
    },
    title: "NumberField",
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
    args: {
        isInvalid: true,
    },
};

export const Percent: Story = {
    args: {
        formatOptions: {
            style: "percent",
        },
        maxValue: 1,
        minValue: 0,
        step: 0.01,
    },
};

export const KitchenSink: Story = {
    args: {
        defaultValue: 42000.69,
    },
    render: (args) => {
        return (
            <NumberField {...args}>
                <Label>Label</Label>
                <Group>
                    <NumberFieldDecrementButton />
                    <Input variant="unstyled" />
                    <NumberFieldIncrementButton />
                </Group>
            </NumberField>
        );
    },
};

export const ExampleComposedCurrencyField: Story = {
    args: {
        defaultValue: 42000.69,
        id: "amount",
        name: "amount",
    },
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [currency, setCurrency] = useState<"EUR" | "GBP" | "USD">("EUR");
        return (
            <div
                className={css({
                    marginBottom: "space_2",
                })}
            >
                <Label htmlFor="amount">Amount</Label>
                <div
                    className={css({
                        alignItems: "center",
                        display: "flex",
                        gap: "space_2",
                    })}
                >
                    <NumberField
                        defaultValue={42000.69}
                        formatOptions={{
                            currency,
                            currencyDisplay: "code",
                            style: "currency",
                        }}
                        id="amount"
                        name="amount"
                    >
                        <Input />
                    </NumberField>

                    <Select<"EUR" | "GBP" | "USD">
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
                        onSelectionChange={(k) => {
                            setCurrency(k as typeof currency);
                        }}
                        placement="bottom end"
                        selectedKey={currency}
                    >
                        <SelectButton />
                    </Select>
                </div>
            </div>
        );
    },
};
