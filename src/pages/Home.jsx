import React, { useState }  from 'react'

const Home = () => {
    const [isEmailPopupOpen, setEmailPopupOpen] = useState(false);

    const setEmailPopup = () => {
        setEmailPopupOpen(!isEmailPopupOpen);
    };

    
    return (
        <>
        <div className="pagecontainer flex items-center justify-center p-8">
            <h1 className="text-3xl font-bold underline font-libre-baskervile">
                Under Construction</h1>
    </div>
        </>
        // <div className='pagecontainer'>
        //     <div className="content-container">
        //     <div class="image-container">         <h1>Under Construction</h1>   
        //         <img className="HRPic" src={HRPic} alt="Picture of Harry Rhodes"></img>
        //     </div>
        //         <div className="button-container">
        //         <ul>
        //                 <h3>Hi, I'm Harry</h3>
        //                 <h2>I'm a Software Developer</h2>
        //                     <li>🤓 I'm a Makers graduate</li>
        //                     <li>🌱 I love learning, designing and creating things</li>
        //                     <li>🍪 If you have chocolate biscuits, I will eat them!</li>
        //                 </ul>
        //                         <button className="iconbutton" onClick={setEmailPopup}>{}
        //                         <img src="https://raw.githubusercontent.com/dheereshagrwal/colored-icons/master/public/icons/gmail/gmail.svg" alt="Gmail" />
        //                         </button>
        //                         {isEmailPopupOpen && (
        //                         <div className="popup">
        //                             <p>Email me: hjtrhodes@gmail.com</p>
        //                             <button onClick={setEmailPopup}>Close</button>
        //                         </div>
        //                         )}
        //         </div>
        //     </div>             
        // </div>
    )
};

export default Home