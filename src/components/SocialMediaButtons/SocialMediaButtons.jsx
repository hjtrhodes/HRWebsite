const SocialMediaButtons = () => {
    return (        
                        <div className="flex justify-center space-x-4">
                            <a href="https://github.com/hjtrhodes" target="_blank" rel="noopener noreferrer">
                                    <button className="p-4 transform hover:scale-110 transition-transform cursor-pointer">
                                    < img className="w-14 h-14" src="https://raw.githubusercontent.com/dheereshagrwal/colored-icons/master/public/icons/github/github.svg" 
                                    alt="GitHub Logo"/>
                                    </button></a>
                      
                            <a href="https://linkedin.com/in/harry-rhodes-851b3663" target="_blank" rel="noopener noreferrer">
                                <button className="p-4 transform hover:scale-110 transition-transform cursor-pointer">
                                    <img className="w-14 h-14" src="https://raw.githubusercontent.com/dheereshagrwal/colored-icons/master/public/icons/linkedin/linkedin.svg" 
                                    alt="LinkedIn" />
                                    </button></a>
                        </div>
    );
}

export default SocialMediaButtons