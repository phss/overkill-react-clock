import { updateFormat, updateTimezone } from './actions'

describe('Actions', () => {
  it('return action for UPDATE_FORMAT', () => {
    const action = updateFormat('h:mm A')

    expect(action).toEqual({
      type: 'UPDATE_FORMAT',
      format: 'h:mm A'
    })
  })

  it('return action for UPDATE_TIMEZONE', () => {
    const action = updateTimezone('some-timezone')

    expect(action).toEqual({
      type: 'UPDATE_TIMEZONE',
      timezone: 'some-timezone'
    })
  })
})
