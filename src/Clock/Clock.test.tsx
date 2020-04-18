import * as React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Clock } from './Clock'
import reducer from './reducers'

describe('Clock component', () => {
  it('renders clock', () => {
    const date = new Date(2018, 2, 11, 11, 49, 13)
    const testStore = createStore(reducer, { time: date })
    const { getByText } = render(
      <Provider store={testStore}>
        <Clock />
      </Provider>
    )

    expect(getByText(date.toLocaleTimeString())).toBeInTheDocument()
    expect(getByText('It is morning')).toBeInTheDocument()
  })

  it('renders on UPDATE_CLOCK action', () => {
    const testStore = createStore(reducer)
    const { getByText } = render(
      <Provider store={testStore}>
        <Clock />
      </Provider>
    )
    const newDate = new Date(2018, 2, 11, 16, 30, 7)

    testStore.dispatch({
      type: 'UPDATE_CLOCK',
      time: newDate
    })

    expect(getByText(newDate.toLocaleTimeString())).toBeInTheDocument()
    expect(getByText('It is afternoon')).toBeInTheDocument()
  })
})
