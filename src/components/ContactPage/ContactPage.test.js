import React from "react";
import { shallow } from "enzyme";
import ContactPage from "./ContactPage";

describe("ContactPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ContactPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
