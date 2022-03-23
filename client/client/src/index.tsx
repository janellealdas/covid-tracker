import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import Store from "./redux/Store";

// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = "https://react-express-covid-app.herokuapp.com";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
