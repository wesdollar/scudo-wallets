import React from "react";
import ReactDOM from "react-dom";

export const App = () => (
  <div>
    <h1>Hello World!</h1>
    <p>I&apos;m React. Broseph - through me!</p>
  </div>
);

// eslint-disable-next-line no-undef
if (document.getElementById("app")) {
  // eslint-disable-next-line no-undef
  ReactDOM.render(<App />, document.getElementById("app"));
}
