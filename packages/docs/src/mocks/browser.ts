import { setupWorker } from 'msw/browser'

import { handlers } from './handlers'

// @ts-expect-error - TODO type mismatch
export const worker = setupWorker(...handlers)
