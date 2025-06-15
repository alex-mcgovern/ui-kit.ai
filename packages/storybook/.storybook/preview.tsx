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
    clip: { height: 270, width: 480, x: 240, y: 135 },
    fullPage: false,
    omitBackground: true,
    viewport: {
        deviceScaleFactor: 3,
        height: 540,
        width: 960,
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
                        'flex items-center justify-center h-screen w-screen',
                        // gradient background
                        'before:absolute before:inset-0 before:-z-20',
                        'before:bg-base-raised'
                    )}
                >
                    <div
                        className={twMerge(
                            'relative flex items-center-safe justify-center',
                            'h-[270px] w-[480px] px-12 py-6',

                            // dots overlay
                            'after:absolute after:inset-3 after:-z-10',
                            'after:bg-[radial-gradient(var(--theme-default-bg-tint)_1px,transparent_1px)] [background-size:16px_16px]',
                            'after:[background-size:16px_16px]'
                        )}
                    >
                        <Story />
                    </div>
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
