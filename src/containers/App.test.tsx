import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { shallow } from 'enzyme'
import { App } from './App'
import TickingClock from './TickingClock'
import PartOfDayContainer from './PartOfDayContainer'
import { timeKeeper } from '../reducers/timeKeeper'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const testStore = createStore(timeKeeper)
    ReactDOM.render(
      <Provider store={testStore}>
        <App></App>
      </Provider>,
      div
    )
    expect(div.textContent).toContain('Overkill React Clock')
  })

  it('contains a Clock', () => {
    const component = shallow(<App />)
    expect(component.find(TickingClock).length).toBe(1)
  })

  it('contains a PartOfDay', () => {
    const component = shallow(<App />)
    expect(component.find(PartOfDayContainer).length).toBe(1)
  })
})
