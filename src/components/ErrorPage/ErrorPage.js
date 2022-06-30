import React, { Component } from "react";
import './ErrorPage.css';

class ErrorPage extends Component {
  render() {
    return <div>
    <div className="mainBody">
    <h1 className="errorMessage">Sorry, this page doesn't seem to exist.</h1>
    </div>
    </div>;
  }
}

export default ErrorPage;
