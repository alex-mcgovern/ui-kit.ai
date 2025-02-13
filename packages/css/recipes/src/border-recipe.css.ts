import { vars } from "@boondoggle.design/css-vars";
import { recipe } from "@vanilla-extract/recipes";

export const borderRecipe = recipe({
    base: {
        borderRadius: vars.border_radius.md,
        borderStyle: "solid",
        borderWidth: 1,
    },
    variants: {
        color: {
            base: {
                borderColor: vars.color.border_1,
            },
            transparent: {
                borderColor: "transparent",
            },
        },
    },
});
