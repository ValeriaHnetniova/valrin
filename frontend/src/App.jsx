import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import "./App.css";
import Banner from "./components/Banner/Banner.jsx";
import Slider from "./components/Slider/Slider.jsx";


function App() {

  return (
    <>
    <Router>
       <Header/>
       <Banner/>
       <Slider/>
       <Footer/>
    </Router>
    </>
  )
}

export default App;
