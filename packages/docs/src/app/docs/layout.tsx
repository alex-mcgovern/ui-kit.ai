'use client'

import { Heading, ListBox, type OptionsSchema } from '@ui-kit.ai/components'
import * as components from '@ui-kit.ai/storybook'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'

import { Sidebar } from '../../components/sidebar'
import TableOfContents from '../../components/table-of-contents'
import { hrefs } from '../../lib/hrefs'

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
    const path = usePathname()
    const selectedLayoutSegments = useSelectedLayoutSegments()
    const selectedLayoutSegment = selectedLayoutSegments[selectedLayoutSegments.length - 1]

    return (
        <div className='grid grid-cols-1 md:grid-cols-[1fr_4fr_1fr] gap-8 min-h-screen'>
            <Sidebar className='hidden md:block'>
                <section className='mb-4'>
                    <Heading
                        className='ml-0.75  text-sm text-lo-contrast mb-2'
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
                                id: 'theme',
                                textValue: 'Theme',
                            },
                            {
                                href: hrefs.docs.getting_started.mcp_server,
                                id: 'mcp-server',
                                textValue: 'MCP server',
                            },
                        ]}
                        selectedKeys={selectedLayoutSegment != null ? [selectedLayoutSegment] : []}
                        selectionMode='single'
                        showCheckmarkOnSelected={false}
                    />
                </section>
                <section className='mb-4'>
                    <Heading
                        className='ml-0.75  text-sm mb-2 text-lo-contrast'
                        level={3}
                    >
                        Components
                    </Heading>
                    <ListBox
                        className='w-64 mb-4'
                        items={ITEMS}
                        selectedKeys={selectedLayoutSegment != null ? [selectedLayoutSegment] : []}
                        selectionMode='single'
                        showCheckmarkOnSelected={false}
                    />
                </section>
            </Sidebar>
            <main className='w-full max-w-3xl py-8 px-4 min-w-0 mx-auto'>{children}</main>
            <nav className='hidden md:block h-[calc(100dvh-3rem)] sticky top-12 px-4 py-6 min-w-0 overflow-y-auto scrollbar-thin'>
                <TableOfContents key={path} />
            </nav>
        </div>
    )
}
