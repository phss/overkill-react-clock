import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./app";
import { TickingClock, PartOfDayContainer } from './containers'

describe("App", () => {
    xit("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
    });

    it("contains a Clock", () => {
        const component = shallow(<App />);
        expect(component.find(TickingClock).length).toBe(1);
    });

    it("contains a PartOfDay", () => {
        const component = shallow(<App />);
        expect(component.find(PartOfDayContainer).length).toBe(1);
    });
});

