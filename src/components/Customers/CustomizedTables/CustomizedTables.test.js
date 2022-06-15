import React from "react";
import { shallow } from "enzyme";
import CustomizedTables from "./CustomizedTables";

describe("CustomizedTables", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CustomizedTables />);
    expect(wrapper).toMatchSnapshot();
  });
});
