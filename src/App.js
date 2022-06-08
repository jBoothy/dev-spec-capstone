import React, { useState } from "react";
import Header from './components/header/header';
import LoginForm from './components/Login/Login';
import Home from './components/Home/home';
import About from './components/about/about';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/footer/footer';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Footer/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about/" element={<About/>}></Route>
            <Route path="/login/" element={<LoginForm/>}></Route>
            <Route path="/contact/" element={<ContactPage/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
