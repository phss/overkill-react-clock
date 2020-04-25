import * as React from 'react'
import configureStore from 'redux-mock-store'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Configuration } from './Configuration'

describe('Configuration component', () => {
  const mockStore = configureStore([])({})
  const renderComponent = () =>
    render(
      <Provider store={mockStore}>
        <Configuration />
      </Provider>
    )

  it('matches snapshot', () => {
    const { asFragment } = renderComponent()

    expect(asFragment()).toMatchSnapshot()
  })

  describe('format', () => {
    it('renders format selector', () => {
      const { getByText } = renderComponent()

      expect(getByText('HH:mm:ss')).toBeInTheDocument()
      expect(getByText('h:mm:ss A')).toBeInTheDocument()
      expect(getByText('HH:mm')).toBeInTheDocument()
      expect(getByText('h:mm A')).toBeInTheDocument()
    })

    it('dispatches action when selecting format', () => {
      const { getByLabelText } = renderComponent()

      fireEvent.change(getByLabelText('Format'), {
        target: {
          value: 'HH:mm'
        }
      })

      expect(mockStore.getActions()).toEqual([
        {
          type: 'UPDATE_FORMAT',
          format: 'HH:mm'
        }
      ])
    })
  })

  describe('timezone', () => {
    it('renders timezone selector', () => {
      const { getByText } = renderComponent()

      expect(getByText('America/Los_Angeles')).toBeInTheDocument()
      expect(getByText('Zulu')).toBeInTheDocument()
    })
  })
})
