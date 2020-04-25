import { updateFormat } from './actions'

describe('Actions', () => {
  it('return action for UPDATE_FORMAT', () => {
    const action = updateFormat('some-format')

    expect(action).toEqual({
      type: 'UPDATE_FORMAT',
      format: 'some-format'
    })
  })
})
