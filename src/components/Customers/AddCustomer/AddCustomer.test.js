import React from "react";
import { shallow } from "enzyme";
import AddCustomer from "./AddCustomer";

describe("AddCustomer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddCustomer />);
    expect(wrapper).toMatchSnapshot();
  });
});
