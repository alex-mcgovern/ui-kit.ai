import type { Metadata, Viewport } from 'next'

import '@ui-kit.ai/components/style.css'

import '../index.css'

import { Inter } from 'next/font/google'

import { MSWProvider } from '../components/msw-provider'
import { TopNav } from '../components/top-nav'

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
                <MSWProvider>
                    <TopNav />
                    {children}
                </MSWProvider>
            </body>
        </html>
    )
}
