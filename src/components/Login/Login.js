import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';
import Spinner from "../Spinner/Spinner";


const LoginButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Spinner/></div>;
  }

  return <div className="parentDiv">
  <img className='logoImage' src="https://cdn.dribbble.com/users/3137340/screenshots/7105510/artboard_12_copy_10-100_4x.jpg" alt='...'/>

  <div className="loginDiv">
  <button className="defaultBtn" onClick={() => loginWithRedirect()}>Log In</button>
  </div>;
  </div>
};

export default LoginButton;