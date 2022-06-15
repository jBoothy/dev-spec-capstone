import React from "react";
import { shallow } from "enzyme";
import CustomerProfile from "./CustomerProfile";

describe("CustomerProfile", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomerProfile />);
    expect(wrapper).toMatchSnapshot();
  });
});
