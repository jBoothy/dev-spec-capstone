import React, { Component } from "react";
import HomeButton from "../homeButton/homeButton";
import './ErrorPage.css';

class ErrorPage extends Component {
  render() {
    return <div>
    <HomeButton/>
    <div className="mainBody">
    <h1 className="errorMessage">Sorry, this page doesn't seem to exist. Click the logo to return to the dashboard.</h1>
    </div>
    </div>;
  }
}

export default ErrorPage;
