import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../../homeButton/homeButton.css'

const LogoutBtn = () => {
  const { logout, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <button className="defaultBtn" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutBtn;