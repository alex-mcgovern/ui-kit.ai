import type { ComplexStyleRule } from "@vanilla-extract/css";

import { breakpoints } from "@boondoggle.design/css-breakpoints";
import { SizeVariant } from "@boondoggle.design/css-types";
import { Breakpoint } from "@boondoggle.design/css-types";
import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

type ModalWidthVariants = Record<
    Exclude<SizeVariant, SizeVariant.XS>,
    ComplexStyleRule
>;

const widthVariant = styleVariants<ModalWidthVariants>({
    [SizeVariant.LG]: {
        "@media": {
            [breakpoints.greaterThan(Breakpoint.MD)]: {
                width: "50rem",
            },
        },
    },
    [SizeVariant.MD]: {
        "@media": {
            [breakpoints.greaterThan(Breakpoint.MD)]: {
                width: "40rem",
            },
        },
    },
    [SizeVariant.SM]: {
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
        width: SizeVariant.SM,
    },
    variants: { width: widthVariant },
});
