import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";
import { createVar } from "@vanilla-extract/css";

import { fieldIconIdentifier } from "../../../field-icon-container/src";

const PADDING_LEFT = createVar();
const PADDING_RIGHT = createVar();
const PADDING_Y = createVar();

export const inputPaddingStyle = style([
    {
        paddingBottom: PADDING_Y,
        paddingLeft: PADDING_LEFT,
        paddingRight: PADDING_RIGHT,
        paddingTop: PADDING_Y,
    },
    {
        selectors: {
            [`:has(${fieldIconIdentifier}) &`]: {
                vars: {
                    [PADDING_LEFT]: vars.space.space_8,
                },
            },
        },
        vars: {
            [PADDING_LEFT]: vars.space.space_2,
            [PADDING_RIGHT]: vars.space.space_2,
            [PADDING_Y]: vars.space.space_2,
        },
    },
]);
