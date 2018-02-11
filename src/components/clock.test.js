import React from "react";
import { shallow } from "enzyme";
import Clock from "./clock";

describe("Clock component", () => {
  it("contains the specified time", () => {
    const component = shallow(<Clock time={new Date(2018, 2, 11, 11, 49, 13)}/>);
    expect(component.text()).toBe('11:49:13');
  });
});
