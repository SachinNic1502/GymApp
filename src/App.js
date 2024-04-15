import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import FAQs from "./pages/FAQs";
import Trainers from "./pages/Trainers";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Plans from "./pages/Plan";
import Form from "./components/Form";
import './App.css'

export default function App() {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/contact" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}
