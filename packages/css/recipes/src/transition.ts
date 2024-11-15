import type { Duration } from "@boondoggle.design/css-types";
import type { StyleRule } from "@vanilla-extract/css";
import type { Property } from "csstype";

import { vars } from "@boondoggle.design/css-vars";
import { withPrefersMotion } from "@boondoggle.design/utils";

export function transitionRecipe(
    duration: Duration,
    property: Property.TransitionProperty = "all",
): StyleRule {
    return withPrefersMotion({
        transitionDuration: vars.duration[duration],
        transitionProperty: property,
        transitionTimingFunction: vars.ease.quart_in_out,
    });
}
