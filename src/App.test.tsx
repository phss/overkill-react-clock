import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { App } from './App'
import clockReducer from './Clock/reducers'

describe('App', () => {
  const testStore = createStore(clockReducer)

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={testStore}>
        <App></App>
      </Provider>,
      div
    )
    expect(div.textContent).toContain('Overkill React Clock')
  })
})
