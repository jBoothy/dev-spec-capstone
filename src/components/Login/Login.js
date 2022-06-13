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

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;