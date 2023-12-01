import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import CV from './pages/CV';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router basename="/HRWebsite">
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="cv" element={<CV />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;

