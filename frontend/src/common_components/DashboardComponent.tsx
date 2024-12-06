import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import ChatList from '../components/ChatList';
import { Menu } from 'lucide-react'; // Import menu icon

const DashboardComponent = () => {
   const { userId, isLoaded } = useAuth();
   const navigate = useNavigate();
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
       if (isLoaded && !userId) {
           navigate('/sign-in');
       }
   }, [isLoaded, userId, navigate]);

   if (!isLoaded) return "Loading...";

   return (
       <div className="flex h-full relative">
           {/* Mobile Menu Button */}
           <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden fixed top-20 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
            >
            <Menu size={24} />
            </button>

           {/* Sidebar - Hidden on mobile, shown with button click */}
           <div className={`
               ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
               md:translate-x-0
               fixed md:static
               top-0 left-0 
               h-full w-64 
               bg-white 
               transition-transform duration-300 ease-in-out
               border-r border-gray-200 
               z-40 
               md:block
           `}>
               <ChatList />
           </div>
           
           {/* Main Content */}
           <div className="flex-1 md:ml-0 bg-white">
               <Outlet />
           </div>

           {/* Overlay for mobile */}
           {isMobileMenuOpen && (
               <div 
                   className="md:hidden fixed inset-0 bg-black/20 z-30"
                   onClick={() => setIsMobileMenuOpen(false)}
               />
           )}
       </div>
   );
};

export default DashboardComponent;