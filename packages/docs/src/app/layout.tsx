import type { Metadata, Viewport } from 'next'

import {
  Button,
  FieldGroup,
  Input,
  Kbd,
  LinkButton,
  SearchField,
  SearchFieldClearButton,
  Tag,
} from '@ui-kit.ai/components'
import packageJson from '@ui-kit.ai/components/package.json'
import '@ui-kit.ai/components/style.css'
import { Component, Github, Search, Sun } from 'lucide-react'

import '../index.css'

import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({
  preload: true,
  subsets: ['latin', 'latin-ext'],
})

export const metadata: Metadata = {
  description: 'A component library for the AI age.',
  icons: [
    {
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon-light.ico',
    },
    {
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon-dark.ico',
    },
  ],
  title: 'ui-kit.ai',
}

export const viewport: Viewport = {
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased relative `}>
        <nav className='bg-background-raised backdrop-blur-md sticky top-0 z-10 border-b border-b-tint'>
          <div className='max-w-6xl flex items-center justify-between px-4 py-2 mx-auto '>
            <div className='flex gap-4 items-center'>
              <Link
                className='font-semibold flex items-center gap-1 text-hi-contrast hover:text-mid-contrast transition-colors'
                href='/'
              >
                <Component className='size-4' />
                ui-kit.ai
              </Link>
              <Tag className='h-5 text-xs px-1.5'>v{packageJson.version}</Tag>
            </div>
            <div className='flex items-center justify-between gap-1 '>
              <SearchField className='max-w-64'>
                <FieldGroup>
                  <Input
                    icon={<Search />}
                    isBorderless
                    placeholder='Search...'
                  />
                  <SearchFieldClearButton />
                  <Kbd className='mr-2'>/</Kbd>
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
        <main className='max-w-6xl py-12 px-4 mx-auto'>{children}</main>
      </body>
    </html>
  )
}
