import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage';
import RootComponent from './common_components/RootComponent';
import DashboardComponent from './common_components/DashboardComponent';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';

const App = () => {
  return (
    
    <Routes>
       <Route element={<RootComponent />}>

      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
      <Route path="/sign-in/*" element={<SignInPage/>} />
      
      <Route path="/dashboard" element={<DashboardComponent />}>
      <Route path="/dashboard" element={<DashboardPage />}/>
      <Route path="/dashboard/chats/:id" element={<ChatPage />} />
      </Route>

      </Route>
    </Routes>
    
  )
};

export default App;