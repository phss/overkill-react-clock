import type { UpdateClockAction } from '../actions/updateClock'

export interface TimeState {
  time: Date
}

const initialState = {
  time: new Date()
}

export const timeKeeper = (
  state: TimeState = initialState,
  { type, time }: UpdateClockAction
): TimeState => {
  switch (type) {
    case 'UPDATE_CLOCK':
      return { time }
    default:
      return state
  }
}
