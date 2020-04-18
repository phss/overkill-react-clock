import type { UpdateClockAction } from './actions'
import { Time } from './types'

const initialState = {
  time: new Date()
}

export const timeKeeper = (
  state: Time = initialState,
  { type, time }: UpdateClockAction
): Time => {
  switch (type) {
    case 'UPDATE_CLOCK':
      return { time }
    default:
      return state
  }
}

export default timeKeeper
