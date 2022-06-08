import React from "react";
import { shallow } from "enzyme";
import HomeButton from "./homeButton";

describe("HomeButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HomeButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
