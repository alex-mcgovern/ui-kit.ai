import type { FormProps } from "react-aria-components";

import { Form as RACForm } from "react-aria-components";

export function Form(props: FormProps) {
    return <RACForm {...props} className={props.className} />;
}
