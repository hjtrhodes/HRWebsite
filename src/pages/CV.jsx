import React, { useEffect } from 'react';
import "./static/CV.css"

const CV = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
        }, []);
    
        return (
        <div className='CVpagecontainer'>
            <iframe className='CurriculumVitae' src="https://docs.google.com/document/d/e/2PACX-1vQ1Ou0BCAj8VAIABqmb31CMb6437n-OiKrUrGjOd555Vy0hZujHQWgPJ9OVqabsVhAaQBEKspJ80NqG/pub?embedded=true"></iframe>
        </div>
    )
}

export default CV