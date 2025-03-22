import * as components from "@ui-kit.ai/metadata";

import { type StoryFn, validateStoryFn } from "./zod-story";

type MetadataModule = Record<string, Record<string, StoryFn>>;

export function getComponentStories(name: string): StoryFn[] {
    const stories = (components as unknown as MetadataModule)[name];
    if (stories == null) throw new Error("Stories for component not found");

    // The types returned by `composeStories` in `@ui-kit.ai/metadata`
    // are shit, so we just validate here once and call it a good 'un.
    Object.values(stories).forEach(validateStoryFn);
    return Object.values(stories);
}
