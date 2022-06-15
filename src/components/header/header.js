import * as React from "react";
import BackgroundLetterAvatars from "./BackgroundLetterAvatars/BackgroundLetterAvatars";
import './header.css';

const Header=()=> {

  return <div>
    <nav className="nav-content">
      <h1>JB Designs</h1>
      <div className="menu-list">
        <BackgroundLetterAvatars/>
      </div>
    </nav>
    </div>;
}

export default Header;
