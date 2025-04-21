import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { expect, it, vi } from 'vitest'

import { Button } from '../button'
import { Checkbox } from '../checkbox'
import { Form } from '../form'
import { FormCheckboxGroup } from '../form-checkbox-group'
import { FormResetOnSubmit } from '../form-reset-on-submit'
import { Label } from '../label'

it('submits form with `FormCheckboxGroup`', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockImplementation(() => null)

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormCheckboxGroup name='communication_preference'>
                <Label>Communication preference</Label>
                <Checkbox
                    label='Account updates'
                    value='account_updates'
                ></Checkbox>
                <Checkbox
                    label='Newsletter'
                    value='newsletter'
                ></Checkbox>
                <Checkbox
                    label='Advertising'
                    value='advertising'
                ></Checkbox>
            </FormCheckboxGroup>
            <Button type='submit'>Submit</Button>
        </Form>
    )

    const fieldA = getByLabelText('Account updates')
    await user.click(fieldA)
    const fieldB = getByLabelText('Newsletter')
    await user.click(fieldB)

    const button = getByText('Submit')
    await user.click(button)

    expect(onSubmit).toHaveBeenCalledWith(
        {
            communication_preference: ['account_updates', 'newsletter'],
        },
        expect.anything()
    )
})

it('`FormCheckboxGroup` clears when reset after submission', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockImplementation(() => null)

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormResetOnSubmit />
            <FormCheckboxGroup name='communication_preference'>
                <Label>Communication preference</Label>
                <Checkbox
                    label='Account updates'
                    value='account_updates'
                ></Checkbox>
                <Checkbox
                    label='Newsletter'
                    value='newsletter'
                ></Checkbox>
                <Checkbox
                    label='Advertising'
                    value='advertising'
                ></Checkbox>
            </FormCheckboxGroup>
            <Button type='submit'>Submit</Button>
        </Form>
    )

    const fieldA = getByLabelText('Account updates')
    await user.click(fieldA)
    const fieldB = getByLabelText('Newsletter')
    await user.click(fieldB)

    const button = getByText('Submit')
    await user.click(button)

    expect(onSubmit).toHaveBeenCalledWith(
        {
            communication_preference: ['account_updates', 'newsletter'],
        },
        expect.anything()
    )

    expect(fieldA).not.toBeChecked()
    expect(fieldB).not.toBeChecked()
})

it('handles `defaultValues` prop passed to `Form` correctly with `FormCheckboxGroup`', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockImplementation(() => null)

    const { getByLabelText, getByText } = render(
        <Form
            onSubmit={onSubmit}
            options={{
                defaultValues: {
                    communication_preference: ['account_updates', 'newsletter'],
                },
            }}
        >
            <FormCheckboxGroup name='communication_preference'>
                <Label>Communication preference</Label>
                <Checkbox
                    label='Account updates'
                    value='account_updates'
                ></Checkbox>
                <Checkbox
                    label='Newsletter'
                    value='newsletter'
                ></Checkbox>
                <Checkbox
                    label='Advertising'
                    value='advertising'
                ></Checkbox>
            </FormCheckboxGroup>
            <Button type='submit'>Submit</Button>
        </Form>
    )

    const fieldA = getByLabelText('Account updates')
    const fieldB = getByLabelText('Newsletter')

    expect(fieldA).toBeChecked()
    expect(fieldB).toBeChecked()

    const button = getByText('Submit')
    await user.click(button)

    expect(onSubmit).toHaveBeenCalledWith(
        {
            communication_preference: ['account_updates', 'newsletter'],
        },
        expect.anything()
    )
})

it('handles `values` prop passed to `Form` correctly with `FormCheckboxGroup`', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockImplementation(() => null)

    const { getByLabelText, getByText } = render(
        <Form
            onSubmit={onSubmit}
            options={{
                values: {
                    communication_preference: ['account_updates', 'newsletter'],
                },
            }}
        >
            <FormCheckboxGroup name='communication_preference'>
                <Label>Communication preference</Label>
                <Checkbox
                    label='Account updates'
                    value='account_updates'
                ></Checkbox>
                <Checkbox
                    label='Newsletter'
                    value='newsletter'
                ></Checkbox>
                <Checkbox
                    label='Advertising'
                    value='advertising'
                ></Checkbox>
            </FormCheckboxGroup>
            <Button type='submit'>Submit</Button>
        </Form>
    )

    const fieldA = getByLabelText('Account updates')
    const fieldB = getByLabelText('Newsletter')

    expect(fieldA).toBeChecked()
    expect(fieldB).toBeChecked()

    const button = getByText('Submit')
    await user.click(button)

    expect(onSubmit).toHaveBeenCalledWith(
        {
            communication_preference: ['account_updates', 'newsletter'],
        },
        expect.anything()
    )
})

it('handles `defaultValue` prop passed to `FormCheckboxGroup`', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn().mockImplementation(() => null)

    const { getByLabelText, getByText } = render(
        <Form onSubmit={onSubmit}>
            <FormCheckboxGroup
                defaultValue={['account_updates', 'newsletter']}
                name='communication_preference'
            >
                <Label>Communication preference</Label>
                <Checkbox
                    label='Account updates'
                    value='account_updates'
                ></Checkbox>
                <Checkbox
                    label='Newsletter'
                    value='newsletter'
                ></Checkbox>
                <Checkbox
                    label='Advertising'
                    value='advertising'
                ></Checkbox>
            </FormCheckboxGroup>
            <Button type='submit'>Submit</Button>
        </Form>
    )

    const fieldA = getByLabelText('Account updates')
    const fieldB = getByLabelText('Newsletter')

    expect(fieldA).toBeChecked()
    expect(fieldB).toBeChecked()

    const button = getByText('Submit')
    await user.click(button)

    expect(onSubmit).toHaveBeenCalledWith(
        {
            communication_preference: ['account_updates', 'newsletter'],
        },
        expect.anything()
    )
})
