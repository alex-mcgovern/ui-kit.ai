export async function getArgsForStories(
    filepath: string,
): Promise<Record<string, Record<string, unknown>>> {
    const storyModule = await import(filepath);
    const { composeStories } = await import(
        "@storybook/react"
    ); // TODO: dynamic renderer

    const composedStories = composeStories(storyModule);

    const result: Record<
        string,
        Record<string, unknown>
    > = {};

    Object.entries(composedStories).forEach(
        async ([storyName, story]) => {
            result[storyName] = (
                story as { args: Record<string, unknown> }
            ).args;
        },
    );

    return result;
}
