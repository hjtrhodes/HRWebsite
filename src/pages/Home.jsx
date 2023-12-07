import React from 'react'
import Computer from "../assets/Computer.png"
import SocialMediaButtons from "../components/SocialMediaButtons/SocialMediaButtons.jsx"

const Home = () => {

    
    return (
        <>
        <div className="w-screen h-screen">
        <div className="p-5 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            {/* <!-- Grid --> */}
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
                <h1 className="pt-4 pb-4 block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Hi, I'm Harry . . .</h1>
                <h1 className="pb-4 block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-4xl dark:text-white">I'm a Software Developer</h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-gray-400 pb-4"><ul>   <li>🤓 I'm a graduate from <a href="https://makers.tech/" className="text-blue-500 hover:text-blue-700">Makers.tech</a></li>
                                                                                    <li>🌱 I love learning, designing and creating things</li>
                                                                                    <li>🍪 If you have chocolate biscuits, I will eat them!</li></ul>
                                                                                    </p>

        
              {/* <!-- Brands --> */}

        
                <div className="mt-4 flex justify-left ml-20">
                    <SocialMediaButtons />
                </div>
                
              {/* <!-- End Brands --> */}
            </div>
            {/* <!-- End Col --> */}
        
            <div className="lg:col-span-4 mt-10 lg:mt-0">
                <img className="w-full rounded-xl" src={Computer} alt="Man at Computer"/>
            </div>
            {/* <!-- End Col --> */}
            </div>
          {/* <!-- End Grid --> */}
        </div>
        </div>

<div className="w-screen h-screen bg-yellow-300">
    <div className="w-screen h-screen bg-yellow-300 flex flex-col pt-10 items-center">
        <p className="mt-3 drop-shadow-lg font-semibold decoration-1">I have experience working with:</p>
                <div className="mt-0 lg:mt-2 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">   
                    <div className="w-full sm:w-auto">
                    <ul className="list-disc list-inside">
                    <li className="drop-shadow-lg font-semibold decoration-1">Python</li>
                    <li className="drop-shadow-lg font-semibold decoration-1">JavaScript</li>
                    <li className="drop-shadow-lg font-semibold decoration-1">React</li>
                    <li className="drop-shadow-lg font-semibold decoration-1">Kotlin</li>
                    </ul>
                </div>

                <div className="w-full sm:w-auto">
                    <ul className="list-disc list-inside">
                    <li className="drop-shadow-lg font-semibold decoration-1">HTML</li>
                    <li className="drop-shadow-lg font-semibold decoration-1">CSS</li>
                    <li className="drop-shadow-lg font-semibold decoration-1">TailwindCSS</li>
                    <li className="drop-shadow-lg font-semibold decoration-1">SQL</li>
                    </ul>
                </div>

                <div className="w-full sm:w-auto">
                    <ul className="list-disc list-inside">
                    <li className="drop-shadow-lg font-semibold decoration-1">PostgreSQL</li>
                    <li className="drop-shadow-lg font-semibold decoration-1">MongoDB</li>
                    <li className="drop-shadow-lg font-semibold decoration-1">Git</li>
                    <li className="drop-shadow-lg font-semibold decoration-1">GitHub</li>
                    </ul>
                </div>
                </div>
        </div>
</div>
    </>
    )
};

export default Home