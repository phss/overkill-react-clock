import * as React from 'react'
import { TimeDisplay } from './TimeDisplay'
import { render } from '@testing-library/react'

describe('TimeDisplay component', () => {
  it('contains the specified time', () => {
    const date = new Date(2018, 2, 11, 11, 49, 13)
    const { getByText } = render(<TimeDisplay time={date} />)

    expect(getByText('11:49:13')).toBeInTheDocument()
  })
})
