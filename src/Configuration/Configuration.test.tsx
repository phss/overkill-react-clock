import * as React from 'react'
import { Configuration } from './Configuration'
import { render } from '@testing-library/react'

describe('Configuration component', () => {
  it('contains the specified time', () => {
    const { getByText } = render(<Configuration />)

    expect(getByText('Hello there')).toBeInTheDocument()
  })
})
