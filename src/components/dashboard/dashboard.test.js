import React from "react";
import { shallow } from "enzyme";
import MainBody from "./mainBody";

describe("MainBody", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MainBody />);
    expect(wrapper).toMatchSnapshot();
  });
});
