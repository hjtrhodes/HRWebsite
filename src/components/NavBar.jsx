import React from 'react';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
    const navigate = useNavigate();

const urlTo = (path) => {
    navigate(path);
};

return (
        <div className='navbarcontainer'>
                <button className='navbutton' data-cy="CV" onClick={() => urlTo('/cv')}>
                CV
                </button>
                <button className='navbutton' data-cy="AboutMe" onClick={() => urlTo('/aboutme')}>
                About Me
                </button>
                <button className='navbutton' data-cy="Projects" onClick={() => urlTo('/projects')}>
                Projects
                </button>
        </div>
    );
};

export default NavBar;