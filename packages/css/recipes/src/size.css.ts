import type { Size } from "@boondoggle.design/css-types";
import type { ComplexStyleRule } from "@vanilla-extract/css";

import { vars } from "@boondoggle.design/css-vars";
import { createVar, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { DEFAULT_SIZE } from "../../config/src";

const size = createVar();

const sizeVariant = styleVariants<Record<Size, ComplexStyleRule>>({
    lg: {
        vars: {
            [size]: vars.spacing.space_12,
        },
    },
    md: {
        vars: {
            [size]: vars.spacing.space_10,
        },
    },
    sm: {
        vars: {
            [size]: vars.spacing.space_8,
        },
    },
    xs: {
        vars: {
            [size]: vars.spacing.space_6,
        },
    },
});

export const sizeRecipe = recipe({
    base: {
        height: size,
    },
    defaultVariants: {
        size: DEFAULT_SIZE,
    },
    variants: {
        isSquare: {
            false: {},
            true: {
                flexShrink: 0,
                width: size,
            },
        },
        size: sizeVariant,
    },
});
