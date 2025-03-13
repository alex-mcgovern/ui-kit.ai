import * as React from "react";
// NOTE: This is a hack to make forwarding a ref to a generic component
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export function genericForwardRef<T, P = {}>(
    render: (
        props: P,
        ref: React.Ref<T>,
    ) => React.ReactNode,
): (
    props: P & React.RefAttributes<T>,
) => ReturnType<typeof React.forwardRef> {
    // @ts-expect-error - This is a hack to make the types work
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.forwardRef(render) as any;
}
