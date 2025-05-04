'use client'

import { Card, CardBody, ListBox } from '@ui-kit.ai/components'
import { AppleIcon, BananaIcon, CarrotIcon, LeafyGreenIcon } from 'lucide-react'

import { DemoContainer } from './demo-container'

export function DemoListBox() {
    return (
        <DemoContainer className='grid grid-cols-2 gap-4 items-center'>
            <div className='grid grid-cols-2 gap-4'>
                <ListBoxes />
            </div>

            <Card>
                <CardBody className='grid grid-cols-2 gap-4'>
                    <ListBoxes />
                </CardBody>
            </Card>
        </DemoContainer>
    )
}

function ListBoxes() {
    return (
        <>
            <ListBox
                defaultSelectedKeys={['apple']}
                items={[
                    {
                        icon: <AppleIcon />,
                        id: 'apple',
                        textValue: 'Apple',
                    },
                    {
                        icon: <BananaIcon />,
                        id: 'banana',
                        textValue: 'Banana',
                    },
                    {
                        icon: <CarrotIcon />,
                        id: 'carrot',
                        textValue: 'Carrot',
                    },
                    {
                        icon: <LeafyGreenIcon />,
                        id: 'spinach',
                        textValue: 'Spinach',
                    },
                ]}
                selectionMode='single'
            />
            <ListBox
                defaultSelectedKeys={['apple']}
                items={[
                    {
                        icon: <AppleIcon />,
                        id: 'apple',
                        intent: 'error',
                        textValue: 'Apple',
                    },
                    {
                        icon: <BananaIcon />,
                        id: 'banana',
                        intent: 'error',
                        textValue: 'Banana',
                    },
                    {
                        icon: <CarrotIcon />,
                        id: 'carrot',
                        intent: 'error',
                        textValue: 'Carrot',
                    },
                    {
                        icon: <LeafyGreenIcon />,
                        id: 'spinach',
                        intent: 'error',
                        textValue: 'Spinach',
                    },
                ]}
                selectionMode='single'
            />
        </>
    )
}
