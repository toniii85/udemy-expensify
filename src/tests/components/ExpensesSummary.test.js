import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import numeralLocale from "../../config/numeral-locale";

numeralLocale();

test("should correctly render expeneses summary with 1 expense", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);

  expect(wrapper).toMatchSnapshot();
});

test("should correctly render expeneses summary with multiple expense", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={3243222} />);
  expect(wrapper).toMatchSnapshot();
});