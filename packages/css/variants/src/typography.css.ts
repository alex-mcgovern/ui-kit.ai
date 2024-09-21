import type { ComplexStyleRule } from "@vanilla-extract/css";

import { TypographyVariant } from "@boondoggle.design/css-types";
import { vars } from "@boondoggle.design/css-vars";
import { styleVariants } from "@vanilla-extract/css";

type TypographyStyleVariants = Record<TypographyVariant, ComplexStyleRule>;

/**
 * A collection of variants that combine `font-size` and `line-height` styles.
 */
export const typography = styleVariants<TypographyStyleVariants>(
    Object.values(TypographyVariant).reduce<TypographyStyleVariants>(
        (variants, typographyVariant) => {
            const fontSize = vars.font_size[typographyVariant];
            const lineHeight = vars.line_height[typographyVariant];

            variants[typographyVariant] = {
                fontSize,
                lineHeight,
            };

            return variants;
        },
        {} as TypographyStyleVariants,
    ),
);
