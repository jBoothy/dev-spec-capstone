import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import HomeButton from "../homeButton/homeButton";
import './Profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
      <HomeButton/>
      <div className="profileDiv">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      </div>
    )
  );
};

export default Profile;