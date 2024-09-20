import { typography } from "@boondoggle/css-variants";
import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import { Children } from "react";

import type { WithColorOverlay, WithSlots } from "../types";

import { Box } from "../box";
import { Icon } from "../icon";
import { dialogAlertSlotCSS, dialogAlertWrapperCSS } from "./styles.css";

/**
 * Renders an inline alert for use ina  Dialog component.
 */
export function V2DialogAlert({
    colorOverlay = "amber",
    description,
    slotLeft = <Icon icon={faInfoCircle} />,
    slotRight,
    title,
}: WithSlots &
    WithColorOverlay & {
        /**
         * The description text of the alert.
         */
        description?: string;
        /**
         * The title text of the alert.
         */
        title: string;
    }) {
    return (
        <Box className={dialogAlertWrapperCSS({ colorOverlay })}>
            {slotLeft && (
                <Box className={dialogAlertSlotCSS}>
                    {Children.map(slotLeft, (child) => {
                        return child;
                    })}
                </Box>
            )}

            <Box
                className={typography.body_sm}
                color="text_low_contrast"
            >
                {title ? <Box fontWeight="semibold">{title}</Box> : null}
                {description ? description : null}
            </Box>

            {slotLeft && (
                <Box className={dialogAlertSlotCSS}>
                    {Children.map(slotRight, (child) => {
                        return child;
                    })}
                </Box>
            )}
        </Box>
    );
}
