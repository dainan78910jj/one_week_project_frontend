import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Navigator from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from 'react-bootstrap';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [changeToDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Get the button:
    let scrollBtn = document.getElementById("btn-scroll");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    }
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const changeColorMode = () => {
    document.body.setAttribute("data-bs-theme", changeToDarkMode ? "dark" : "light")
    setDarkMode(!changeToDarkMode);
  }

  return (
    <Fragment>
      <Router>
        <Navigator />

        <Routes>
          <Route path="/" element={<Header changeColorMode={changeColorMode} />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project" element={<ProjectList />} />
        </Routes>
      </Router>

      <Footer />
      <div id={"btn-scroll"}
        className="dropdown position-fixed bottom-0 end-0 me-3 bd-mode-toggle"
        style={{ marginBottom: '80px', display: 'none' }}>
        <Button className="btn btn-info" onClick={scrollToTop} >
          <i className="bi bi-hand-index-thumb"></i>
        </Button>
      </div>
    </Fragment >
  );
}

export default App;
