import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    description: "movil",
    amount: 7500,
    createdAt: 3242334,
    note: "",
    id: "3",
  }
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates : {
      amount
    }
  };
  
  const state = expensesReducer(expenses, action);

  expect(state[0].amount).toEqual(amount);
});

test("should edit an expense with id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    updates: {
      amount: 23,
    },
    id: "-1"
  };
  
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const expensesSet = [expenses[0], expenses[1]];
  const action = {
    type: "SET_EXPENSES",
    expenses: expensesSet,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expensesSet);
});