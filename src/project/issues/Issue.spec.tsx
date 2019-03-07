import React from "react";
import { shallow } from "enzyme";
import Issue from "./Issue";
import { elementFromWrapper } from "testUtils/ElementUtils";

it('should have a title text input', () => {
    const wrapper = shallow(<Issue/>);
    expect(elementFromWrapper(wrapper, "title-input").length).toBe(1);
});