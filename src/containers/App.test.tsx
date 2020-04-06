import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { App } from './App'
import TickingClock from './TickingClock'
import PartOfDayContainer from './PartOfDayContainer'

describe('App', () => {
  it.skip('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
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
