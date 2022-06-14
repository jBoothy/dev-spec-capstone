import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import HomeButton from "../homeButton/homeButton";
import './ErrorPage.css';

class ErrorPage extends Component {
  render() {
    return <div>
    <HomeButton/>
    <div className="mainBody">
    <h1>Sorry, this page doesn't seem to exist. Click the logo to return to the dashboard.</h1>
    </div>
    </div>;
  }
}

export default ErrorPage;
