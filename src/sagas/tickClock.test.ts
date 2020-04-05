import { tickClock } from "./tickClock";

describe("Saga", () => {
  xit("tick clock every second", () => {
    const gen = tickClock();

    // @ts-ignore
    expect(gen.next().value.PUT.action.type).toEqual("UPDATE_CLOCK");
    // @ts-ignore
    expect(gen.next().value.DELAY).toEqual(1000);
  });
});
