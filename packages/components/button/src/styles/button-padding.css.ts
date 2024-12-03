import type { SizeVariant } from "@boondoggle.design/css-types";
import type { ComplexStyleRule } from "@vanilla-extract/css";

import { DEFAULT_SIZE } from "@boondoggle.design/css-config";
import { vars } from "@boondoggle.design/css-vars";
import { createVar, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const paddingX = createVar();
const paddingY = createVar();

const paddingVariant = styleVariants<Record<SizeVariant, ComplexStyleRule>>({
    lg: {
        vars: {
            [paddingX]: vars.spacing.space_6,
            [paddingY]: vars.spacing.space_3,
        },
    },
    md: {
        vars: {
            [paddingX]: vars.spacing.space_4,
            [paddingY]: vars.spacing.space_3,
        },
    },
    sm: {
        vars: {
            [paddingX]: vars.spacing.space_3,
            [paddingY]: vars.spacing.space_1,
        },
    },
    xs: {
        vars: {
            [paddingX]: vars.spacing.space_2,
            [paddingY]: vars.spacing.space_1,
        },
    },
});

export const buttonPaddingRecipe = recipe({
    base: {
        padding: `${paddingY} ${paddingX}`,
    },
    defaultVariants: {
        size: DEFAULT_SIZE,
    },
    variants: {
        isSquare: {
            false: {},
            true: {
                vars: {
                    [paddingX]: paddingY,
                },
            },
        },
        size: paddingVariant,
    },
});
