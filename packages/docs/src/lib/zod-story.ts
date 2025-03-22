import type { ReactNode } from "react";

import { z } from "zod";

const storyFnPropertiesSchema = z
    .object({
        id: z.string(),
        parameters: z
            .object({
                displayName: z.string(),
            })
            .passthrough(),
        storyName: z.string(),
        tags: z.array(z.string()),
    })
    .passthrough();

export type StoryFn = (() => ReactNode) &
    z.infer<typeof storyFnPropertiesSchema>;

export const validateStoryFn = (fn: unknown): fn is StoryFn => {
    if (typeof fn !== "function") return false;

    try {
        const { ...props } = fn;
        storyFnPropertiesSchema.parse(props);
        return true;
    } catch {
        return false;
    }
};
