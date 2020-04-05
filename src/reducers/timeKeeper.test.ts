import { timeKeeper } from "./timeKeeper";
import { UpdateClockAction } from "../actions/updateClock";

describe("Reducers", () => {
  it("has initial state", () => {
    expect(timeKeeper(undefined, {} as any).time).toBeDefined();
  });

  it("updates with latest time", () => {
    const state = {
      time: new Date(2017, 12, 31),
    };
    const newTime = new Date();
    const action = {
      type: "UPDATE_CLOCK",
      time: newTime,
    } as UpdateClockAction;

    expect(timeKeeper(state, action)).toEqual({
      time: newTime,
    });
  });
});
