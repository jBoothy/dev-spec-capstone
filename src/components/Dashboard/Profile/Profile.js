import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './Profile.css';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (<div className="parent">
        <div className="child">
          <div className="profileDiv">
            <img className="profilePicture" src={user.picture} alt={user.name} />
            <h2 className="profileName">{user.name}</h2>
            <p className="profileEmail">{user.email}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;