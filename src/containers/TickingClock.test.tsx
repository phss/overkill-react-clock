import * as React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import TickingClock from "./tickingClock";
import { timeKeeper } from "../reducers/timeKeeper";

describe("TickingClock container", () => {
  xit("updates on UPDATE_CLOCK action", () => {
    let testStore = createStore(timeKeeper);
    const date = new Date(2018, 2, 11, 16, 30, 7);
    const component = mount(
      <Provider store={testStore}>
        <TickingClock />
      </Provider>
    );

    testStore.dispatch({
      type: "UPDATE_CLOCK",
      time: date,
    });

    expect(component.text()).toBe(date.toLocaleTimeString());
  });
});
