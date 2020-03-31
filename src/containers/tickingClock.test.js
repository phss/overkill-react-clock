import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import TickingClock from "./tickingClock";
import { timeKeeper } from "../reducers";

describe("TickingClock container", () => {
  it("updates on UPDATE_CLOCK action", () => {
    let testStore = createStore(timeKeeper);
    const component = mount(
      <Provider store={testStore}>
        <TickingClock />
      </Provider>
    );

    testStore.dispatch({
      type: "UPDATE_CLOCK",
      time: new Date(2018, 2, 11, 16, 30, 7),
    });

    expect(component.text()).toBe("16:30:07");
  });
});
