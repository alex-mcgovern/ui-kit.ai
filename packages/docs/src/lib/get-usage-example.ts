import usage from '@ui-kit.ai/metadata/usage-examples.json'

export function getUsageExample(componentName: string, storyName: string): string {
    // @ts-expect-error - the JSON is inferred `as const`, but we don't have
    // that level of type information in the params. It will error at build time
    // if the componentName or storyName is not in the JSON.
    const code = usage[componentName][storyName]
    if (code == null) throw Error(`Couldn't get code for ${componentName}:${storyName}`)
    return code
}
