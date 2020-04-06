import * as React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import TickingClock from './TickingClock'
import { timeKeeper } from '../reducers/timeKeeper'

describe('TickingClock container', () => {
  it.skip('updates on UPDATE_CLOCK action', () => {
    const testStore = createStore(timeKeeper)
    const date = new Date(2018, 2, 11, 16, 30, 7)
    const component = mount(
      <Provider store={testStore}>
        <TickingClock />
      </Provider>
    )

    testStore.dispatch({
      type: 'UPDATE_CLOCK',
      time: date
    })

    expect(component.text()).toBe(date.toLocaleTimeString())
  })
})
