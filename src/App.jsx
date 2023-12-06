import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import CV from './pages/CV';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TailwindNavBar from './components/NavBar/TailwindNavBar.jsx';

function App() {
  return (
    <>
      <Router>
        <TailwindNavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="cv" element={<CV />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;

