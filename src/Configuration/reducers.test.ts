import reducer from './reducers'
import { UpdateFormatAction, UpdateTimezoneAction } from './actions'
import { ConfigurationState } from './types'

describe('Reducer', () => {
  it('has initial state', () => {
    const initialState = reducer(undefined, {} as any)

    expect(initialState.format).toEqual('HH:mm:ss')
  })

  it('updates with new format', () => {
    const state = {
      format: 'HH:mm:ss',
      timezone: 'Some timezone'
    } as ConfigurationState
    const newFormat = 'h:mm A'
    const action = {
      type: 'UPDATE_FORMAT',
      format: newFormat
    } as UpdateFormatAction

    expect(reducer(state, action).format).toEqual(newFormat)
  })

  it('updates with new timezone', () => {
    const state = {
      format: 'HH:mm:ss',
      timezone: 'Initial'
    } as ConfigurationState
    const newTimezone = 'New'
    const action = {
      type: 'UPDATE_TIMEZONE',
      timezone: newTimezone
    } as UpdateTimezoneAction

    expect(reducer(state, action).timezone).toEqual(newTimezone)
  })
})
