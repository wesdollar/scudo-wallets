/*eslint-disable*/
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/App";

const html = ReactDOMServer.renderToString(
  <div id="app">
    <App />
  </div>
);

dispatch(html);
