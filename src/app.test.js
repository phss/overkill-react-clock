import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./app";
import Clock from "./components/clock";

describe("App", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
    });

    it("contains a Clock", () => {
        const component = shallow(<App />);
        expect(component.find(Clock).length).toBe(1);
    });

});

