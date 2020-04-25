import reducer from './reducers'
import { UpdateFormatAction } from './actions'

describe('Reducer', () => {
  it('has initial state', () => {
    const initialState = reducer(undefined, {} as any)

    expect(initialState.format).toEqual('HH:mm:ss')
  })

  it('updates with new format', () => {
    const state = {
      format: 'HH:mm:ss'
    }
    const newFormat = 'hh:mm A'
    const action = {
      type: 'UPDATE_FORMAT',
      format: newFormat
    } as UpdateFormatAction

    expect(reducer(state, action)).toEqual({
      format: newFormat
    })
  })
})
