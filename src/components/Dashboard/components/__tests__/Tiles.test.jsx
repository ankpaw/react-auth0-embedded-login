import React from "react";
import { shallow } from "enzyme";
import Tiles from "../Tiles";

describe("Dashboard tests", () => {
  it("renders without crashing", () => {
    shallow(<Tiles />);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<Tiles />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
