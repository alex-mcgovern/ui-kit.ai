'use client'

import { Alert } from '@ui-kit.ai/components'
import { AlertTriangleIcon, CheckCircleIcon, InfoIcon } from 'lucide-react'

import { DemoContainer } from './demo-container'

export function DemoAlert() {
    return (
        <DemoContainer className='flex flex-col gap-4'>
            <Alert
                icon={InfoIcon}
                text='You do not have any active subscriptions.'
            />
            <Alert
                icon={AlertTriangleIcon}
                intent='error'
                text='Your last payment was unsuccessful.'
            />
            <Alert
                icon={AlertTriangleIcon}
                intent='warning'
                text='Your subscription will expire in 3 days.'
            />
            <Alert
                icon={CheckCircleIcon}
                intent='success'
                text='Your payment was successful.'
            />
        </DemoContainer>
    )
}
