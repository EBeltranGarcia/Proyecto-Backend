//stylesheet
import './index.css';
//module packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Components/router';
//components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);



