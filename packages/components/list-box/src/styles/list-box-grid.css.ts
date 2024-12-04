import { vars } from "@boondoggle.design/css-vars";
import { createVar, style } from "@vanilla-extract/css";

const SLOT_GAP_VALUE = vars.space.space_2;

export const SLOT_SIZE = createVar();
export const SLOT_GAP = createVar();

const LEFT_WIDTH = createVar();
const LEFT_MARGIN = createVar();

const RIGHT_WIDTH = createVar();
const RIGHT_MARGIN = createVar();

const GRID_TEMPLATE_COLUMNS = createVar();

export const listBoxGridLeftStyle = style({
    marginRight: LEFT_MARGIN,
    selectors: {
        [`&:not(:empty)`]: {
            vars: {
                [LEFT_MARGIN]: SLOT_GAP_VALUE,
            },
        },
    },
});

export const listBoxGridRightStyle = style({
    marginLeft: RIGHT_MARGIN,
    selectors: {
        [`&:not(:empty)`]: {
            vars: {
                [RIGHT_MARGIN]: SLOT_GAP_VALUE,
            },
        },
    },
});

export const listBoxGridStyle = style({
    alignItems: "center",
    display: "grid",
    gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
    selectors: {
        [`:has(${listBoxGridLeftStyle}:not(:empty)) &`]: {
            vars: {
                [LEFT_MARGIN]: SLOT_GAP,
                [LEFT_WIDTH]: SLOT_SIZE,
            },
        },
        [`:has(${listBoxGridRightStyle}:not(:empty)) &`]: {
            vars: {
                [RIGHT_MARGIN]: SLOT_GAP,
                [RIGHT_WIDTH]: SLOT_SIZE,
            },
        },
    },
    vars: {
        [GRID_TEMPLATE_COLUMNS]: `${LEFT_WIDTH} 1fr ${RIGHT_WIDTH}`,
        [LEFT_MARGIN]: "0px",
        [LEFT_WIDTH]: "0px",
        [RIGHT_MARGIN]: "0px",
        [RIGHT_WIDTH]: "0px",
        [SLOT_GAP]: SLOT_GAP_VALUE,
        [SLOT_SIZE]: vars.space.space_7,
    },
});
