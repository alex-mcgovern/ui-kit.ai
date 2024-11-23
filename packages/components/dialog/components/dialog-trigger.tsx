import type { ComponentProps } from "react";

import { DialogTrigger as RACDialogTrigger } from "react-aria-components";

/**
 * A DialogTrigger opens a dialog when a trigger element is pressed.
 * @see https://react-spectrum.adobe.com/react-aria/Dialog.html#dialogtrigger
 */
export const DialogTrigger = (
    props: ComponentProps<typeof RACDialogTrigger>,
) => {
    return <RACDialogTrigger {...props} />;
};
