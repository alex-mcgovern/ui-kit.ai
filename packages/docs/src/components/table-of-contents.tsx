import { Heading, ListBox } from '@ui-kit.ai/components'
import React, { useEffect, useState } from 'react'

interface TOCItem {
    children?: TOCItem[]
    href: string
    id: string
    level: number
    textValue: string
}

export function TableOfContents() {
    const [tocItems, setTocItems] = useState<TOCItem[]>([])
    const [activeId, setActiveId] = useState<string>('')
    console.debug('👉 activeId:', activeId)

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

        // Process headings to create TOC structure
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

            // We only want to handle up to 2 levels of indentation
            if (level === 2) {
                processedItems.push(item)
            } else if (level === 3 && processedItems.length > 0) {
                // Add as child to the last h2 item
                const lastItem = processedItems[processedItems.length - 1]
                if (lastItem == null) return
                if (Array.isArray(lastItem.children) === false) {
                    lastItem.children = []
                }
                lastItem.children.push(item)
            }
            // Ignore deeper levels for simplicity
        })

        setTocItems(processedItems)
    }, [])

    // Set up intersection observer to detect which heading is in view
    useEffect(() => {
        if (tocItems.length === 0) return

        const headingElements = document.querySelectorAll('h2, h3, h4, h5, h6')
        const callback: IntersectionObserverCallback = (entries) => {
            // Find the first heading that's in view
            const visibleHeadings = entries.filter((entry) => entry.isIntersecting)

            if (visibleHeadings.length > 0) {
                // Get the ID of the first visible heading
                const firstVisibleHeading = visibleHeadings[0].target as HTMLElement
                if (firstVisibleHeading.id) {
                    setActiveId(firstVisibleHeading.id)
                }
            }
        }

        const observer = new IntersectionObserver(callback, {
            rootMargin: '0px 0px -80% 0px', // Consider heading visible when in top 20% of viewport
            threshold: 0,
        })

        // Observe all heading elements
        headingElements.forEach((heading) => {
            if (heading.id) {
                observer.observe(heading)
            }
        })

        return () => {
            observer.disconnect()
        }
    }, [tocItems])

    // If no TOC items, don't render anything
    if (tocItems.length === 0) return null

    return (
        <section className='mb-4'>
            <Heading
                className='ml-2 text-sm text-mid mb-2'
                level={3}
            >
                On this page
            </Heading>
            <ListBox
                className='w-64 mb-4'
                items={tocItems.map((item) => ({
                    href: item.href,
                    id: item.id,
                    textValue: item.textValue,
                }))}
                selectedKeys={activeId ? [activeId] : []}
                selectionMode='single'
                showCheckmarkOnSelected={false}
            />
            {tocItems.map((item) =>
                item.children && item.children.length > 0 ? (
                    <div
                        className='ml-4'
                        key={item.id}
                    >
                        <ListBox
                            className='w-64 mb-4'
                            items={item.children.map((child) => ({
                                className: 'truncate max-w-full',
                                href: child.href,
                                id: child.id,
                                textValue: child.textValue,
                            }))}
                            selectedKeys={activeId ? [activeId] : []}
                            selectionMode='single'
                            showCheckmarkOnSelected={false}
                        />
                    </div>
                ) : null
            )}
        </section>
    )
}

export default TableOfContents
