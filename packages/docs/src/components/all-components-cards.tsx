import type { ComponentDoc } from 'react-docgen-typescript'

import { CardBody, CardLink, CardTitle, Markdown } from '@ui-kit.ai/components'
import propTypes from '@ui-kit.ai/metadata/prop-types.json'
import * as components from '@ui-kit.ai/storybook'
import Image from 'next/image'

import { hrefs } from '../lib/hrefs'

const COMPONENTS: {
    description: string
    href: string
    imageUrlDark: string
    imageUrlLight: string
    name: string
}[] = Object.keys(components).map((componentName) => {
    const docs = (propTypes as ComponentDoc[]).find(
        (prop) => prop.displayName === componentName
    ) as ComponentDoc
    return {
        description: docs.description,
        href: hrefs.component(componentName),
        imageUrlDark: `/components/dark/${componentName}_Default.png`,
        imageUrlLight: `/components/light/${componentName}_Default.png`,
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
                    <div className='overflow-hidden mb-1 border-b border-mid'>
                        <Image
                            alt={component.name}
                            className='not-dark:hidden group-hover:scale-102 transition-transform ease-in-out'
                            height={810}
                            src={component.imageUrlDark}
                            width={1440}
                        />
                        <Image
                            alt={component.name}
                            className='dark:hidden group-hover:scale-102 transition-transform ease-in-out'
                            height={810}
                            src={component.imageUrlLight}
                            width={1440}
                        />
                    </div>
                    <CardBody>
                        <CardTitle className='mb-2'>{component.name}</CardTitle>
                        <Markdown>{component.description}</Markdown>
                    </CardBody>
                </CardLink>
            ))}
        </>
    )
}
