import Logo from "../../assets/Logo.png"
import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import NavBarDropDown from "../NavBarDropDown/NavBarDropDown.jsx"


const TailwindNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();  
  const isHomePage = location.pathname === '/';
  const [pageName, setPageName] = useState('Home');

    return (
<header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
  <nav className="relative max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
    <div className="flex items-center justify-between">
      <Link 
          
          to="/" 
          href="#" 
          aria-label="Icon"
          onClick={(event) => {
            event.preventDefault();
            if (!isHomePage) {
              navigate('/');
              setPageName('Home')
            }
          }}
          style={{ 
            cursor: isHomePage ? 'default' : 'pointer',
            color: isHomePage ? '#000080' : undefined,
            pointerEvents: isHomePage ? 'none' : 'auto',}}
            >

          <img className={`HRPic w-12 h-12 p-0.5 ${isHomePage ? '' : 'transform hover:scale-110'}`}
            src={Logo} 
            alt="Portfolio Logo">
            </img>
    </Link>
    

          <div className="pl-2">
                  {pageName}
          </div>

          <div className="absolute right-6">
              <NavBarDropDown setPageName={setPageName}/>
          </div>

    </div>
  </nav>
</header>
    )
}

export default TailwindNavBar