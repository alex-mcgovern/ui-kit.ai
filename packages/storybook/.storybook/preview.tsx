import type { Preview } from '@storybook/react'

import './storybook.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initialize as initializeMsw, mswLoader } from 'msw-storybook-addon'
import React from 'react'
import { type ScreenshotOptions, withScreenshot } from 'storycap'
import '@ui-kit.ai/components/style.css'

initializeMsw()

const screenshotOptions: ScreenshotOptions = {
  captureBeyondViewport: false,
  fullPage: false,
  viewport: {
    deviceScaleFactor: 3,
    height: 300,
    width: 600,
  },
}

const preview: Preview = {
  decorators: [
    // @ts-expect-error - the types seem out of date
    withScreenshot,
    (Story) => {
      return (
        <QueryClientProvider client={new QueryClient()}>
          <Story />
        </QueryClientProvider>
      )
    },
  ],
  loaders: [mswLoader],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    screenshot: screenshotOptions,
  },
}

export default preview
