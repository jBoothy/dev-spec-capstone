import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Spinner from "./components/Spinner/Spinner";
import { useAuth0 } from '@auth0/auth0-react';

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
    <Footer/>
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
    </Router>
    </div>
    )
  } else{
    return <div className="parentDiv">
    <Header/>
    <img className='logoImage' src="https://cdn.dribbble.com/users/3137340/screenshots/7105510/artboard_12_copy_10-100_4x.jpg" alt='...'/>
  
    <div className="loginDiv">
    <button className="defaultBtn" onClick={() => loginWithRedirect()}>Log In</button>
    </div>;
    <Footer/>
    </div>
  }

  // return (
  //   <div className="App">
  //   <Router>
  //   <Header/>
  //   <Footer/>
  //   <div>
  //     <Routes>
  //       <Route path="/" element={<Login/>}/>
  //       <Route path="/signup" element={<Signup/>}/>
  //       <Route path="/dashboard" element={<Dashboard/>}/>
  //       <Route path="/profile" element={<Profile/>}/>
  //       <Route path="*" element={<ErrorPage/>}/>
  //     </Routes>
  //   </div>
  //   </Router>
  //   </div>
  // );
}

export default App;
