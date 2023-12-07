import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const NavBarDropDown = (props) => {
    const navigate = useNavigate();
  
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isCVPage = location.pathname === '/cv';
    const isAboutMePage = location.pathname === '/aboutme';
    const isProjectsPage = location.pathname === '/projects';
    const isContactsPage = location.pathname === '/contact';
  
    return (
        <>
            <button
                id="dropdownMenuIconHorizontalButton"
                data-dropdown-toggle="dropdownDotsHorizontal"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
            >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
            </button>

            <div id="dropdownDotsHorizontal" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                    <Link
                        to="/"                   
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={(event) => {
                          event.preventDefault();
                          if (!isHomePage) {
                            navigate('/');
                            props.setPageName('Home')
                          }
                        }}
                        style={{ 
                          cursor: isHomePage ? 'default' : 'pointer',
                          color: isHomePage ? '#000080' : undefined,
                          pointerEvents: isHomePage ? 'none' : 'auto',}}
                          >
                            Home
                    </Link>
                    </li>
                    <li>
                    <Link
                        to='/cv'
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={(event) => {
                          event.preventDefault();
                          if (!isCVPage) {
                            navigate('/cv');
                            props.setPageName('CV')
                          }
                        }}
                        style={{ 
                          cursor: isCVPage ? 'default' : 'pointer',
                          color: isCVPage ? '#000080' : undefined,
                          pointerEvents: isCVPage ? 'none' : 'auto',}}
                          >
                            CV
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="/aboutme"                   
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={(event) => {
                          event.preventDefault();
                          if (!isAboutMePage) {
                            navigate('/aboutme');
                            props.setPageName('About Me')
                          }
                        }}
                        style={{ 
                          cursor: isAboutMePage ? 'default' : 'pointer',
                          color: isAboutMePage ? '#000080' : undefined,
                          pointerEvents: isAboutMePage ? 'none' : 'auto',}}
                          >
                            About Me
                    </Link>
                    </li>
                    <li>
                    <Link
                        to="/projects"                   
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={(event) => {
                          event.preventDefault();
                          if (!isProjectsPage) {
                            navigate('/projects');
                            props.setPageName('Projects')
                          }
                        }}
                        style={{ 
                          cursor: isProjectsPage ? 'default' : 'pointer',
                          color: isProjectsPage ? '#000080' : undefined,
                          pointerEvents: isProjectsPage ? 'none' : 'auto',}}
                          >
                            Projects
                    </Link>
                    </li>
                </ul>
                <div className="py-2">
                    <Link
                        to="/contact"                   
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={(event) => {
                          event.preventDefault();
                          if (!isContactsPage) {
                            navigate('/contact');
                            props.setPageName('Contact Me')
                          }
                        }}
                        style={{ 
                          cursor: isContactsPage ? 'default' : 'pointer',
                          color: isContactsPage ? '#000080' : undefined,
                          pointerEvents: isContactsPage ? 'none' : 'auto',}}
                          >
                            Contact Me
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavBarDropDown;