import React from "react";
import { shallow } from "enzyme";
import Profile, { EmailVerifiedBadge, LogoutButton } from "../Profile";

describe("Profile tests", () => {
  const props = {
    email: "test email",
    name: "name",
    picture: "mockURL",
    verified: true,
  };
  it("renders without crashing", () => {
    shallow(<Profile {...props} />);
  });

  it("renders image with passed in props", () => {
    const wrapper = shallow(<Profile {...props} />);
    const image = wrapper.find("img");
    expect(image.prop("src")).toEqual(props.picture);
  });

  it("renders media-heading with passed in props", () => {
    const wrapper = shallow(<Profile {...props} />);
    const heading = wrapper.find(".media-heading");
    expect(heading.text()).toContain(`${props.name} USA`);
  });

  it("renders Email Verified Badge with passed in props", () => {
    const wrapper = shallow(<Profile {...props} />);
    const emailVerifiedBadge = wrapper.find(EmailVerifiedBadge);
    expect(emailVerifiedBadge.length).not.toBe(0);
    expect(emailVerifiedBadge.prop("verified")).toEqual(props.verified);
  });

  it("renders Logout Button with passed in props", () => {
    const wrapper = shallow(<Profile {...props} />);
    const logoutBtn = wrapper.find(LogoutButton);
    expect(logoutBtn.length).not.toBe(0);
  });

  it("should match snapshot", () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});

describe("EmailVerifiedBadge tests", () => {
    it("should return null if verified flag is false", ()=>{
        const wrapper = shallow(<EmailVerifiedBadge verified={false} />);
        expect(wrapper.isEmptyRender()).toBe(true);
    })

    it("should return verified badge if verified flag is true", ()=>{
        const wrapper = shallow(<EmailVerifiedBadge verified={true} />);
        expect(wrapper.isEmptyRender()).toBe(false);
    })
});
