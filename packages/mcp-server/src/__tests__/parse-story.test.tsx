import path from 'path'
import { fileURLToPath } from 'url'
import { expect, it } from 'vitest'

import { parseStory } from '../../../metadata/src/utils/parse-story'

it('getArgsForStories', async () => {
  const storyPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    './example.stories.tsx'
  )
  const exports = await parseStory(storyPath)

  expect(exports.Primary).toBe(
    `<TextField name="text field">
  <Label>
    Label
  </Label>
  <FieldGroup>
    <Input
      isBorderless
      placeholder="This is a placeholder"
    />
    <TextFieldClearButton />
    <TextFieldVisibilityButton />
    <TextFieldCopyButton />
  </FieldGroup>
  <Description>
    This is a short description
  </Description>
</TextField>`
  )

  expect(exports.IsDisabled).toBe(
    `<TextField
  isDisabled
  name="text field"
>
  <Label>
    Label
  </Label>
  <FieldGroup>
    <Input
      isBorderless
      placeholder="This is a placeholder"
    />
    <TextFieldClearButton />
    <TextFieldVisibilityButton />
    <TextFieldCopyButton />
  </FieldGroup>
  <Description>
    This is a short description
  </Description>
</TextField>`
  )

  expect(exports.IsInvalid).toBe(
    `<TextField
  isInvalid
  name="text field"
>
  <Label>
    Label
  </Label>
  <FieldGroup>
    <Input
      isBorderless
      placeholder="This is a placeholder"
    />
    <TextFieldClearButton />
    <TextFieldVisibilityButton />
    <TextFieldCopyButton />
  </FieldGroup>
  <Description>
    This is a short description
  </Description>
</TextField>`
  )

  expect(exports.IsReadOnly).toBe(
    `<TextField
  isReadOnly
  name="text field"
>
  <Label>
    Label
  </Label>
  <FieldGroup>
    <Input
      isBorderless
      placeholder="This is a placeholder"
    />
    <TextFieldClearButton />
    <TextFieldVisibilityButton />
    <TextFieldCopyButton />
  </FieldGroup>
  <Description>
    This is a short description
  </Description>
</TextField>`
  )

  // expect(exports).toEqual({
  //     Primary: "<TextField {...props}><Label>Label</Label><FieldGroup><Input isBorderless placeholder="This is a placeholder" /><TextFieldClearButton /><TextFieldVisibilityButton /><TextFieldCopyButton /></FieldGroup><Description>This is a short description</Description></TextField>",
  //     // IsDisabled: {
  //     //     name: "text field",
  //     //     isDisabled: true,
  //     // },
  //     // IsInvalid: {
  //     //     name: "text field",
  //     //     isInvalid: true,
  //     // },
  //     // IsReadOnly: {
  //     //     name: "text field",
  //     //     isReadOnly: true,
  //     // },
  // });
})
