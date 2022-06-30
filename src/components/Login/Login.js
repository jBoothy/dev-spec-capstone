import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';
import Spinner from "../Spinner/Spinner";
import Button from '@mui/material/Button';


const LoginButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Spinner/></div>;
  }

  return <div className="parentDiv">
  

  <div className="loginDiv">
  <Button className="btn" variant="contained" onClick={() => loginWithRedirect()}> Log In </Button>
  </div>;
  </div>
};

export default LoginButton;