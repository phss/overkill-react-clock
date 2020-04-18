import reducer from './reducers'
import { UpdateClockAction } from './actions'

describe('Reducer', () => {
  it('has initial state', () => {
    expect(reducer(undefined, {} as any).time).toBeDefined()
  })

  it('updates with latest time', () => {
    const state = {
      time: new Date(2017, 12, 31)
    }
    const newTime = new Date()
    const action = {
      type: 'UPDATE_CLOCK',
      time: newTime
    } as UpdateClockAction

    expect(reducer(state, action)).toEqual({
      time: newTime
    })
  })
})
