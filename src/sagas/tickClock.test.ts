import { tickClock } from "./tickClock";

describe("Saga", () => {
  xit("tick clock every second", () => {
    const gen = tickClock();

    expect(gen.next().value.PUT.action.type).toEqual("UPDATE_CLOCK");
    expect(gen.next().value.DELAY).toEqual(1000);
  });
});
