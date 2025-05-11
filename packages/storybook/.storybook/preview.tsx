import type { Preview } from '@storybook/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initialize as initializeMsw, mswLoader } from 'msw-storybook-addon'
import React from 'react'
import { isScreenshot, type ScreenshotOptions, withScreenshot } from 'storycap'
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
            // return isScreenshot() ? (
            return (
                <div
                    className={twMerge(
                        'flex items-center justify-center',
                        'px-6 min-h-[270px]',
                        'before:inset-0 before:-z-10 before:fixed',
                        'before:bg-gradient-to-tr before:from-[var(--theme-info-bg-raised)] before:via-[var(--theme-default-bg-raised)] before:to-[var(--theme-error-bg-raised)]'
                    )}
                >
                    <Story />
                </div>
            )
            // ) : (
            //     <Story />
            // )
        },
    ],
    loaders: [mswLoader],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        screenshot: screenshotOptions,
    },
}

export default preview
