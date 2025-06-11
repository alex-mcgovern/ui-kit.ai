import { Heading, ListBox, type OptionsSchema } from '@ui-kit.ai/components'
import React, { useEffect, useState } from 'react'

interface TOCItem {
    href: string
    id: string
    level: number
    textValue: string
}

export function TableOfContents() {
    const [tocItems, setTocItems] = useState<TOCItem[]>([])

    // Function to convert heading text to kebab-case for IDs
    const toKebabCase = (text: string): string => {
        return text
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-')
    }

    useEffect(() => {
        // Find all headings inside main element
        const mainElement = document.querySelector('main')
        if (!mainElement) return

        const headings = Array.from(
            mainElement.querySelectorAll('h2, h3, h4, h5, h6')
        ) as HTMLHeadingElement[]

        // Process headings to create a flat TOC structure
        const processedItems: TOCItem[] = []

        headings.forEach((heading) => {
            // Get heading level as number (h2 -> 2, h3 -> 3, etc.)
            const level = parseInt(heading.tagName[1] as string, 10)

            // Skip h1 headings
            if (level === 1) return

            // Generate or get the ID for the heading
            const id = heading.id || toKebabCase(heading.textContent ?? '')

            // Set the ID on the heading element if it doesn't exist
            if (!heading.id) {
                heading.id = id
            }

            const item: TOCItem = {
                href: `#${id}`,
                id,
                level,
                textValue: heading.textContent ?? '',
            }

            // Add all headings to the flat list
            processedItems.push(item)
        })

        setTocItems(processedItems)
    }, [])

    // If no TOC items, don't render anything
    if (tocItems.length === 0) return null

    // Handle smooth scrolling with offset when clicking on a TOC item
    const handleItemClick = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.scrollY - 56
            window.scrollTo({
                behavior: 'smooth',
                top: offsetTop,
            })
        }
    }

    return (
        <section className='mb-4'>
            <Heading
                className='ml-1 text-sm text-lo-contrast mb-2'
                level={3}
            >
                On this page
            </Heading>
            <ListBox<OptionsSchema<'listbox'>>
                className='w-64 mb-4'
                items={tocItems.map((item) => ({
                    className: item.level > 2 ? 'ml-2 truncate max-w-full' : 'truncate max-w-full',
                    id: item.id,
                    textValue: item.textValue,
                }))}
                onAction={(k) => handleItemClick(k.toString())}
                selectionMode='single'
                showCheckmarkOnSelected={false}
            />
        </section>
    )
}

export default TableOfContents
