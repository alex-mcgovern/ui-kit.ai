import { vars } from "@boondoggle.design/css-vars";
import { style } from "@vanilla-extract/css";

export const frostedGlassBgStyle = style({
    backdropFilter: `blur(${vars.space.space_2})`,
    backgroundColor: vars.color.background.frosted,
});
