import React, { useState }  from 'react'
import "./static/Pages.css"
import HRPic from "../assets/HRPic.png"
import "./static/Home.css"

const Home = () => {
    const [isEmailPopupOpen, setEmailPopupOpen] = useState(false);

    const setEmailPopup = () => {
        setEmailPopupOpen(!isEmailPopupOpen);
    };

    
    return (
        <div className='pagecontainer'>
            <div className="content-container">
            <div class="image-container">            
                <img className="HRPic" src={HRPic} alt="Picture of Harry Rhodes"></img>
            </div>
                <div className="button-container">
                <ul>
                        <h3>Hi, I'm Harry</h3>
                        <h2>I'm a Software Developer</h2>
                            <li>🤓 I'm a Makers graduate</li>
                            <li>🌱 I love learning, designing and creating things</li>
                            <li>🍪 If you have chocolate biscuits, I will eat them!</li>
                        </ul>
                        <a href="https://github.com/hjtrhodes" target="_blank" rel="noopener noreferrer">
                                <button className="iconbutton">< img src="https://camo.githubusercontent.com/6c8e86dfc77346d4388b8e064db73017a210f18e2cd18e74779ea34f2d630f4a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769746875622f6769746875622d6f726967696e616c2e737667" alt="GitHub Logo"/></button>
                        </a>
                        <a href="https://linkedin.com/in/harry-rhodes-851b3663" target="_blank" rel="noopener noreferrer">
                                <button className="iconbutton"><img src="https://raw.githubusercontent.com/dheereshagrwal/colored-icons/master/public/icons/linkedin/linkedin.svg" alt="LinkedIn" /></button>
                        </a>


                                <button className="iconbutton" onClick={setEmailPopup}>{}
                                <img src="https://raw.githubusercontent.com/dheereshagrwal/colored-icons/master/public/icons/gmail/gmail.svg" alt="Gmail" />
                                </button>
                                {isEmailPopupOpen && (
                                <div className="popup">
                                    <p>Email me: hjtrhodes@gmail.com</p>
                                    <button onClick={setEmailPopup}>Close</button>
                                </div>
                                )}
                </div>
            </div>             
        </div>
    )
};

export default Home