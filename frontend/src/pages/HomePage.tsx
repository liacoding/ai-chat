import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div className="relative min-h-screen">

            {/* Background container */}
            <div className="fixed inset-0 bg-gradient-to-r from-[#feebf6] to-[#eff1ff]" />
            
            {/* Content */}
            <div className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16 py-16 md:py-12 gap-12 md:gap-24">
                <div className="w-full md:flex-1 flex flex-col items-center md:items-start gap-6 text-center md:text-left md:-mt-[100px] ">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl text-black font-bold">
                        Talk to your favorite celebrity
                    </h1>
                    <h3 className="text-lg font-normal w-full md:max-w-[70%]">
                        Experience Real-Time Conversations with an AI Personalized to Your Favorite Celebrity's Style. 
                    </h3>
                    <Link 
                        to="/dashboard"
                        className="px-6 py-3 md:py-4 bg-[#217bfe] text-white rounded-lg text-base mt-2 md:mt-5 
                                hover:bg-[#cde1ff] hover:text-[#217bfe] transition-colors"
                    >
                        Get Started
                    </Link>
                </div>
                
                <div className="w-full md:flex-1 flex items-center justify-center">
                    <img 
                        src="/bot.svg" 
                        alt="bot" 
                        className="w-[60%] sm:w-[50%] md:w-[70%] object-contain animate-float md:-mt-[100px] mt-5 "
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;