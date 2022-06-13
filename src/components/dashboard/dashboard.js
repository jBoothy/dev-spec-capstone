import React, { Component } from "react";
import { Link } from 'react-router-dom';
import HomeButton from "../homeButton/homeButton";
import './dashboard.css';

class Dashboard extends Component {
  render() {
    return <div> <HomeButton/>
    <div className='mainBody'>
    <Link className='defaultBtn' to="/addNewCustomer"> Add New Customer </Link>
    <Link className='defaultBtn' to="/customerList"> Customer List </Link>
    <Link className='defaultBtn' to="/contact"> Contact </Link>
    <Link className='defaultBtn' to="/app"> App Download </Link>
    </div></div>;
  }
}

export default Dashboard;
