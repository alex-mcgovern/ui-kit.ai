'use client'

import { DemoAlert } from './demo-alert'
import { DemoButton } from './demo-button'
import { DemoForm } from './demo-form'
import { DemoListBox } from './demo-list-box'
import { DemoTable } from './demo-table'
import { DemoTags } from './demo-tags'

export function Demo() {
    return (
        <div className='grid grid-cols-[3fr_2fr] gap-4'>
            <div className='flex flex-col gap-4'>
                <DemoAlert />
                <DemoButton />
                <DemoTags />
                <DemoTable />
                <DemoListBox />
            </div>

            <DemoForm />
        </div>
    )
}
