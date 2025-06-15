import { CardBody, CardLink, CardTitle, Markdown } from '@ui-kit.ai/components'
import propTypes from '@ui-kit.ai/metadata/prop-types.json'
import * as components from '@ui-kit.ai/storybook'
import Image from 'next/image'

import { hrefs } from '../lib/hrefs'

const COMPONENTS: {
    description: null | string
    href: string
    imageUrlDark: string
    imageUrlLight: string
    name: string
}[] = Object.keys(components).map((componentName) => {
    const docs = Array.isArray(propTypes)
        ? propTypes.find((prop) => prop.displayName === componentName)
        : null
    return {
        description: docs?.description ?? null,
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
                    className='group bg-transparent border-none rounded-none !shadow-none'
                    href={component.href}
                    key={component.name}
                >
                    <div className='overflow-hidden rounded-lg border border-default group-hover:border-field transition-colors'>
                        <Image
                            alt={component.name}
                            className='not-dark:hidden ease-out'
                            height={810}
                            src={component.imageUrlDark}
                            width={1440}
                        />
                        <Image
                            alt={component.name}
                            className='dark:hidden ease-in-out'
                            height={810}
                            src={component.imageUrlLight}
                            width={1440}
                        />
                    </div>
                    <CardBody className='p-0'>
                        <CardTitle className='mb-2 group-hover:underline decoration-dotted'>
                            {component.name}
                        </CardTitle>
                        {component.description != null ? (
                            <Markdown>{component.description}</Markdown>
                        ) : null}
                    </CardBody>
                </CardLink>
            ))}
        </>
    )
}
