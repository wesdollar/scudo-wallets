/*eslint-disable*/
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/App";
import { StaticRouter } from "react-router-dom";

const { packages } = context;

const html = ReactDOMServer.renderToString(
  <div id="app">
    <StaticRouter location={context.url}>
      <App packages={packages} />
    </StaticRouter>
  </div>
);

dispatch(html);
