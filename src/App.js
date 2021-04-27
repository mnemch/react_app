import React from "react";
import './App.css';
import Form from "./Form";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Wrapper" >
       <Form defaultCity="London"/>
        </div>
        <footer>
          <Footer />
      </footer>
      </div>
    </div>
  );
}
