import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Select } from './Select'

describe('Select component', () => {
  const items = ['item1', 'item2', 'item3']
  const onSelectionMock = jest.fn()

  describe('rendering', () => {
    it('renders name', () => {
      const { getByText } = render(
        <Select name="Some Name" items={items} onSelection={onSelectionMock} />
      )

      expect(getByText('Some Name')).toBeInTheDocument()
    })

    it('renders a select input with a list of items', () => {
      const { getByText } = render(
        <Select name="Some Name" items={items} onSelection={onSelectionMock} />
      )

      expect(getByText('item1')).toBeInTheDocument()
      expect(getByText('item2')).toBeInTheDocument()
      expect(getByText('item3')).toBeInTheDocument()
    })
  })

  describe('selected element', () => {
    it('defaults to first item when no selected element provided', () => {
      const { getByLabelText } = render(
        <Select name="Some Name" items={items} onSelection={onSelectionMock} />
      )

      const select = getByLabelText('Some Name') as HTMLSelectElement
      expect(select.value).toEqual('item1')
    })

    it('selected provided element', () => {
      const { getByLabelText } = render(
        <Select
          name="Some Name"
          items={items}
          selected="item2"
          onSelection={onSelectionMock}
        />
      )

      const select = getByLabelText('Some Name') as HTMLSelectElement
      expect(select.value).toEqual('item2')
    })
  })

  describe('onSelection', () => {
    it('trigger onSelection action when selected', () => {
      const { getByLabelText } = render(
        <Select name="Some Name" items={items} onSelection={onSelectionMock} />
      )

      const select = getByLabelText('Some Name') as HTMLSelectElement
      fireEvent.change(select, {
        target: {
          value: 'item3'
        }
      })

      expect(select.value).toEqual('item3')
      expect(onSelectionMock).toHaveBeenCalledWith('item3')
    })
  })
})
