export function MyComponent() {
  return (
    <CheckboxGroup>
      <Label>This is a label for a field</Label>
      <Checkbox
        description='Optional description'
        label='Item A'
        value='item-a'
      />
      <Checkbox
        description='Optional description'
        label='Item B'
        value='item-b'
      />
      <Description>This is a description for a field</Description>
    </CheckboxGroup>
  )
}
