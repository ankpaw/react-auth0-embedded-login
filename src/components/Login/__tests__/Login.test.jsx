import React from "react";
import { shallow } from "enzyme";
import Login, { LoginButton } from "../Login";

describe("Login tests", () => {
  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it("renders Login Button", () => {
    const wrapper = shallow(<Login />);
    const loginBtn = wrapper.find(LoginButton);
    expect(loginBtn.length).not.toBe(0);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
