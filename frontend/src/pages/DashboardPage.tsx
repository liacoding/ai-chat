import MessageInputBox from '../components/MessageInputBox';

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

            <div className="relative mt-10 w-full flex justify-center px-4 sm:px-8">
                <div className="w-full max-w-[750px]">
                    <MessageInputBox isNewConversation={true} />
                </div>
            </div>

        </div>
    );
};

export default DashboardPage;


