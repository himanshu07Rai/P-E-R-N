import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./reset.css";
import App from "./App";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
