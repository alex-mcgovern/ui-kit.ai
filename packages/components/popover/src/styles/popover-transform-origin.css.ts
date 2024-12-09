import { style } from "@vanilla-extract/css";

export const popoverTransformOriginStyle = style([
    {
        selectors: {
            "&[data-placement-axis='bottom end']": {
                transformOrigin: "top right",
            },
            "&[data-placement-axis='bottom left']": {
                transformOrigin: "top left",
            },
            "&[data-placement-axis='bottom right']": {
                transformOrigin: "top right",
            },
            "&[data-placement-axis='bottom start']": {
                transformOrigin: "top left",
            },
            "&[data-placement-axis='bottom']": {
                transformOrigin: "top center",
            },
            "&[data-placement-axis='end bottom']": {
                transformOrigin: "bottom left",
            },
            "&[data-placement-axis='end top']": {
                transformOrigin: "top left",
            },
            "&[data-placement-axis='end']": {
                transformOrigin: "center left",
            },
            "&[data-placement-axis='left bottom']": {
                transformOrigin: "bottom right",
            },
            "&[data-placement-axis='left top']": {
                transformOrigin: "top right",
            },
            "&[data-placement-axis='left']": {
                transformOrigin: "bottom right",
            },
            "&[data-placement-axis='right bottom']": {
                transformOrigin: "bottom left",
            },
            "&[data-placement-axis='right top']": {
                transformOrigin: "top left",
            },
            "&[data-placement-axis='right']": {
                transformOrigin: "center left",
            },
            "&[data-placement-axis='start bottom']": {
                transformOrigin: "bottom right",
            },
            "&[data-placement-axis='start top']": {
                transformOrigin: "top right",
            },
            "&[data-placement-axis='start']": {
                transformOrigin: "center right",
            },
            "&[data-placement-axis='top end']": {
                transformOrigin: "bottom right",
            },
            "&[data-placement-axis='top left']": {
                transformOrigin: "bottom left",
            },
            "&[data-placement-axis='top right']": {
                transformOrigin: "bottom right",
            },
            "&[data-placement-axis='top start']": {
                transformOrigin: "bottom left",
            },
            "&[data-placement-axis='top']": {
                transformOrigin: "bottom center",
            },
        },
    },
]);
