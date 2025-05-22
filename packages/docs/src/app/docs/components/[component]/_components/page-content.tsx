'use client'

import type { ComponentDoc, Props } from 'react-docgen-typescript'

import { Heading, Markdown } from '@ui-kit.ai/components'
import propTypes from '@ui-kit.ai/metadata/prop-types.json'
import usage from '@ui-kit.ai/metadata/usage-examples.json'
import * as components from '@ui-kit.ai/storybook'

import { Code } from '../../../../../components/code'
import { PropsTable } from '../../../../../components/props-table'
import { getComponentStories } from '../../../../../lib/get-story'
import { getUsageExample } from '../../../../../lib/get-usage-example'

export function ComponentDocsPageContent({ component }: { component: keyof typeof components }) {
    if (component in components === false)
        throw new Error(`Examples for component "${component}" not found`)
    if (component in usage === false) throw new Error('Code snippet for component not found')

    if (
        Array.isArray(propTypes) === false ||
        propTypes.findIndex((prop) => prop.displayName === component) === -1
    )
        throw new Error('Code snippet for component not found')

    const stories = getComponentStories(component)

    const Default = stories.find((Story) => Story.storyName === 'Default')
    if (!Default) throw new Error(`Default story not found for ${component}`)

    const docs = propTypes.find(
        (propType) => isComponentDoc(propType) && propType.displayName === component
    )
    if (docs == null) throw new Error(`Docs not found for ${component}`)

    return (
        <>
            <Heading level={1}>{docs.displayName}</Heading>
            <Markdown className='mb-8'>{docs.description}</Markdown>
            <Code
                className='mb-8'
                code={getUsageExample(component, 'Default')}
                component={<Default />}
            />

            {stories.length > 1 ? <Heading level={2}>Examples</Heading> : null}

            {stories.map((Story) => {
                // The `Default` story is shown outside the Examples section
                if (Story.storyName === 'Default') return null
                return (
                    <section
                        className='mb-12'
                        key={Story.id}
                    >
                        <Heading
                            className='mb-6'
                            level={3}
                        >
                            {Story.parameters.displayName}
                        </Heading>
                        <Code
                            code={getUsageExample(component, Story.storyName)}
                            component={<Story />}
                        />
                    </section>
                )
            })}

            <section className='my-8'>
                <Heading level={2}>Props</Heading>
                {/* TODO: Determine why the type casting is needed */}
                <PropsTable props={docs.props as unknown as Props} />
            </section>
        </>
    )
}

function isComponentDoc(doc: unknown): doc is ComponentDoc {
    return (
        typeof doc === 'object' &&
        doc !== null &&
        'displayName' in doc &&
        'description' in doc &&
        'props' in doc
    )
}
