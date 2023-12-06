import HRPic from "../../assets/HR.png"
import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const TailwindNavBar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isCVPage = location.pathname === '/cv';
  const isAboutMePage = location.pathname === '/aboutme';
  const isProjectsPage = location.pathname === '/projects';
  const isContactsPage = location.pathname === '/contact';

    return (
        <>
<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
  <nav className="relative max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
    <div className="flex items-center justify-between">
      <Link to="/" className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Icon">
        <img className="HRPic w-11 h-12" src={HRPic} alt="Picture of Harry Rhodes"></img></Link>
    </div>
    
    <div className="flex items-center ms-auto sm:ms-0 sm:order-3">
      <div className="ps-3 sm:ps-6 sm:ms-6 sm:border-s sm:border-gray-300 dark:border-gray-700">
      <Link
                  to="/contact"                   
                  className={`font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500`}
                  onClick={(event) => {
                    event.preventDefault();
                    if (!isContactsPage) {
                      navigate('/contact');
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
    
    <div id="navbar-offcanvas-example" class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow sm:order-2 sm:static sm:block sm:h-auto sm:max-w-none sm:w-auto sm:border-r-transparent sm:transition-none sm:translate-x-0 sm:z-40 sm:basis-auto dark:bg-gray-800 dark:border-r-gray-700 sm:dark:border-r-transparent hidden" tabindex="-1" data-hs-overlay-close-on-resize>
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
        <Link
                  to="/"                   
                  className={`font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500`}
                  onClick={(event) => {
                    event.preventDefault();
                    if (!isHomePage) {
                      navigate('/');
                    }
                  }}
                  style={{ 
                    cursor: isHomePage ? 'default' : 'pointer',
                    color: isHomePage ? '#000080' : undefined,
                    pointerEvents: isHomePage ? 'none' : 'auto',}}
                    >
                      Home
            </Link>

            <Link
                  to='/cv'
                  className={`font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500`}
                  onClick={(event) => {
                    event.preventDefault();
                    if (!isCVPage) {
                      navigate('/cv');
                    }
                  }}
                  style={{ 
                    cursor: isCVPage ? 'default' : 'pointer',
                    color: isCVPage ? '#000080' : undefined,
                    pointerEvents: isCVPage ? 'none' : 'auto',}}
                    >
                      CV
            </Link>

            <Link
                  to="/aboutme"                   
                  className={`font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500`}
                  onClick={(event) => {
                    event.preventDefault();
                    if (!isAboutMePage) {
                      navigate('/aboutme');
                    }
                  }}
                  style={{ 
                    cursor: isAboutMePage ? 'default' : 'pointer',
                    color: isAboutMePage ? '#000080' : undefined,
                    pointerEvents: isAboutMePage ? 'none' : 'auto',}}
                    >
                      About Me
            </Link>

            <Link
                  to="/projects"                   
                  className={`font-medium text-gray-500 hover:text-gray-400 px-6 sm:py-6 sm:px-0 dark:text-gray-400 dark:hover:text-gray-500`}
                  onClick={(event) => {
                    event.preventDefault();
                    if (!isProjectsPage) {
                      navigate('/projects');
                    }
                  }}
                  style={{ 
                    cursor: isProjectsPage ? 'default' : 'pointer',
                    color: isProjectsPage ? '#000080' : undefined,
                    pointerEvents: isProjectsPage ? 'none' : 'auto',}}
                    >
                      Projects
            </Link>
        </div>
    </div>
  </nav>
</header>
</>
    )
}

export default TailwindNavBar