import { vars as newVars } from "@boondoggle.design/css-vars";
import {
    amber,
    amberA,
    blackA,
    blue,
    blueA,
    green,
    greenA,
    red,
    redA,
    slate,
    slateA,
} from "@radix-ui/colors";
import {
    type StyleRule,
    assignVars,
    createGlobalTheme,
    globalLayer,
    globalStyle,
    keyframes,
    style,
    styleVariants,
} from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { makeTheme, withPrefersMotion } from "./_css-utils";

/** -----------------------------------------------------------------------------
 * MEDIA QUERIES
 * ------------------------------------------------------------------------------- */

export const MEDIA_QUERY_DESKTOP = "only screen and (min-width: 992px)";
export const MEDIA_QUERY_TABLET = "only screen and (min-width: 496px)";
export const MEDIA_QUERY_MOBILE = "only screen and (max-width: 31rem)";

export const CONTAINER_LG = "(width > 992px)";
export const CONTAINER_MD = "(width >= 496px) and (width <= 991px)";
export const CONTAINER_SM = "(width < 496px)";

/** -----------------------------------------------------------------------------
 * SELECTORS
 * ------------------------------------------------------------------------------- */

const DISABLED = ":is([disabled], [aria-disabled='true'], [data-disabled])";
export const NOT_DISABLED = `:not(${DISABLED})`;

export const HOVER = ":is(:hover,[data-hovered])";
export const ACTIVE = ":is(:active,[data-pressed])";
export const FOCUS = ":is(:focus,[data-focused])";
export const FOCUS_VISIBLE = ":is(:focus-visible,[data-focus-visible])";

export const SELECTOR_IS_FOCUS = ":is(:focus-visible)";

/** -----------------------------------------------------------------------------
 * UTILITY CLASSES
 * ------------------------------------------------------------------------------- */

export const hideLastpassStyle = style({});

globalStyle(`${hideLastpassStyle} div[data-lastpass-icon-root]`, {
    display: "none !important",
    visibility: "hidden",
});

/** -----------------------------------------------------------------------------
 * CSS LAYERS
 * ------------------------------------------------------------------------------- */

const resetLayer = globalLayer("reset");
const baseLayer = globalLayer("base");
const themeLayer = globalLayer("theme");
export const sprinklesLayer = globalLayer("sprinkles");

/** -----------------------------------------------------------------------------
 * CSS VARS
 * ------------------------------------------------------------------------------- */

/**
 * Global variables (css vars)
 *
 * These are declared as css vars at the `root:` level, in scope of the `html` element
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */

export const vars = createGlobalTheme(":root, ::backdrop", {
    aspectRatio: {
        extraWide: "10 / 3",
        square: "1 / 1",
        tall: "9 / 16",
        wide: "16 / 9",
    },
    borderRadius: {
        "50%": "50%",
        lg: "12px",
        md: "8px",
        pill: "99999px",
        sm: "4px",
    },
    boxShadow: {
        lg: `${blackA.blackA3} 0px 5px 40px`,
        md: `${blackA.blackA2} 0px 5px 20px`,
        sm: `${blackA.blackA1} 0px 5px 10px`,
        xs: `${blackA.blackA1} 0px 2px 1px`,
    },
    color: makeTheme({
        alpha: slateA,
        isOverlay: false,
        primary: blue,
        secondary: slate,
    }),
    display: {
        block: "block",
        flex: "flex",
        grid: "grid",
        inline: "inline",
        "inline-block": "inline-block",
        "inline-flex": "inline-flex",
        none: "none",
        table: "table",
        "table-cell": "table-cell",
    },
    ease: {
        quart_in_out: "cubic-bezier(0.76, 0, 0.24, 1)",
    },
    fontFamily: {
        body: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    },
    fontWeight: {
        bold: "700",
        extrabold: "800",
        light: "300",
        medium: "500",
        normal: "400",
        semibold: "600",
    },
    gridTemplateColumns: {
        "1_2": "1fr 2fr",
        "1_3": "1fr 3fr",
        "1x": "1fr",
        "2_1": "2fr 1fr",
        "2x": "repeat(2, 1fr)",
        "3_1": "3fr 1fr",
        "3x": "repeat(3, 1fr)",
        "4x": "repeat(4, 1fr)",
        "5_7": "5fr 7fr",
        "5x": "repeat(5, 1fr)",
        "6x": "repeat(6, 1fr)",
        "7_5": "7fr 5fr",
        "7x": "repeat(7, 1fr)",
    },
    height: {
        "": "0",
        "100%": "100%",
        "100dvh": "100dvh",
        "25%": "25%",
        "25dvh": "25dvh",
        "50%": "50%",
        "50dvh": "50dvh",
        "75%": "75%",
        "75dvh": "75dvh",
        "90dvh": "90dvh",
        auto: "auto",
        element_lg: "3rem",

        // Bespoke, non-reusable heights

        element_md: "2.5rem",
        element_sm: "2rem",
        "min-content": "min-content",

        topBar: "3rem",
    },
    spacing: {
        auto: "auto",
        none: "0",

        space_0: "0",
        "space_0.25": "0.0625rem",
        "space_0.5": "0.125rem",
        "space_0.75": "0.1875rem",
        space_1: "0.25rem",
        "space_1.5": "0.375rem",
        space_10: "2.5rem",
        space_12: "3rem",
        space_2: "0.5rem",
        space_3: "0.75rem",
        space_4: "1rem",
        space_5: "1.25rem",
        space_6: "1.5rem",
        space_7: "1.75rem",
        space_8: "2rem",
    },
    transitionDuration: {
        long: "600ms",
        medium: "300s",
        short: "150ms",

        // Bespoke durations

        sideBarShowHide: "600ms",
    },
    width: {
        "": "0",
        "100%": "100%",
        "100vw": "100vw",
        "25%": "25%",
        "50%": "50%",
        auto: "auto",
        "fit-content": "fit-content",
        main_lg: "75rem",
        main_md: "55.5rem",
        main_sm: "30rem",
        "max-content": "max-content",
        "min-content": "min-content",
        sideBar: "15rem",
    },
});

/** -----------------------------------------------------------------------------
 * ANIMATIONS
 * ------------------------------------------------------------------------------- */

const fadeInKeyframes = keyframes({
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
});

export const animateFadeIn = style([
    withPrefersMotion({
        animation: `${fadeInKeyframes} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
    }),
]);

/** -----------------------------------------------------------------------------
 * COLOR OVERLAY VARIANT
 * ------------------------------------------------------------------------------- */

export const variantColorOverlay = styleVariants({
    amber: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    vars.color,
                    makeTheme({
                        alpha: amberA,
                        isOverlay: true,
                        primary: amber,
                        secondary: amber,
                    }),
                ),
            },
        },
    },
    blue: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    vars.color,
                    makeTheme({
                        alpha: blueA,
                        isOverlay: true,
                        primary: blue,
                        secondary: blue,
                    }),
                ),
            },
        },
    },
    default: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    vars.color,
                    makeTheme({
                        alpha: slateA,
                        isOverlay: false,
                        primary: blue,
                        secondary: slate,
                    }),
                ),
            },
        },
    },
    green: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    vars.color,
                    makeTheme({
                        alpha: greenA,
                        isOverlay: true,
                        primary: green,
                        secondary: green,
                    }),
                ),
            },
        },
    },
    grey: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    vars.color,
                    makeTheme({
                        alpha: slateA,
                        isOverlay: true,
                        primary: slate,
                        secondary: slate,
                    }),
                ),
            },
        },
    },
    red: {
        "@layer": {
            [themeLayer]: {
                vars: assignVars(
                    vars.color,
                    makeTheme({
                        alpha: redA,
                        isOverlay: true,
                        primary: red,
                        secondary: red,
                    }),
                ),
            },
        },
    },
});

export type ColorOverlay = keyof typeof variantColorOverlay;

/** -----------------------------------------------------------------------------
 * A11Y STYLES
 * ------------------------------------------------------------------------------- */

export const a11yFocusStyleRule: StyleRule = {
    borderColor: vars.color.focus_border,
    outline: `2px solid ${vars.color.focus_ring} `,
};

export const a11yFocus = style([
    {
        "@layer": {
            [themeLayer]: {
                selectors: {
                    [`&:not(${DISABLED})${FOCUS_VISIBLE}`]: {
                        ...a11yFocusStyleRule,
                    },

                    [`&${FOCUS}:not(${FOCUS_VISIBLE})`]: {
                        outline: "none",
                    },
                },
            },
        },
    },
]);

export const overflowEllipsis = style([
    {
        "@layer": {
            [themeLayer]: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
            },
        },
    },
]);

export const hideScrollbar = style([
    {
        msOverflowStyle: "none",
        scrollbarGutter: "none",
        scrollbarWidth: "none",
        selectors: {
            "&::-webkit-scrollbar": {
                display: "none",
            },
        },
    },
]);

/** -----------------------------------------------------------------------------
 * GLOBAL STYLESHEET
 * ------------------------------------------------------------------------------- */

/**
 * Based on Eric Meyer's Reset CSS https://meyerweb.com/eric/tools/css/reset/
 *
 * The original rule for `blockquote:before, blockquote:after, q:before, q:after`
 * contains fallback for `content` which is not possible with vanilla-extract.
 */

globalStyle(
    `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video`,
    {
        "@layer": {
            [resetLayer]: {
                border: 0,
                font: "inherit",
                fontSize: "100%",
                margin: 0,
                padding: 0,
                verticalAlign: "baseline",
            },
        },
    },
);

globalStyle(
    "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
    {
        "@layer": {
            [resetLayer]: {
                display: "block",
            },
        },
    },
);

globalStyle("body", {
    "@layer": {
        [resetLayer]: {
            lineHeight: 1.5,
        },
    },
});

globalStyle("blockquote, q", {
    "@layer": {
        [resetLayer]: {
            quotes: "none",
        },
    },
});

globalStyle(
    `blockquote:before, blockquote:after,
    q:before, q:after`,
    {
        "@layer": {
            [resetLayer]: {
                // NOTE: The original also has `content: "''"` but that is not possible
                // to have duplicate rules with vanilla-extract.
                content: "none",
            },
        },
    },
);

globalStyle("button", {
    "@layer": {
        [resetLayer]: {
            appearance: "none",
            background: "none",
            border: "none",
            display: "block",
            padding: 0,
            textDecoration: "none",
        },
    },
});

globalStyle("button[disabled], button[aria-disabled='true']", {
    "@layer": {
        [resetLayer]: {
            opacity: 0.5,
        },
    },
});

globalStyle("button[disabled]:hover, button[aria-disabled='true']:hover", {
    "@layer": {
        [resetLayer]: {
            cursor: "not-allowed !important",
        },
    },
});

globalStyle("img, picture, video, canvas, svg", {
    "@layer": {
        [resetLayer]: {
            display: "block",
            maxWidth: "100%",
        },
    },
});

globalStyle("input, button, textarea, select", {
    "@layer": {
        [resetLayer]: {
            font: "inherit",
        },
    },
});

globalStyle('input[type="search"]', {
    "@layer": {
        [resetLayer]: {
            appearance: "none",
        },
    },
});

globalStyle(
    `input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration`,
    {
        "@layer": {
            [resetLayer]: {
                display: "none",
            },
        },
    },
);

globalStyle("input[type=search]::-ms-clear, input[type=search]::-ms-reveal", {
    "@layer": {
        [resetLayer]: {
            display: "none",
            height: 0,
            width: 0,
        },
    },
});

globalStyle("button, input[type='button']", {
    "@layer": {
        [resetLayer]: {
            cursor: "pointer",
        },
    },
});

globalStyle("a:focus-visible", {
    "@layer": {
        [resetLayer]: {
            outlineOffset: 0,
        },
    },
});

globalStyle("*", {
    "@layer": {
        [baseLayer]: { boxSizing: "border-box", margin: 0 },
    },
});

globalStyle("html", {
    "@layer": {
        [baseLayer]: {
            accentColor: vars.color.bg_button_primary,
            background: vars.color.background,
            color: vars.color.text_high_contrast,
            fontFamily: vars.fontFamily.body,
            fontSize: newVars.font_size.root,
            lineHeight: newVars.line_height.root,
            WebkitFontSmoothing: "antialiased",
        },
    },
});

globalStyle("html, body", {
    "@layer": {
        [baseLayer]: {
            height: "100%",
        },
    },
});

globalStyle("body", {
    "@layer": {
        [baseLayer]: {},
    },
});

globalStyle("a", {
    "@layer": {
        [baseLayer]: {
            color: vars.color.bg_button_primary,
            margin: 0,
            padding: 0,
            textDecoration: "none",
        },
    },
});

globalStyle("a:hover, a:focus, a:focus-visible", {
    "@layer": {
        [baseLayer]: {
            color: vars.color.bg_button_primary_active,
            textDecoration: "underline",
        },
    },
});

globalStyle("a:focus-visible", {
    "@layer": {
        [baseLayer]: {
            ...a11yFocusStyleRule,
        },
    },
});

globalStyle("button", {
    "@layer": {
        [baseLayer]: {
            background: "none",
            border: "none",
            textDecoration: "none",
            WebkitAppearance: "none",
        },
    },
});

globalStyle("input[type=checkbox]", {
    "@layer": {
        [baseLayer]: {
            accentColor: vars.color.bg_button_primary,
            cursor: "pointer",
            height: vars.spacing.space_4,
            width: vars.spacing.space_4,
            ...withPrefersMotion({
                transition: `all ${vars.transitionDuration.long} ease`,
            }),
        },
    },
});

globalStyle("code", {
    "@layer": {
        [baseLayer]: {
            color: "inherit",
            fontFamily: "monospace",
            fontWeight: vars.fontWeight.normal,
        },
    },
});

globalStyle("pre:has(code)", {
    "@layer": {
        [baseLayer]: {
            background: vars.color.tint_default,
            borderRadius: vars.borderRadius.md,
            marginBottom: vars.spacing.space_6,
            marginTop: vars.spacing.space_6,
            overflow: "auto",
            padding: vars.spacing.space_6,
        },
    },
});

globalStyle("hr", {
    "@layer": {
        [baseLayer]: {
            border: "none",
            borderColor: `${vars.color.border_rule} !important`,
            borderTop: "1px solid",
            margin: "0",
            marginBottom: vars.spacing.space_6,
            marginTop: vars.spacing.space_6,
        },
    },
});

/** -----------------------------------------------------------------------------
 * TABLE ELEMENTS
 * ------------------------------------------------------------------------------- */

/**
 * Some re-usable style rules that can apply table styling to different elements.
 */

// const tHeadStyleRule: StyleRule = {
//     fontSize: vars.fontSize.bodySm,
//     fontWeight: vars.fontWeight.semibold,
// };

// export const tHeadStyles = style({
//     display: "table-header-group",
//     ...tHeadStyleRule,
// });

/**
 * Table cell styles
 */
// const tableCellStyleRule: StyleRule = {
//     fontSize: vars.fontSize.bodyMd,
//     padding: `${vars.spacing.space_2} ${vars.spacing.space_4}`,
//     // textAlign: "left",
//     verticalAlign: "middle",
// };

// globalStyle("th, td", {
// 	"@layer": {
// 		[baseLayer]: {
// 			...tableCellStyleRule,
// 		},
// 	},
// });
// globalStyle("td", {
// 	"@layer": {
// 		[baseLayer]: {
// 			textOverflow: "ellipsis",
// 			whiteSpace: "nowrap",
// 			overflow: "hidden",
// 		},
// 	},
// });

export const thStyles = style({
    display: "table-cell",
    // ...tableCellStyleRule,
});

export const tdStyles = style({
    display: "table-cell",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    // ...tableCellStyleRule,
});

// Display table classes

export const tBodyStyles = style({
    display: "table-row-group",
});

export const tRowStyles = style({
    display: "table-row",
});

/** -----------------------------------------------------------------------------
 * ELEMENT SIZING
 * ------------------------------------------------------------------------------- */

export const elementHeight = {
    lg: vars.spacing.space_12,
    md: vars.spacing.space_10,
    sm: vars.spacing.space_8,
};

export const elementPaddingRaw = {
    lg: {
        x: vars.spacing.space_6,
        y: vars.spacing.space_3,
    },
    md: {
        x: vars.spacing.space_4,
        y: vars.spacing.space_2,
    },
    sm: {
        x: vars.spacing.space_3,
        y: vars.spacing.space_1,
    },
};

export const elementPadding = styleVariants({
    lg: {
        padding: `${elementPaddingRaw.lg.y} ${elementPaddingRaw.lg.x}`,
    },
    md: {
        padding: `${elementPaddingRaw.md.y} ${elementPaddingRaw.md.x}`,
    },
    sm: {
        padding: `${elementPaddingRaw.sm.y} ${elementPaddingRaw.sm.x}`,
    },
});

export type ElementSizeEnum = "lg" | "md" | "sm";

/** -----------------------------------------------------------------------------
 * LAYOUT: FLOATING MENU
 * ------------------------------------------------------------------------------- */

const FM_PADDING = vars.spacing.space_1;
const FM_RADIUS = vars.borderRadius.md;

export const floatingMenu = createGlobalTheme(":root, ::backdrop", {
    container: {
        padding: FM_PADDING,
        radius: FM_RADIUS,
    },
    item: {
        height: elementHeight.sm,
        paddingX: calc.subtract(elementPaddingRaw.sm.x, FM_PADDING),
        radius: calc.subtract(FM_RADIUS, FM_PADDING),
    },
});

/** -----------------------------------------------------------------------------
 * Scrollbar styles
 * ------------------------------------------------------------------------------- */

export const unobtrusiveScrollBar = style({
    selectors: {
        "&::-webkit-scrollbar": {
            backgroundColor: "transparent",
            borderBottomRightRadius: vars.borderRadius.sm,
            borderTopRightRadius: vars.borderRadius.sm,
            width: vars.spacing.space_2,
        },

        "&::-webkit-scrollbar-button": {
            display: "none",
        },

        "&::-webkit-scrollbar-thumb": {
            backgroundColor: vars.color.bg_button_secondary_active,
            border: `2px solid ${vars.color.background}`,
            borderRadius: vars.borderRadius.md,
        },
        "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
        },
    },
});
