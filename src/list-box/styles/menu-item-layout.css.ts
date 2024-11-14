import { vars } from "@boondoggle.design/css-vars";
import { createVar, style } from "@vanilla-extract/css";

const LEFT_WIDTH = createVar();
const LEFT_MARGIN = createVar();

const RIGHT_WIDTH = createVar();
const RIGHT_MARGIN = createVar();

const GRID_TEMPLATE_COLUMNS = createVar();

export const left = style({
    marginRight: LEFT_MARGIN,
});

export const right = style({
    marginLeft: RIGHT_MARGIN,
});

export const container = style({
    alignItems: "center",
    display: "grid",
    // gap: vars.spacing.space_2,
    gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
    selectors: {
        ':has([data-icon="true"]) &': {
            vars: {
                [LEFT_MARGIN]: vars.spacing.space_2,
                [LEFT_WIDTH]: vars.spacing.space_5,
            },
        },
        '&:is([data-selection-mode="single"],[data-selection-mode="multiple"])':
            {
                vars: {
                    [RIGHT_MARGIN]: vars.spacing.space_2,
                    [RIGHT_WIDTH]: vars.spacing.space_5,
                },
            },
    },
    vars: {
        [GRID_TEMPLATE_COLUMNS]: `${LEFT_WIDTH} 1fr ${RIGHT_WIDTH}`,
        [LEFT_MARGIN]: "0px",
        [LEFT_WIDTH]: "0px",
        [RIGHT_MARGIN]: "0px",
        [RIGHT_WIDTH]: "0px",
    },
});
