import type { FC } from 'react'

import { Markdown, type Of, Unstyled, useOf } from '@storybook/blocks'
import { TagLink } from '@ui-kit.ai/components'
import { ExternalLinkIcon } from 'lucide-react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

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
            return resolvedOf.story.parameters.docs?.description?.story ?? null
        }
        default: {
            throw new Error(
                `Unrecognized module type resolved from 'useOf', got: ${(resolvedOf as { type: string }).type}`
            )
        }
    }
}

const DescriptionContainer: FC<DescriptionProps> = (props) => {
    const { of } = props

    if ('of' in props && of === undefined) {
        throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?')
    }
    const resolvedOf = useOf(of ?? 'meta')
    const markdown =
        getDescriptionFromResolvedOf(resolvedOf)
            // split at the first heading, which will be usage examples
            ?.split(/^#+ /m)[0]
            ?.trim() ?? null

    return markdown != null ? (
        <Markdown
            options={{
                overrides: {
                    a: {
                        component: (props) => (
                            <Unstyled
                                style={{
                                    display: 'inline',
                                    width: 'min-content',
                                }}
                            >
                                <TagLink
                                    {...props}
                                    className='mr-1'
                                    slotRight={<ExternalLinkIcon />}
                                    target='_blank'
                                />
                            </Unstyled>
                        ),
                    },
                    p: {
                        component: (props) => (
                            <p
                                {...props}
                                className={twMerge(props.className, 'max-w-[40rem]')}
                            />
                        ),
                    },
                },
            }}
        >
            {markdown}
        </Markdown>
    ) : null
}

export { DescriptionContainer as Description }
