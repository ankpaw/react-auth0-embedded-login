import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../Dashboard";

describe("Dashboard tests", () => {
  it("renders without crashing", () => {
    let mockToken = {
      accessToken: "test token",
    };
    global.localStorage.setItem("token", JSON.stringify(mockToken));
    shallow(<Dashboard />);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
