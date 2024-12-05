import type { HeadingProps as RACHeadingProps } from "react-aria-components";

import clsx from "clsx";
import { Heading as RACHeading } from "react-aria-components";

import { dialogTitleStyle } from "../styles/dialog-title.css";

export const DialogTitle = (props: Omit<RACHeadingProps, "slot">) => {
    return (
        <RACHeading
            {...props}
            className={clsx(dialogTitleStyle, props.className)}
            slot="title"
        />
    );
};
