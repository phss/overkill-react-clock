import reducer from './reducers'

describe('Reducer', () => {
  it('has initial state', () => {
    const initialState = reducer(undefined, {} as any)

    expect(initialState.format).toEqual('HH:mm:ss')
  })
})
