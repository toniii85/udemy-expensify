import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";
import numeralLocale from "../../config/numeral-locale";

numeralLocale();
test("should render a list item", () => {
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseListItem {...expense} />)
  expect(wrapper).toMatchSnapshot();
});