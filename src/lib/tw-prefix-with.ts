export const twPrefixWith = (prefixes: string[], texts: string[]) => {
    return texts
        .map((text) => prefixes.map((prefix) => `${prefix}:${text}`).join(" "))
        .join(" ");
};
