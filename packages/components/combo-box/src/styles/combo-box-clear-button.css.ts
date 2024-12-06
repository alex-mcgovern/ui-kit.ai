import { style } from "@vanilla-extract/css";

export const comboBoxClearButtonStyle = style([
    {
        opacity: 1,
        selectors: {
            "&[data-empty=true]": {
                display: "none",
                opacity: 0,
            },
        },
    },
]);
