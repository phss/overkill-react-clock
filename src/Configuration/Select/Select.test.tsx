import * as React from 'react'
import { render } from '@testing-library/react'
import { Select } from './Select'

describe('Select component', () => {
  const items = ['item1', 'item2', 'item3']

  describe('rendering', () => {
    it('renders name', () => {
      const { getByText } = render(<Select name="Some Name" items={items} />)

      expect(getByText('Some Name')).toBeInTheDocument()
    })

    it('renders a select input with a list of items', () => {
      const { getByText } = render(<Select name="Some Name" items={items} />)

      expect(getByText('item1')).toBeInTheDocument()
      expect(getByText('item2')).toBeInTheDocument()
      expect(getByText('item3')).toBeInTheDocument()
    })
  })

  describe('selected element', () => {
    it('defaults to first item when no selected element provided', () => {
      const { getByLabelText } = render(
        <Select name="Some Name" items={items} />
      )

      const select = getByLabelText('Some Name') as HTMLSelectElement
      expect(select.value).toEqual('item1')
    })

    it('selected provided element', () => {
      const { getByLabelText } = render(
        <Select name="Some Name" items={items} selected="item2" />
      )

      const select = getByLabelText('Some Name') as HTMLSelectElement
      expect(select.value).toEqual('item2')
    })
  })
})
