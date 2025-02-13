export type BoolOptsTuple<T extends object = object> =
    | [boolean, T]
    | boolean;

export const evalBoolOptsTuple = <T extends object = object>(
    prop: BoolOptsTuple<T> | null | undefined,
): [boolean, T] => {
    if (prop == null) return [false, {} as T] as const;
    if (typeof prop === "boolean") return [prop, {} as T] as const;
    return [prop[0], prop[1]] as const;
};
