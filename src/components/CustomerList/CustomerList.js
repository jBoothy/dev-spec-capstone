import React, { Component } from "react";
import HomeButton from "../homeButton/homeButton";
import './CustomerList.css';

class CustomerList extends Component {
  render() {
    return <div><HomeButton/>
    <div className="mainBody">
    Under Maintainance
    </div>
    </div>;
  }
}

export default CustomerList;
