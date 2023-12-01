import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const navigate = useNavigate();

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    const urlTo = (path) => {
        navigate(path);
    };

    return (
        <div className="navbarcontainer">
            <button
                className={`navbutton ${activeSection === 'home' ? 'active' : ''}`}
                data-cy="Home"
                onClick={() => {
                    handleSectionClick('home');
                    urlTo('/');
                }}
                disabled={activeSection === 'home'}
            >
            Home
            </button>
        <p> | </p>
            <button
                className={`navbutton ${activeSection === 'cv' ? 'active' : ''}`}
                data-cy="CV"
                onClick={() => {
                    handleSectionClick('cv');
                    urlTo('/cv');
                }}
                disabled={activeSection === 'cv'}
            >
            CV
            </button>
        <p> | </p>
            <button
                className={`navbutton ${activeSection === 'aboutme' ? 'active' : ''}`}
                data-cy="AboutMe"
                onClick={() => {
                    handleSectionClick('aboutme');
                    urlTo('/aboutme');
                }}
                disabled={activeSection === 'aboutme'}
            >
            About Me
            </button>
        <p> | </p>
            <button
                className={`navbutton ${activeSection === 'projects' ? 'active' : ''}`}
                data-cy="Projects"
                onClick={() => {
                    handleSectionClick('projects');
                    urlTo('/projects');
                }}
                disabled={activeSection === 'projects'}
            >
            Projects
            </button>
        </div>
        );
    };

export default NavBar;