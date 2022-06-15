import React from "react";
import { shallow } from "enzyme";
import BackgroundLetterAvatars from "./BackgroundLetterAvatars";

describe("BackgroundLetterAvatars", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<BackgroundLetterAvatars />);
    expect(wrapper).toMatchSnapshot();
  });
});
