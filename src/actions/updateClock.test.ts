import { updateClock } from "./updateClock";

describe("Actions", () => {
  it("return action for UPDATE_CLOCK", () => {
    const newTime = new Date();
    const action = updateClock(newTime);

    expect(action).toEqual({
      type: "UPDATE_CLOCK",
      time: newTime,
    });
  });
});
