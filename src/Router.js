import React, { Component } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/dashboard/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ErrorPage from './components/ErrorPage/ErrorPage';

class Routers extends Component {
    render(){
        return(
            <Router>
                <Header/>
                <Footer/>
                <div>
                    <Routes>
                        <Route exact path='/' element={<Login/>}/>
                        <Route path='/dashboard/:id' element={<Dashboard/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default Routers