import usage from "@ui-kit.ai/metadata/usage-examples.json";

export function getUsageExample(
    componentName: string,
    storyName: string,
): string {
    const code = usage[componentName][storyName];
    if (code == null)
        throw Error(`Couldn't get code for ${componentName}:${storyName}`);
    return code;
}
