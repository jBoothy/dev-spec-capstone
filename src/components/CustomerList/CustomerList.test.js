import React from "react";
import { shallow } from "enzyme";
import CustomerList from "./CustomerList";

describe("CustomerList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomerList />);
    expect(wrapper).toMatchSnapshot();
  });
});
