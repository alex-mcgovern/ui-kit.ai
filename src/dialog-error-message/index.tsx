import { typography } from "@boondoggle/css-variants";
import { faCircleExclamation } from "@fortawesome/pro-solid-svg-icons/faCircleExclamation";

import { Box } from "../box";
import { Button } from "../button";
import { V2DialogFooter } from "../dialog";
import { Icon } from "../icon";
import { variantColorOverlay } from "../index.css";

export const V2DialogErrorMessage = ({
    error,
    onPressCancel,
    onPressTryAgain,
    strCancel,
    strTryAgain,
}: {
    error: { message: string };
    onPressCancel: (() => Promise<unknown>) | (() => unknown);
    onPressTryAgain: (() => Promise<unknown>) | (() => unknown);
    strCancel: string;
    strTryAgain: string;
}) => {
    return (
        <>
            <Box
                className={variantColorOverlay.red}
                display="flex"
                flexDirection="column"
                gap="space_4"
                paddingY="space_12"
                placeItems="center"
                width="100%"
            >
                <Icon
                    color="text_low_contrast"
                    icon={faCircleExclamation}
                    size="3x"
                />

                <Box
                    className={typography.body_lg}
                    color="text_low_contrast"
                    fontWeight="semibold"
                >
                    {error.message}
                </Box>
            </Box>

            <V2DialogFooter>
                <Box
                    display="grid"
                    gap="space_2"
                    gridTemplateColumns="2x"
                >
                    <Button
                        appearance="secondary"
                        colorOverlay="red"
                        onPress={onPressCancel}
                    >
                        {strCancel}
                    </Button>
                    <Button
                        colorOverlay="red"
                        onPress={onPressTryAgain}
                    >
                        {strTryAgain}
                    </Button>
                </Box>
            </V2DialogFooter>
        </>
    );
};
