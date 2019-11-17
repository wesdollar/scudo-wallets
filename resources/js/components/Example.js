import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Example extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">Example Component</div>
              <div className="card-body">I&apos;m an example component!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
if (document.getElementById("example")) {
  // eslint-disable-next-line no-undef
  ReactDOM.render(<Example />, document.getElementById("example"));
}
