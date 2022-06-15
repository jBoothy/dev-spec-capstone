import React from "react";
import { shallow } from "enzyme";
import FormPropsTextFields from "./FormPropsTextFields";

describe("FormPropsTextFields", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormPropsTextFields />);
    expect(wrapper).toMatchSnapshot();
  });
});
