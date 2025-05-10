'use client'

import type { ReactNode } from 'react'

import { RouterProvider as UIKitRouterProvider } from '@ui-kit.ai/components'
import { useRouter } from 'next/navigation'

// @ts-expect-error - TODO: Fix type error
declare module 'react-aria-components' {
    interface RouterConfig {
        routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
    }
}

export function RouterProvider({ children }: { children: ReactNode }) {
    const router = useRouter()

    return <UIKitRouterProvider navigate={router.push}>{children}</UIKitRouterProvider>
}
