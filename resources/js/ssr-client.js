import App from "./components/App";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line no-undef
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
