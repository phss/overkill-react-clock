import * as React from 'react'
import { Configuration } from './Configuration'
import { render } from '@testing-library/react'

describe('Configuration component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Configuration />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders format selector', () => {
    const { getByText } = render(<Configuration />)

    expect(getByText('HH:mm:ss')).toBeInTheDocument()
    expect(getByText('hh:mm:ss A')).toBeInTheDocument()
    expect(getByText('HH:mm')).toBeInTheDocument()
    expect(getByText('hh:mm A')).toBeInTheDocument()
  })
})
