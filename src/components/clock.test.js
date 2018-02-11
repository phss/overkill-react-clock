import React from "react";
import { shallow } from "enzyme";
import Clock from "./clock";

describe("Clock component", () => {
  const component = shallow(<Clock time={new Date(2018, 2, 11, 11, 49, 13)}/>);

  it("contains a hello world", () => {
    expect(component.find('h1').text()).toBe('Hello, world!');
  });

  it("contains the specified time", () => {
    expect(component.find('h2').text()).toBe('It is 11:49:13.');
  });
});
