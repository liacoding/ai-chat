import { ArrowBigUpDash } from 'lucide-react';

const DashboardPage = () => {
    return (
        <div className="h-full flex flex-col items-center px-4 sm:px-6 md:px-12">
            <img 
                className="w-[200px] h-[200px] rounded-full md:w-[250px] md:h-[250px] sm:w-[180px] sm:h-[180px]" 
                src="/celebrity_photo.png" 
                alt="celebrity_photo" 
            />

            <div className="mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                    How can I help you today?
                </h2>
            </div>

            <div className="mt-6 sm:mt-8 w-full max-w-[500px] sm:max-w-[600px] md:max-w-[750px] bg-[#e9ecf2] rounded-2xl">
                <form className="w-full h-full flex items-center justify-between gap-3 p-4">
                    <input 
                        type="text" 
                        placeholder="Ask me anything" 
                        className="flex-1 p-4 bg-transparent border-none outline-none text-[#ececec] placeholder-[#ececec] rounded-lg"
                    />
                    <button className="bg-black rounded-full p-3 flex items-center justify-center">
                        <ArrowBigUpDash size={17} color="white" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DashboardPage;
