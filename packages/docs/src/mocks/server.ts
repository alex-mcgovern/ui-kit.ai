import { setupServer } from 'msw/node'

import { handlers } from './handlers'

// @ts-expect-error - TODO type mismatch
export const server = setupServer(...handlers)
