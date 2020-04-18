import * as React from 'react'
import { Clock } from './Clock'
import { render } from '@testing-library/react'

describe('Clock component', () => {
  it('contains the specified time', () => {
    const date = new Date(2018, 2, 11, 11, 49, 13)
    const { getByText } = render(<Clock time={date} />)

    expect(getByText(date.toLocaleTimeString())).toBeInTheDocument()
  })
})
