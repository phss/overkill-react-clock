import * as React from 'react'
import { Configuration } from './Configuration'
import { render } from '@testing-library/react'

describe('Configuration component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Configuration />)

    expect(asFragment()).toMatchSnapshot()
  })
})
