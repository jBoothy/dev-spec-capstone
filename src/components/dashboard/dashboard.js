import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import HomeButton from "../homeButton/homeButton";
import LogoutBtn from "../Logout/Logout";
import './dashboard.css';
import Spinner from "../Spinner/Spinner";

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div><Spinner/></div>;
  }

    return (
    isAuthenticated && (
      <div> 
      <HomeButton/>
      <div className='mainBody'>
      <Link className='defaultBtn' to="/addcustomer"> Add Customer </Link>
      <Link className='defaultBtn' to="/customerList"> Customer List </Link>
      <Link className='defaultBtn' to="/contact"> Contact </Link>
      <Link className='defaultBtn' to="/profile"> Profile </Link>
      <Link className='defaultBtn' to="/app"> App Download </Link>
      <LogoutBtn/>
      </div></div>
    ))
  }

export default Dashboard;
