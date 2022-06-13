import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Dashboard from "./components/dashboard/dashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  

  return (
    <div className="App">
    <Router>
    <Header/>
    <Footer/>
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
