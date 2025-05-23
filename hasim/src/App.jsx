import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";



import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <Router>
      <div className=" ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
