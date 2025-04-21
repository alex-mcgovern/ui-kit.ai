import type { FC } from 'react'

import { DocsContext, type Of, useOf } from '@storybook/blocks'
import React, { useContext } from 'react'

import { DocsStory } from './docs-story'

interface PrimaryProps {
    /** Specify where to get the primary story from. */
    of?: Of
}

export const Primary: FC<PrimaryProps> = (props) => {
    const { of } = props
    if ('of' in props && of === undefined) {
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
    }

    const { csfFile } = useOf(of ?? 'meta', ['meta'])
    const context = useContext(DocsContext)

    const primaryStory = context.componentStoriesFromCSFFile(csfFile)[0]

    return primaryStory != null ? (
        <DocsStory
            __forceInitialArgs
            __primary
            expanded={false}
            of={primaryStory.moduleExport}
            showDescription={false}
            showTitle={false}

            // withToolbar
        />
    ) : null
}
