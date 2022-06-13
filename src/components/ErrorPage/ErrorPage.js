import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import HomeButton from "../homeButton/homeButton";

class ErrorPage extends Component {
  render() {
    return <div>
    <HomeButton/>
    <h1>ERROR 404: PAGE DOES NOT EXIST</h1></div>;
  }
}

export default ErrorPage;
