export function is(...selector: string[]): `&:is(${string})` {
    return `&:is(${selector.join(",")})`;
}
