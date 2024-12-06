import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
    return ( 
    <div className="flex items-start justify-center min-h-screen bg-gradient-to-r from-[#feebf6] to-[#eff1ff] px-4 py-24 "> 
    <SignUp path="/sign-up" signInUrl="/sign-in" forceRedirectUrl="/dashboard" /> 
    </div>
    );
};

export default SignUpPage;

