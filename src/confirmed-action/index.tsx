import type { Color } from "@boondoggle.design/css-types";
import type { ReactNode } from "react";

import { SizeVariant } from "@boondoggle.design/css-types";
import { variantColorOverlay } from "@boondoggle.design/css-variants";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { forwardRef, useState } from "react";
import { z } from "zod";

import { Box } from "../box";
import { css } from "../css/index.css";
import { Form } from "../form";
import { FormSubmitButton } from "../form-submit-button";
import { Input } from "../input";
import { Label } from "../label";
import { FormTextField } from "../text-field";

const getZodSchema = ({
    strConfirmText,
    strInvalid,
}: {
    strConfirmText: string;
    strInvalid: string;
}) => {
    return z.object({
        confirm_text: z.literal(strConfirmText, {
            errorMap: () => {
                return { message: strInvalid };
            },
        }),
    });
};

type ConfirmedActionProps = {
    autoFocus?: boolean;
    buttonContent: ReactNode;
    colorOverlay?: Color;
    onConfirmed?: (() => Promise<unknown>) | (() => unknown);
    strConfirmText: string;
    strInvalid: string;
    strPromptPrefix: string;
    strPromptSuffix: string;
};

export const ConfirmedAction = forwardRef<HTMLDivElement, ConfirmedActionProps>(
    (
        {
            autoFocus,
            buttonContent,
            colorOverlay,
            onConfirmed,
            strConfirmText,
            strInvalid,
            strPromptPrefix,
            strPromptSuffix,
        },
        ref,
    ) => {
        const [userConfirmText, setUserConfirmText] = useState("");

        return (
            <Box ref={ref}>
                <Form
                    handleSubmit={() => {
                        onConfirmed?.();
                    }}
                    name="modal_action_confirmation"
                    resolver={zodResolver(
                        getZodSchema({ strConfirmText, strInvalid }),
                    )}
                >
                    <FormTextField
                        autoComplete="off"
                        autoFocus={autoFocus}
                        className={clsx(
                            css({ marginBottom: "space_2" }),
                            colorOverlay && variantColorOverlay[colorOverlay],
                        )}
                        name="confirm_text"
                        onChange={setUserConfirmText}
                    >
                        <Label
                            style={{
                                userSelect: "none",
                            }}
                        >
                            <span>
                                <span>{strPromptPrefix}</span>
                                {' "'}
                                <Box
                                    as="span"
                                    fontWeight="bold"
                                >
                                    {strConfirmText}
                                </Box>
                                {'" '}
                                <span>{strPromptSuffix}</span>
                            </span>
                        </Label>
                        <Input />
                    </FormTextField>

                    <FormSubmitButton
                        aria-disabled={userConfirmText !== strConfirmText}
                        className={css({
                            width: "100%",
                        })}
                        colorOverlay={colorOverlay}
                        size={SizeVariant.SM}
                    >
                        {buttonContent}
                    </FormSubmitButton>
                </Form>
            </Box>
        );
    },
);
