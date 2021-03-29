import React from "react";
import './App.css';

import Form from "./Form";
import Footer from "./Footer";
import City from "./City";

//bootstrap 
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Navbar from 'react-bootstrap/Navbar'


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <div className="Wrapper">
          <div className="weatherCard" >
            <City />
            </div>
             </div>
             <Footer />
    </div>
    </div>
  );
}

