import * as React from "react";
import BackgroundLetterAvatars from "./BackgroundLetterAvatars/BackgroundLetterAvatars";
import './header.css';
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../Drawer/Drawer';

const Header=()=> {

  return <div>
    <nav className="nav-content"><Link to="/">
      <h1>JB Designs</h1>
      </Link>
      <TemporaryDrawer/>
      <div className="menu-list">
        <BackgroundLetterAvatars/>
      </div>
    </nav>
    </div>;
}

export default Header;
