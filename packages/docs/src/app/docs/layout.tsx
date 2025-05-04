'use client'

import { Heading, ListBox, type OptionsSchema } from '@ui-kit.ai/components'
import * as components from '@ui-kit.ai/storybook'
import { useSelectedLayoutSegments } from 'next/navigation'

import { Sidebar } from '../../components/sidebar'
import { hrefs } from '../../lib/hrefs'
import '../../mocks'

const ITEMS: OptionsSchema<'listbox'>[] = Object.keys(components).map((componentName) => ({
    href: hrefs.component(componentName),
    id: componentName,
    textValue: componentName,
}))

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const selectedLayoutSegments = useSelectedLayoutSegments()
    const selectedLayoutSegment = selectedLayoutSegments[selectedLayoutSegments.length - 1]

    return (
        <div className='grid grid-cols-[1fr_5fr] gap-8 min-h-screen'>
            <Sidebar>
                <Heading
                    className='text-sm'
                    level={3}
                >
                    Getting started
                </Heading>
                <ListBox
                    className='w-64 mb-4'
                    items={[
                        {
                            href: hrefs.docs.getting_started.introduction,
                            id: 'introduction',
                            textValue: 'Introduction',
                        },
                        {
                            href: hrefs.docs.getting_started.installation,
                            id: 'installation',
                            textValue: 'Installation',
                        },
                        {
                            href: hrefs.docs.getting_started.theme,
                            id: 'Theme',
                            textValue: 'theme',
                        },
                    ]}
                    selectedKeys={selectedLayoutSegment != null ? [selectedLayoutSegment] : []}
                    selectionMode='single'
                    showCheckmarkOnSelected={false}
                />
                <Heading
                    className='text-sm'
                    level={3}
                >
                    Components
                </Heading>
                <ListBox
                    className='w-64'
                    items={ITEMS}
                    selectedKeys={selectedLayoutSegment != null ? [selectedLayoutSegment] : []}
                    selectionMode='single'
                    showCheckmarkOnSelected={false}
                />
            </Sidebar>
            <main className='w-full max-w-4xl py-8 px-4 min-w-0 mx-auto'>{children}</main>
        </div>
    )
}
