import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { withPrefersMotion } from "../_css-utils";
import {
    MEDIA_QUERY_DESKTOP,
    MEDIA_QUERY_TABLET,
    sprinklesLayer,
    vars,
} from "../index.css";

const border = {
    border_field: `1px solid ${vars.color.border_field}`,
    border_field_active: `1px solid ${vars.color.border_field_active}`,
    border_rule: `1px solid ${vars.color.border_rule}`,
    focus: `1px solid ${vars.color.focus_border} !important`,
    none: "0px solid transparent",
    transparent: "1px solid transparent",
};

const properties = defineProperties({
    "@layer": sprinklesLayer,
    properties: {
        alignItems: ["stretch", "start", "center", "end", "baseline"],
        alignSelf: ["stretch", "start", "center", "end", "baseline"],
        aspectRatio: vars.aspectRatio,
        background: {
            ...vars.color,
            inherit: "inherit",
            transparent: "transparent",
        },
        border: border,
        borderBottom: border,
        borderLeft: border,
        borderRadius: vars.borderRadius,
        borderRight: border,
        borderTop: border,
        bottom: ["0"],
        boxShadow: vars.boxShadow,
        color: {
            ...vars.color,
            currentColor: "currentColor",
            inherit: "inherit",
        },
        cursor: ["pointer", "default", "not-allowed", "grab"],
        flex: ["0 1 auto", "1 1 auto", "1 1 0%", "1 1 100%"],
        flexGrow: ["0", "1"],
        flexShrink: ["0", "1"],
        flexWrap: ["wrap", "nowrap"],
        fontWeight: vars.fontWeight,
        height: { ...vars.height, ...vars.spacing },
        inset: ["0"],
        isolation: ["isolate"],
        justifyContent: [
            "stretch",
            "start",
            "center",
            "end",
            "space-around",
            "space-between",
        ],
        justifySelf: ["stretch", "start", "center", "end", "baseline"],
        left: ["0"],
        margin: vars.spacing,
        marginBottom: vars.spacing,
        marginLeft: vars.spacing,
        marginRight: vars.spacing,
        marginTop: vars.spacing,
        maxHeight: { ...vars.height, ...vars.spacing },
        maxWidth: { ...vars.width, ...vars.spacing },
        minHeight: { ...vars.height, ...vars.spacing },
        minWidth: { ...vars.width, ...vars.spacing },
        opacity: ["0", "0.3", "0.5", "0.8", "1"],
        outline: {
            // Group: Default outline should come first to allow overriding
            none: "0px solid transparent",

            // Group: Focus outline should come last to allow overriding
            focus: `1px solid ${vars.color.focus_ring} !important`,
        },
        overflowX: ["hidden", "auto", "visible", "scroll"],
        overflowY: ["hidden", "auto", "visible", "scroll"],
        right: ["0"],
        textAlign: ["center", "left", "right"],
        textDecoration: ["underline", "none", "line-through"],
        textTransform: ["capitalize", "uppercase", "lowercase"],
        textWrap: ["balance"],
        top: ["0"],
        transition: {
            long: withPrefersMotion({
                transitionDuration: vars.transitionDuration.long,
                transitionProperty: "background, color, border-color",
                transitionTimingFunction: vars.ease.quart_in_out,
            }),
            medium: withPrefersMotion({
                transitionDuration: vars.transitionDuration.medium,
                transitionProperty: "background, color, border-color",
                transitionTimingFunction: vars.ease.quart_in_out,
            }),
            short: withPrefersMotion({
                transitionDuration: vars.transitionDuration.short,
                transitionProperty: "background, color, border-color",
                transitionTimingFunction: vars.ease.quart_in_out,
            }),
        },
        whiteSpace: ["nowrap", "normal"],
        zIndex: ["-1", "1"],
    },
    shorthands: {
        marginX: ["marginLeft", "marginRight"],
        marginY: ["marginTop", "marginBottom"],
        overflow: ["overflowX", "overflowY"],
        placeItems: ["alignItems", "justifyContent"],
    },
});

const responsiveProperties = defineProperties({
    conditions: {
        desktop: {
            "@media": MEDIA_QUERY_DESKTOP,
        },
        mobile: {},
        tablet: {
            "@media": MEDIA_QUERY_TABLET,
        },
    },
    defaultCondition: "mobile",
    properties: {
        display: vars.display,
        flexDirection: ["row", "column", "row-reverse", "column-reverse"],
        gap: vars.spacing,
        gridTemplateColumns: vars.gridTemplateColumns,
        padding: vars.spacing,
        paddingBottom: vars.spacing,
        paddingLeft: vars.spacing,
        paddingRight: vars.spacing,
        paddingTop: vars.spacing,
        position: ["relative", "absolute", "sticky", "static"],
        width: { ...vars.width, ...vars.spacing },
    },
    shorthands: {
        paddingX: ["paddingLeft", "paddingRight"],
        paddingY: ["paddingTop", "paddingBottom"],
    },
});

export const css = createSprinkles(properties, responsiveProperties);

export type Css = Parameters<typeof css>[0];
