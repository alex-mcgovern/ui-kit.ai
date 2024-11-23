import type { ComplexStyleRule } from "@vanilla-extract/css";

import { breakpoints } from "@boondoggle.design/css-breakpoints";
import { Size } from "@boondoggle.design/css-types";
import { Breakpoint } from "@boondoggle.design/css-types";
import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

type ModalWidthVariants = Record<Exclude<Size, Size.XS>, ComplexStyleRule>;

const widthVariant = styleVariants<ModalWidthVariants>({
    [Size.LG]: {
        "@media": {
            [breakpoints.greaterThan(Breakpoint.MD)]: {
                width: "50rem",
            },
        },
    },
    [Size.MD]: {
        "@media": {
            [breakpoints.greaterThan(Breakpoint.MD)]: {
                width: "40rem",
            },
        },
    },
    [Size.SM]: {
        "@media": {
            [breakpoints.greaterThan(Breakpoint.MD)]: {
                width: "30rem",
            },
        },
    },
});

export const modalWidthRecipe = recipe({
    base: {
        "@media": {
            [breakpoints.lessThan(Breakpoint.MD)]: {
                width: "100vw",
            },
        },
    },
    defaultVariants: {
        width: Size.SM,
    },
    variants: { width: widthVariant },
});
