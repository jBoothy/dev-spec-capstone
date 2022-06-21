import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../../homeButton/homeButton";
import Spinner from "../../Spinner/Spinner";
import { useAuth0 } from "@auth0/auth0-react";
import './Contact.css';

const Contact=()=> {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Spinner/></div>;
  }


    return ( isAuthenticated && (
    <div className="mainBody"><HomeButton/>
      <div className="contactBody">
        <h1> Contact </h1>
        <p>
          If there are any questions or concerns please reach out to the appropriate department: 
        </p>
      <div className="links">
        <Link className='defaultBtn' to="/errorpage"> HR </Link>
        <Link className='defaultBtn' to="/errorpage"> Payroll </Link>
        <Link className='defaultBtn' to="/errorpage"> IT </Link>
      </div>

      </div>
    </div>
    ))
  }


export default Contact;
