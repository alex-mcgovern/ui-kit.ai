import type { HTMLProps, ReactNode } from "react";

import { typography } from "@boondoggle/css-variants";

import type { WithName } from "../types";

import { Box } from "../box";
import {
    radioButtonCardInputStyles,
    radioButtonCardLabelStyles,
} from "./styles.css";

export type RadioButtonInputProps = Omit<
    HTMLProps<HTMLInputElement>,
    "className" | "id" | "name" | "required" | "type" | "value"
>;

export type RadioButtonCardShape = {
    adornment: ReactNode;

    body?: string;

    checked?: boolean;

    tag?: string;

    title: string;

    value: string;
};

export type RadioButtonCardProps = RadioButtonCardShape &
    WithName & {
        inputProps?: RadioButtonInputProps;

        onChange?: (value: string) => void;

        required?: boolean;
    };

export function RadioButtonCard({
    adornment,
    body,
    checked,
    inputProps,
    name,
    onChange,
    required,
    title,
    value,
}: RadioButtonCardProps) {
    return (
        <Box
            as="label"
            className={radioButtonCardLabelStyles}
            htmlFor={`${name}-${value}`}
            position="relative"
        >
            <input
                className={radioButtonCardInputStyles}
                defaultChecked={checked}
                id={`${name}-${value}`}
                name={name}
                onChange={() => {
                    onChange?.(value);
                }}
                required={required}
                type="radio"
                value={value}
                {...inputProps}
            />
            <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
            >
                {adornment && (
                    <Box
                        color="text_low_contrast"
                        marginBottom="space_4"
                    >
                        {adornment}
                    </Box>
                )}
                <Box
                    alignItems="center"
                    display="flex"
                    gap="space_2"
                >
                    <Box color="text_low_contrast">{title}</Box>
                </Box>
                <Box
                    className={typography.body_sm}
                    color="text_low_contrast"
                >
                    {body}
                </Box>
            </Box>
        </Box>
    );
}
