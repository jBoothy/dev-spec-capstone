// import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import HomeButton from "../homeButton/homeButton";
// import '../dashboard/dashboard.css';

// class Login extends Component {
//   render() {
//     return <div> <HomeButton/>
//     <div className='mainBody'>
//     <Link className='defaultBtn' to="/login"> Rep Login </Link>
//     <Link className='defaultBtn' to="/contact"> Contact </Link>
//     <Link className='defaultBtn' to="/app"> App Download </Link>
//     </div></div>;
//   }
// }

// export default Login;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';


const LoginButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <div className="parentDiv">
  <img className='logoImage' src="https://cdn.dribbble.com/users/3137340/screenshots/7105510/artboard_12_copy_10-100_4x.jpg" alt='...'/>

  <div className="loginDiv">
  <button className="defaultBtn" onClick={() => loginWithRedirect()}>Log In</button>
  </div>;
  </div>
};

export default LoginButton;