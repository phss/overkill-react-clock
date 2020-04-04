// @flow
import type { UpdateClockAction } from "./actions";

export type State = {
  time: Date;
};

const initialState = {
  time: new Date(),
};

export const timeKeeper = (
  state: State = initialState,
  { type, time }: UpdateClockAction
): State => {
  switch (type) {
    case "UPDATE_CLOCK":
      return { time };
    default:
      return state;
  }
};
