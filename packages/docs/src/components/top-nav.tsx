'use client'

import {
    Button,
    FieldGroup,
    Input,
    Kbd,
    LinkButton,
    SearchField,
    SearchFieldClearButton,
    // Tag,
} from '@ui-kit.ai/components'
// import packageJson from '@ui-kit.ai/components/package.json'
import '@ui-kit.ai/components/style.css'
import { Component, Github, Search, Sun } from 'lucide-react'
import Link from 'next/link'

import { hrefs } from '../lib/hrefs'

export function TopNav() {
    return (
        <nav className='bg-raised/10 backdrop-blur-md sticky top-0 z-50 border-b h-12 border-mid'>
            <div className='flex items-center justify-between px-4 py-2 mx-auto '>
                <div className='flex gap-6 items-center'>
                    <Link
                        className='font-semibold flex items-center gap-1 text-dark hover:text-mid transition-colors'
                        href='/'
                    >
                        <Component className='size-4' />
                        ui-kit.ai
                    </Link>
                    <div className='flex items-center gap-4'>
                        <Link
                            className='text-sm  text-dark hover:text-mid transition-colors'
                            href={hrefs.docs.getting_started.introduction}
                        >
                            Docs
                        </Link>
                        <Link
                            className='text-sm  text-dark hover:text-mid transition-colors'
                            href={hrefs.docs.components}
                        >
                            Components
                        </Link>
                        <Link
                            className='text-sm  text-dark hover:text-mid transition-colors'
                            href={hrefs.theme}
                        >
                            Theme
                        </Link>
                    </div>
                    {/* <Tag className='h-5 text-xs px-1.5'>v{packageJson.version}</Tag> */}
                </div>
                <div className='flex items-center justify-between gap-1 '>
                    <SearchField className='max-w-64'>
                        <FieldGroup className='bg-tint-light/50 backdrop-blur-md'>
                            <Input
                                icon={<Search />}
                                isBorderless
                                placeholder='Search...'
                            />
                            <SearchFieldClearButton />
                            <Kbd className='mr-2 shrink-0'>/</Kbd>
                        </FieldGroup>
                    </SearchField>
                    <LinkButton
                        isIcon
                        variant='tertiary'
                    >
                        <Github />
                    </LinkButton>
                    <Button
                        isIcon
                        variant='tertiary'
                    >
                        <Sun />
                    </Button>
                </div>
            </div>
        </nav>
    )
}
