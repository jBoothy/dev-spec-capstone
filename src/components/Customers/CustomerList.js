import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../Spinner/Spinner";
import CustomizedTables from './CustomizedTables/CustomizedTables';
import './CustomerList.css';

const CustomerList=()=> {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Spinner/></div>;
  }

    return (isAuthenticated &&(<div>
    <div className="mainBody">
    <CustomizedTables/>
    </div>
    </div>))
  }


export default CustomerList;
