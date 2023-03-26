// import logo from './logo.svg';
import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Routes, Route} from "react-router-dom";
import About from "./Components/About";
import Service from "./Components/Service";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import Body from "./Components/Body";


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/service" element={<Service/>} />
        <Route exact path="/signin" element={<SignIn/>} />
      </Routes>
    </>
  );
}

export default App;
