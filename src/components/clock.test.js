import React from "react";
import { shallow } from "enzyme";
import Clock from "./clock";

describe("Clock component", () => {
  it("contains the specified time", () => {
    const date = new Date(2018, 2, 11, 11, 49, 13);
    const component = shallow(<Clock time={date} />);
    expect(component.text()).toBe(date.toLocaleTimeString());
  });
});
