import React, { useEffect } from 'react';
import "./Pages.css"

const CV = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
        }, []);
    
        return (
        <div className='pagecontainer'>
        </div>
    )
}

export default CV