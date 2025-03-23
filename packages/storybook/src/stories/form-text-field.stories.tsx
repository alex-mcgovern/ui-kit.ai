import type { Meta, StoryObj } from '@storybook/react'
import type { ComponentProps } from 'react'

import {
  FieldGroup,
  Form,
  FormTextField,
  Input,
  Label,
  TextFieldClearButton,
} from '@ui-kit.ai/components'
import { AtSignIcon } from 'lucide-react'

import * as LabelStories from './label.stories'

function Template(args: ComponentProps<typeof FormTextField>) {
  return (
    <Form onSubmit={() => {}}>
      <FormTextField {...args}>
        <Label {...LabelStories.Default.args} />
        <FieldGroup>
          <Input
            icon={<AtSignIcon />}
            isBorderless
            placeholder='Enter your email address'
          />
          <TextFieldClearButton />
        </FieldGroup>
      </FormTextField>
    </Form>
  )
}

const meta = {
  args: {
    name: 'email',
  },
  component: FormTextField,
  render: Template,
  title: 'Components/FormTextField',
} satisfies Meta<typeof FormTextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  parameters: {
    displayName: 'Default',
  },
}

export const IsInvalid: Story = {
  args: {
    isInvalid: true,
  },
  parameters: {
    displayName: 'Invalid',
  },
}
