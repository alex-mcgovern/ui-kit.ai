import type { FC } from 'react'

import { type Of, useOf } from '@storybook/blocks'
import React from 'react'

import { Markdown } from './markdown'

interface DescriptionProps {
    /**
     * Specify where to get the description from. Can be a component, a CSF file or a story. If not
     * specified, the description will be extracted from the meta of the attached CSF file.
     */
    of?: Of
}

const getDescriptionFromResolvedOf = (resolvedOf: ReturnType<typeof useOf>): null | string => {
    switch (resolvedOf.type) {
        case 'component': {
            const {
                component,
                projectAnnotations: { parameters },
            } = resolvedOf
            return (
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                parameters?.docs?.extractComponentDescription?.(component, {
                    component,
                    parameters,
                }) || null
            )
        }
        case 'meta': {
            const { component, parameters } = resolvedOf.preparedMeta
            const metaDescription = parameters.docs?.description?.component
            if (metaDescription != null) {
                return metaDescription
            }
            return (
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                parameters.docs?.extractComponentDescription?.(component, {
                    component,
                    parameters,
                }) || null
            )
        }
        case 'story': {
            return (
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                resolvedOf.story.parameters.docs?.description?.story || null
            )
        }
        default: {
            throw new Error(
                `Unrecognized module type resolved from 'useOf', got: ${(resolvedOf as { type: string }).type}`
            )
        }
    }
}

export const Usage: FC<DescriptionProps> = (props) => {
    const { of } = props

    if ('of' in props && of === undefined) {
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
    }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const resolvedOf = useOf(of || 'meta')
    const markdown =
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        getDescriptionFromResolvedOf(resolvedOf)
            ?.match(/^## Usage\n?((?:(?!^#)[\s\S])*)/m)?.[0]
            ?.trim() ?? null

    return markdown != null ? <Markdown>{markdown}</Markdown> : null
}
