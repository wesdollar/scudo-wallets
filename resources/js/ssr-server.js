/* eslint-disable no-undef */
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./components/App";
import { StaticRouter } from "react-router-dom";
import { routes } from "./constants/routes";
import { getSlug } from "./helpers/getSlug";
import { vectors } from "./mockData/products";
import { app } from "./constants/app";

const { packages, url } = context;

const html = ReactDOMServer.renderToString(
  <div id="app">
    <StaticRouter location={url}>
      <App packages={packages} />
    </StaticRouter>
  </div>
);

/*
GET HEAD DATA FROM URL
get our head data by matching against the URL
 */

let currentRoute;
let title;
let description;
const debug = {};

Object.keys(routes).map(route => {
  if (routes[route].path === url) {
    currentRoute = routes[route];
  }
});

/*
  HANDLE SPECIFIC PRODUCT PAGE
  this can later be expanded to handle any route path params as needed
*/
if (!currentRoute) {
  // the resulting split with an empty string at index 0
  const splitUrl = url.split("/");
  const slugIndex = 2;
  const productSlug = splitUrl[slugIndex];

  const [currentProduct] = vectors.filter(
    product => productSlug === getSlug(product.title)
  );

  // eslint-disable-next-line prefer-destructuring
  title = `${currentProduct.title} | ${app.scudo} Vector Wallets`;
  description = `Learn more about the ${title} by ${app.name}. Lightweight, durable wallets made to hold everything you need.`;
} else {
  /* eslint-disable prefer-destructuring */
  title = currentRoute.metaTitle || currentRoute.title;
  description = currentRoute.description;
  /* eslint-enable */
}

debug.title = title;
debug.description = description;

const headData = {
  title,
  description
};

// eslint-disable-next-line no-undef
dispatch({ html, headData, debug });
