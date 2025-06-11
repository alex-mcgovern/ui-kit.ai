import { Heading } from '@ui-kit.ai/components'

import {
    ColorTableBg,
    ColorTableBorder,
    ColorTableText,
} from '../../../theme/components/color-table'
import { DemoAlert } from '../../../theme/components/demo-alert'

export default function Page() {
    return (
        <>
            <Heading level={1}>Theme</Heading>
            <p>
                @ui-kit.ai uses a <strong>design token</strong> based theming system to provide a
                consistent look and feel across components. The theme is customizable, allowing you
                to adjust colors, typography, and other design elements to match your brand or
                personal preferences.
            </p>

            <p>
                The the is implement in Tailwind using custom CSS variables. This enables powerful
                extra functionality, like the <strong>intent API</strong>.
            </p>

            <Heading
                className='my-6'
                level={2}
            >
                Intent API
            </Heading>

            <p>
                The intent API allows using color to communicate semantic meaning in the UI. All
                colors may be overridden using the intent API, though it is recommended to use this
                feature sparingly to preserve meaning.
            </p>

            <DemoAlert />

            <Heading
                className='my-6'
                level={2}
            >
                Background color
            </Heading>
            <p>
                The available background colors are an intentionally limited set of colors focusing
                on the following use cases:
            </p>
            <ul className='my-4 list-outside list-disc pl-4'>
                <li className='my-2'>
                    <strong>Backgrounds</strong>: Page backgrounds, and raised elements.
                </li>
                <li className='my-2'>
                    <strong>Tints</strong>: Used primarily for communicating selection state within
                    menus & lists.
                </li>
                <li className='my-2'>
                    <strong>Accent</strong>: Used for emphasis, primarily on buttons and other
                    interactive elements.
                </li>
            </ul>
            <ColorTableBg />
            <Heading
                className='my-6'
                level={2}
            >
                Text
            </Heading>

            <p>The available text colors are also quite limited:</p>
            <ul className='my-4 list-outside list-disc pl-4'>
                <li className='my-2'>
                    <strong>Accent</strong>: Engineered to have a suitable contrast ratio against
                    the accent background color.
                </li>
                <li className='my-2'>
                    <strong>Light</strong>: Suitable for placeholders in form fields.
                </li>
                <li className='my-2'>
                    <strong>Mid</strong>: Used for secondary text, such as descriptions and labels.
                </li>
                <li className='my-2'>
                    <strong>Dark</strong>: Used for primary text, such as headings and body text.
                </li>
            </ul>

            <ColorTableText />
            <Heading
                className='my-6'
                level={2}
            >
                Border
            </Heading>

            <p>The available border colors are also quite limited:</p>
            <ul className='my-4 list-outside list-disc pl-4'>
                <li className='my-2'>
                    <strong>Light</strong>: Used for subtle borders, such as in form fields.
                </li>
                <li className='my-2'>
                    <strong>Mid</strong>: Used for primary borders, such as in cards and panels.
                </li>
                <li className='my-2'>
                    <strong>Dark</strong>: Used for strong borders, such as in modals and dialogs.
                </li>
            </ul>

            <ColorTableBorder />
        </>
    )
}
