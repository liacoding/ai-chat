import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
    return ( 
        <div className="flex items-start justify-center min-h-screen bg-gradient-to-r from-[#feebf6] to-[#eff1ff] px-4 py-24 ">
            <SignIn path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl="/dashboard" /> 
        </div>
    );
};

export default SignInPage;