import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../homeButton/homeButton.css'

const LogoutBtn = () => {
  const { logout } = useAuth0();

  return (
    <button className="defaultBtn" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutBtn;