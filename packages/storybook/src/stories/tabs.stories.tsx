import type { Meta, StoryObj } from '@storybook/react'

import { Tab, TabList, TabPanel, Tabs } from '@ui-kit.ai/components'

function TemplateHorizontal() {
    return (
        <Tabs>
            <TabList
                aria-label='Roman history'
                className='mb-2'
            >
                <Tab id='caesar'>Caesar</Tab>
                <Tab id='octavian'>Octavian</Tab>
                <Tab id='marc-antony'>Archive</Tab>
            </TabList>

            <TabPanel id='caesar'>
                <ul className='list-inside list-disc'>
                    <li className='ml-2'>Crossed the Rubicon in 49 BCE, sparking civil war</li>
                    <li className='ml-2'>Implemented the Julian calendar</li>
                    <li className='ml-2'>Assassinated on the Ides of March (March 15) in 44 BCE</li>
                </ul>
            </TabPanel>

            <TabPanel id='octavian'>
                <ul className='list-inside list-disc'>
                    <li className='ml-2'>Was Julius Caesar's adopted son and heir</li>
                    <li className='ml-2'>Became Rome's first emperor under the name Augustus</li>
                    <li className='ml-2'>
                        Defeated Marc Antony and Cleopatra at the Battle of Actium
                    </li>
                </ul>
            </TabPanel>

            <TabPanel id='marc-antony'>
                <ul className='list-inside list-disc'>
                    <li className='ml-2'>
                        Formed the Second Triumvirate with Octavian and Lepidus
                    </li>
                    <li className='ml-2'>Had a famous romance with Egyptian queen Cleopatra</li>
                    <li className='ml-2'>Committed suicide after his defeat by Octavian</li>
                </ul>
            </TabPanel>
        </Tabs>
    )
}

function TemplateVertical() {
    return (
        <Tabs orientation='vertical'>
            <TabList
                aria-label='Roman history'
                className='mr-2'
            >
                <Tab id='caesar'>Caesar</Tab>
                <Tab id='octavian'>Octavian</Tab>
                <Tab id='marc-antony'>Archive</Tab>
            </TabList>
            <TabPanel id='caesar'>
                <ul className='list-inside list-disc'>
                    <li className='ml-2'>Crossed the Rubicon in 49 BCE, sparking civil war</li>
                    <li className='ml-2'>Implemented the Julian calendar</li>
                    <li className='ml-2'>Assassinated on the Ides of March (March 15) in 44 BCE</li>
                </ul>
            </TabPanel>

            <TabPanel id='octavian'>
                <ul className='list-inside list-disc'>
                    <li className='ml-2'>Was Julius Caesar's adopted son and heir</li>
                    <li className='ml-2'>Became Rome's first emperor under the name Augustus</li>
                    <li className='ml-2'>
                        Defeated Marc Antony and Cleopatra at the Battle of Actium
                    </li>
                </ul>
            </TabPanel>

            <TabPanel id='marc-antony'>
                <ul className='list-inside list-disc'>
                    <li className='ml-2'>
                        Formed the Second Triumvirate with Octavian and Lepidus
                    </li>
                    <li className='ml-2'>Had a famous romance with Egyptian queen Cleopatra</li>
                    <li className='ml-2'>Committed suicide after his defeat by Octavian</li>
                </ul>
            </TabPanel>
        </Tabs>
    )
}

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    decorators: [
        (Story) => (
            <div className='w-[600px]'>
                <Story />
            </div>
        ),
    ],
    render: TemplateHorizontal,
    title: 'Components/Tabs',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    parameters: {
        displayName: 'Default',
    },
}

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
    },
    parameters: {
        displayName: 'Vertical orientation',
    },
    render: TemplateVertical,
}
