import React from "react";
import { shallow } from "enzyme";
import ValidationTextFields from "./ValidationTextFields";

describe("ValidationTextFields", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ValidationTextFields />);
    expect(wrapper).toMatchSnapshot();
  });
});
