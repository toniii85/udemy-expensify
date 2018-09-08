import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; 
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/es";
import "./styles/styles.scss";

const store = configureStore();


store.dispatch(addExpense({ description: "Water bill", amount: 4500, createdAt: 0 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 200, createdAt: 0 }));
store.dispatch(addExpense({ description: "Rent", amount: 614000, createdAt: 0 }));


const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));