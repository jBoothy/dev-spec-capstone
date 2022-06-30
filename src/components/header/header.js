import * as React from "react";
import BackgroundLetterAvatars from "./BackgroundLetterAvatars/BackgroundLetterAvatars";
import './header.css';
import { Link } from 'react-router-dom';
import TemporaryDrawer from '../Drawer/Drawer';
import Typography from "@mui/material/Typography";

const Header=()=> {

  return <div>
    <nav className="nav-content"><Link to="/">
      <Typography variant="h1" className="nav-title">
        JB Designs
      </Typography>
      </Link>
      <TemporaryDrawer/>
      <div className="menu-list">
        <BackgroundLetterAvatars/>
      </div>
    </nav>
    </div>;
}

export default Header;
