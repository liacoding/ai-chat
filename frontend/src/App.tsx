import { Routes, Route } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { setupAxiosInterceptor } from './lib/interceptor';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage';
import RootComponent from './components/RootComponent';
import DashboardComponent from './components/DashboardComponent';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';

const App = () => {

  const {getToken} = useAuth();

  useEffect(() => {
    setupAxiosInterceptor(() => getToken());
  }, [getToken]);

  return (
    <Routes>
       <Route element={<RootComponent />}>

      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
      <Route path="/sign-in/*" element={<SignInPage/>} />
      
      <Route path="/dashboard" element={<DashboardComponent />}>
      <Route path="/dashboard" element={<DashboardPage />}/>
      <Route path="/dashboard/chats/:conversationId" element={<ChatPage />} />
      </Route>

      </Route>
    </Routes>
    
  )
};

export default App;