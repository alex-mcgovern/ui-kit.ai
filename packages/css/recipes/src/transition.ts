import type { Duration } from "@boondoggle.design/css-types";
import type { StyleRule } from "@vanilla-extract/css";
import type { Property } from "csstype";

import { Ease } from "@boondoggle.design/css-types";
import { vars } from "@boondoggle.design/css-vars";
import { withPrefersMotion } from "@boondoggle.design/utils";

export function transitionRecipe(
    duration: Duration,
    property: Property.TransitionProperty = "all",
    ease: Ease = Ease.EASE_IN_OUT_QUART,
): StyleRule {
    return withPrefersMotion({
        transitionDuration: vars.duration[duration],
        transitionProperty: property,
        transitionTimingFunction: vars.ease[ease],
    });
}
