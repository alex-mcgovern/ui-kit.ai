import type { ComponentDoc } from 'react-docgen-typescript'

import { CardBody, CardLink, CardTitle, Markdown } from '@ui-kit.ai/components'
import propTypes from '@ui-kit.ai/metadata/prop-types.json'
import * as components from '@ui-kit.ai/storybook'
import Image from 'next/image'

import { hrefs } from '../lib/hrefs'

const COMPONENTS: {
    description: string
    href: string
    imageUrl: string
    name: string
}[] = Object.keys(components).map((componentName) => {
    const docs = (propTypes as ComponentDoc[]).find(
        (prop) => prop.displayName === componentName
    ) as ComponentDoc
    return {
        description: docs.description,
        href: hrefs.component(componentName),
        imageUrl: `/components/${componentName}_Default.png`,
        name: componentName,
    }
})

export function AllComponentsCards() {
    return (
        <>
            {COMPONENTS.map((component) => (
                <CardLink
                    className='group'
                    href={component.href}
                    key={component.name}
                >
                    <div className='overflow-hidden m-3 rounded-sm'>
                        <Image
                            alt={component.name}
                            className='group-hover:scale-101 transition-transform rounded-sm duration-500 ease-in-out'
                            height={810}
                            src={component.imageUrl}
                            width={1440}
                        />
                    </div>
                    <CardBody>
                        <CardTitle>{component.name}</CardTitle>
                        <Markdown>{component.description}</Markdown>
                    </CardBody>
                </CardLink>
            ))}
        </>
    )
}
