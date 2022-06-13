import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './homeButton.css';

class HomeButton extends Component {
  render() {
    return <div className="nav-logo">
            <Link to="/dashboard">
            <img className='logoImage' src="https://cdn.dribbble.com/users/3137340/screenshots/7105510/artboard_12_copy_10-100_4x.jpg" alt='...'/>
            </Link>
            </div> 
  }
}

export default HomeButton;
