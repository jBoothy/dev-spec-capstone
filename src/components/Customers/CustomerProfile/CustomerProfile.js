import React from "react";
import FormPropsTextFields from "./FormPropsTextFields/FormPropsTextFields";
import HomeButton from "../../homeButton/homeButton";
import { useAuth0 } from "@auth0/auth0-react";

const CustomerProfile=()=> {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  


    return (isAuthenticated&&(<div> <HomeButton/> <div>
      <FormPropsTextFields/>
    </div>
    </div>))
}


export default CustomerProfile;
