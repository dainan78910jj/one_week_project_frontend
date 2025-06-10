import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Navigator from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navigator />

      <div className="content">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project" element={<ProjectList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
