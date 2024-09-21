import { typography } from "@boondoggle.design/css-variants";

import type { BoxProps } from "../box";

import { Box } from "../box";
import { Loader } from "../loader";
import { loaderWrapperStyle } from "./styles.css";

export type LoaderFullScreenProps = {
    /**
     * Text shown underneath loader.
     */
    loadingText?: string;
} & BoxProps;

/**
 * Full-screen version of the loader component.
 */
export function LoaderFullScreen({
    color = "text_low_contrast",
    loadingText,
    ...rest
}: LoaderFullScreenProps) {
    return (
        <Box
            className={loaderWrapperStyle}
            {...rest}
        >
            <Loader
                color={color}
                size="3x"
            />
            {loadingText && (
                <Box
                    className={typography.body_sm}
                    color={color}
                >
                    {loadingText}
                </Box>
            )}
        </Box>
    );
}
