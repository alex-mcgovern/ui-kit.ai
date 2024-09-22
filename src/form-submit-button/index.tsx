import type { ComponentProps } from "react";

import { Button } from "@boondoggle.design/button";
import { ButtonVariant } from "@boondoggle.design/css-types";
import { forwardRef } from "react";

export const FormSubmitButton = forwardRef<
    HTMLButtonElement,
    Omit<ComponentProps<typeof Button>, "name">
>(({ children, variant = ButtonVariant.PRIMARY, ...rest }, ref) => {
    return (
        <Button
            name="submit"
            ref={ref}
            type="submit"
            variant={variant}
            {...rest}
        >
            {children}
        </Button>
    );
});
