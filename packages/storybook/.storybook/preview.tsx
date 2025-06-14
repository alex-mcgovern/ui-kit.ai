import type { Preview } from '@storybook/react'
import type { ScreenshotOptions } from 'storycap'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initialize as initializeMsw, mswLoader } from 'msw-storybook-addon'
import React from 'react'
import { withScreenshot } from 'storycap'
import '@ui-kit.ai/components/style.css'

import './index.css'

import { twMerge } from 'tailwind-merge'
initializeMsw()

const screenshotOptions: ScreenshotOptions = {
    captureBeyondViewport: false,
    fullPage: false,
    omitBackground: true,
    viewport: {
        deviceScaleFactor: 3,
        height: 270,
        width: 480,
    },
}

const preview: Preview = {
    decorators: [
        // @ts-expect-error - the storyCap types seem out of date
        withScreenshot,
        (Story) => {
            return (
                <QueryClientProvider client={new QueryClient()}>
                    <Story />
                </QueryClientProvider>
            )
        },
        (Story) => {
            return (
                <div
                    className={twMerge(
                        'relative flex items-center justify-center',
                        'min-h-[270px] px-12 py-6',
                        // gradient background
                        'before:absolute before:inset-0 before:-z-20',
                        'before:bg-gradient-to-tr',
                        'before:from-[var(--theme-info-bg-tint)]/70',
                        'before:via-[var(--theme-info-bg-tint)]/70',
                        'before:to-[var(--theme-error-bg-tint)]/70',
                        // dots overlay
                        'after:absolute after:inset-0 after:-z-10',
                        'after:bg-[radial-gradient(var(--theme-default-border-default-hover)_1px,transparent_1px)]',
                        'after:[background-size:16px_16px]',
                        'after:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_30%,transparent_150%)]'
                    )}
                >
                    <Story />
                </div>
            )
        },
    ],
    loaders: [mswLoader],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        layout: 'fullscreen',
        screenshot: screenshotOptions,
    },
}

export default preview
