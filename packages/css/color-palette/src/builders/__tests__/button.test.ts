import { blue, slate } from "@radix-ui/colors";

import { buildButtonTheme } from "../button";

test("buildButtonTheme", () => {
    expect(
        buildButtonTheme({
            isOverlay: false,
            primary: blue,
            secondary: slate,
        }),
    ).toStrictEqual({
        ghost: {
            backgroundColor: {
                base: "transparent",
                isDisabled: "transparent",
                isHovered: "#f0f0f3",
                isPressed: "#e8e8ec",
            },
            borderColor: {
                base: "transparent",
                isDisabled: "transparent",
                isHovered: "transparent",
                isPressed: "transparent",
            },
        },
        primary: {
            backgroundColor: {
                base: "#0090ff",
                isDisabled: "#5eb1ef",
                isHovered: "#0588f0",
                isPressed: "#5eb1ef",
            },
            borderColor: {
                base: "#0090ff",
                isDisabled: "#5eb1ef",
                isHovered: "#0588f0",
                isPressed: "#5eb1ef",
            },
        },
        secondary: {
            backgroundColor: {
                base: "#f9f9fb",
                isDisabled: "#f9f9fb",
                isHovered: "#f0f0f3",
                isPressed: "#e8e8ec",
            },
            borderColor: {
                base: "#f9f9fb",
                isDisabled: "#f9f9fb",
                isHovered: "#f0f0f3",
                isPressed: "#e8e8ec",
            },
        },
    });
});
