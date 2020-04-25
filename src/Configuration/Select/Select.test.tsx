import * as React from 'react'
import { render } from '@testing-library/react'
import { Select } from './Select'

describe('Select component', () => {
  it('renders a select input with a list of items', () => {
    const items = ['item1', 'item2', 'item3']
    const { getByText } = render(<Select items={items} />)

    expect(getByText('item1')).toBeInTheDocument()
  })
})
