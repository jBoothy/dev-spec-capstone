import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Header from "./components/header/header";
import HeaderLogin from "./components/HeaderLogin/header";
import Dashboard from "./components/Dashboard/dashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Dashboard/Profile/Profile";
import Contact from "./components/Dashboard/Contact/Contact";
import AddCustomer from "./components/Customers/AddCustomer/AddCustomer";
import CustomerList from "./components/Customers/CustomerList";
import CustomerProfile from "./components/Customers/CustomerProfile/CustomerProfile";
import AddRep from "./components/reps/AddRep/AddRep";
import RepList from "./components/reps/RepList/RepList";
import EditRep from "./components/reps/EditRep/EditRep";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Spinner from "./components/Spinner/Spinner";
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Button from '@mui/material/Button';


function App() {
  const { isLoading, isAuthenticated, error, loginWithRedirect } = useAuth0();
  if(isLoading){
    return <div><Spinner/></div>
  }
  if(error){
    return <div>Oops... {error.message}</div>
  }

  if(isAuthenticated){
    return (
      <div className="App">
    <Router>
    <Header/>
      <Breadcrumbs/>
    <div>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/addcustomer" element={<AddCustomer/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/customerlist" element={<CustomerList/>}/>
        <Route path="/customerprofile/:id" element={<CustomerProfile/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/addrep" element={<AddRep/>}/>
        <Route path="/repList" element={<RepList/>}/>
        <Route path="/editrep/:id" element={<EditRep/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>

    </Router>
    </div>
    )
  } else{
    return <div className="parentDiv">
    <HeaderLogin/>
  
    <div className="loginDiv">
    <Button className="btn" variant="contained" onClick={() => loginWithRedirect()}> Log In </Button>
    </div>;
    </div>
  }
}

export default App;
