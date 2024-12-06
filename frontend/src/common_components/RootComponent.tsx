import { Link } from 'react-router-dom';
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { Outlet } from 'react-router-dom';

const RootComponent = () => {
  return ( 
      <div className="flex flex-col min-h-screen overflow-y-auto">
          <header className="flex items-center justify-between px-4 md:px-16 py-4 md:py-8 sticky top-0 bg-white z-50">
              <Link to="/" className="flex items-center font-bold gap-2">
                  <img src="/logo.png" alt="logo" className="w-8 md:w-12 h-8 md:h-12" />
                  <span className="text-xl md:text-2xl">Star AI</span>
              </Link>
              <div> 
                  <SignedIn>
                      <UserButton />
                  </SignedIn>
              </div>
          </header>

          <main className="flex-1 overflow-y-auto">
              <Outlet />
          </main>
      </div>
  );
};

export default RootComponent;