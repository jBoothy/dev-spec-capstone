import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

// const express = require('express');
// const app = express();

// app.listen(5151, ()=>{
//   console.log('Server running on port: 5151')
// })


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Auth0Provider
    domain="dev-1vjn1oyg.us.auth0.com"
    clientId="2kE9uNoW4V1gg19CsN8Nb7iwA7LtgM9l"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
