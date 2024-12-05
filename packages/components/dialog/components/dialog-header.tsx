import type { HTMLProps } from "react";

import clsx from "clsx";

import { dialogHeaderStyle } from "../styles/dialog-header.css";

export const DialogHeader = (props: HTMLProps<HTMLElement>) => {
    return (
        <header
            {...props}
            className={clsx(dialogHeaderStyle, props.className)}
        />
    );
};
