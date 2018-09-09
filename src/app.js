import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; 
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import numeralLocale from "./config/numeral-locale";
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/es";
import "./styles/styles.scss";

numeralLocale();
const store = configureStore();

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));