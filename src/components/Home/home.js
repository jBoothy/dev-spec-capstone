import React, { Component } from "react";
import { Link } from 'react-router-dom';
import HomeButton from "../homeButton/homeButton";
import './home.css';

class Home extends Component {
  render() {
    return <div> <HomeButton/><div className='mainBody'>
    <Link className='defaultBtn' to="/about"> About </Link>
    <Link className='defaultBtn' to="/login/"> Rep Login </Link>
    <Link className='defaultBtn' to="/contact/"> Contact </Link>
    </div></div>;
  }
}

export default Home;
