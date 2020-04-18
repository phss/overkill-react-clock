import * as React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Clock } from './Clock'
import reducer from './reducers'

describe('Clock component', () => {
  const testStore = createStore(reducer)

  it('updates on UPDATE_CLOCK action', () => {
    const { getByText } = render(
      <Provider store={testStore}>
        <Clock />
      </Provider>
    )
    const date = new Date(2018, 2, 11, 16, 30, 7)

    testStore.dispatch({
      type: 'UPDATE_CLOCK',
      time: date
    })

    expect(getByText(date.toLocaleTimeString())).toBeInTheDocument()
    expect(getByText('It is afternoon')).toBeInTheDocument()
  })
})
