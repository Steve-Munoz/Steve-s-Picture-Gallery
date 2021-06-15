import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom"
import './index.css';
import {ContextProvider} from "./Context"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import App from './App';

ReactDOM.render(

  <ContextProvider>
    <Router>
    <Header/>
      <App />
    <Footer/>
    </Router>
  </ContextProvider>
  ,
  
    
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
