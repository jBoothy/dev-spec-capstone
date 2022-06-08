import React from "react";
import { shallow } from "enzyme";
import ErrorPage from "./ErrorPage";

describe("ErrorPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ErrorPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
