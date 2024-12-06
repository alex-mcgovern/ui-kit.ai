import type { Duration } from "@boondoggle.design/css-types";
import type { Ease } from "@boondoggle.design/css-types";
import type { StyleRule } from "@vanilla-extract/css";
import type { Property } from "csstype";

import { vars } from "@boondoggle.design/css-vars";
import { withPrefersMotion } from "@boondoggle.design/utils";

export function transitionRecipe(
    values: {
        duration: Duration;
        ease: Ease;
        property: Property.TransitionProperty;
    }[],
): StyleRule {
    return withPrefersMotion({
        transitionDuration: values
            .map(({ duration }) => vars.duration[duration])
            .join(", "),
        transitionProperty: values.map(({ property }) => property).join(", "),
        transitionTimingFunction: values
            .map(({ ease }) => vars.ease[ease])
            .join(", "),
    });
}
