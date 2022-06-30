import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../../Spinner/Spinner";
import ValidationTextFields from "./ValidationTextFields/ValidationTextFields";
import './AddCustomer.css';

const AddCustomer=()=> {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Spinner/></div>;
  }


    return (isAuthenticated &&(<div>
    <div className="mainBody">
    <ValidationTextFields/>
    </div>
    </div>));
  }


export default AddCustomer;
