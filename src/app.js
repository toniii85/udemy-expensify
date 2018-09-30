import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import numeralLocale from "./config/numeral-locale";
import { startSetExpenses } from "./actions/expenses";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/es";
import "./styles/styles.scss";
import "./firebase/firebase";

numeralLocale();
const store = configureStore();

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});