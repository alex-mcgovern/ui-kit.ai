import type { HTMLProps } from "react";

import clsx from "clsx";

import { fieldIconContainerStyle } from "../styles/field-icon-container.css";
import { fieldIconContainerIdentifier } from "../styles/field-icon-container-identifier.css";
import { fieldIconContainerInertStyle } from "../styles/field-icon-container-inert.css";

export interface FieldIconContainerProps extends HTMLProps<HTMLDivElement> {
    isInert?: boolean;
}

export function FieldIconContainer({
    isInert = false,
    ...props
}: FieldIconContainerProps) {
    return (
        <div
            {...props}
            className={clsx(
                fieldIconContainerStyle,
                isInert && fieldIconContainerInertStyle,
                fieldIconContainerIdentifier,
                props.className,
            )}
        />
    );
}
