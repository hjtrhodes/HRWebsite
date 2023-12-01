import React from 'react'
import "./static/Pages.css"
import Elephants from "../assets/Elephants.jpg"

const Home = () => {
    return (
        <div className='pagecontainer'>
            <div class="image-container">            
                <img className="Elephants" src={Elephants} alt="Elephants" width="100%"></img>
            </div>
        </div>
    )
}

export default Home