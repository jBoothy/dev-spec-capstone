import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Spinner from "../../Spinner/Spinner";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutBtn = () => {
  const { logout, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Spinner/></div>;
  }

  return (
    <Button className="btn" variant="contained" onClick={() => logout({ returnTo: window.location.origin })}><LogoutIcon/> Log Out </Button>
  );
};

export default LogoutBtn;