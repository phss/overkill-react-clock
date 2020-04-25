import * as React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Clock } from './Clock'
import reducer from './reducers'
import configurationReducer from '../Configuration/reducers'
import { updateClock } from './actions'

describe('Clock component', () => {
  it('renders clock', () => {
    const date = new Date(2018, 2, 11, 11, 49, 13)
    const testStore = createStore(
      combineReducers({
        clock: reducer,
        configuration: configurationReducer
      }),
      {
        clock: { time: date },
        configuration: { format: 'HH:mm:ss', timezone: 'America/New_York' }
      }
    )
    const { asFragment } = render(
      <Provider store={testStore}>
        <Clock />
      </Provider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders on UPDATE_CLOCK action', () => {
    const testStore = createStore(
      combineReducers({
        clock: reducer,
        configuration: configurationReducer
      }),
      { configuration: { format: 'h:mm:ss A', timezone: 'Zulu' } }
    )
    const { getByText } = render(
      <Provider store={testStore}>
        <Clock />
      </Provider>
    )
    const newDate = new Date(2018, 2, 11, 16, 30, 7)

    testStore.dispatch(updateClock(newDate))

    expect(getByText('4:30:07 PM')).toBeInTheDocument()
    expect(getByText('It is afternoon')).toBeInTheDocument()
  })
})
