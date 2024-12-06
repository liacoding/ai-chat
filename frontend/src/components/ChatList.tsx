import { Link } from 'react-router-dom';

const ChatList = () => {
   return (
       <div className="flex flex-col h-full p-4 sm:p-6 bg-white">
           {/* Header Section */}
           <span className="font-semibold text-xs mb-3">DASHBOARD</span>
           
           {/* Chat List */}
           <div className="overflow-y-auto mb-4">
               <Link to="/dashboard/chats/new" className="block p-2.5 rounded-lg hover:bg-[#e9ecf2]">
                   Create a new chat
               </Link>
               <Link to="/" className="block p-2.5 rounded-lg hover:bg-[#e9ecf2]">
                   Explore Star AI
               </Link>
               <Link to="/" className="block p-2.5 rounded-lg hover:bg-[#e9ecf2]">
                   Contact
               </Link>

               <hr className="my-4 h-0.5 bg-[#b9b9b9] opacity-10 rounded" />

               <span className="font-semibold text-xs mb-3 block">RECENT CHATS</span>
               {Array(8).fill(0).map((_, i) => (
                   <Link key={i} to="/" className="block p-2.5 rounded-lg hover:bg-[#e9ecf2]">
                       My chat title
                   </Link>
               ))}
           </div>

           {/* Upgrade to PRO section */}
           <div className="mt-auto">
               <hr className="my-4 h-0.5 bg-[#b9b9b9] opacity-10 rounded" />
               <div className="flex items-center gap-2.5 text-xs">
                   <img src="/logo.png" alt="logo" className="w-6 h-6" />
                   <div className="flex flex-col">
                       <span className="font-semibold">Upgrade to PRO</span>
                       <span className="text-gray-500">
                           Get your team unlimited access to all our features
                       </span>
                   </div>
               </div>
           </div>
       </div>
   );
};

export default ChatList;