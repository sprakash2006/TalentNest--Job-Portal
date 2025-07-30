import React, { useState } from 'react';
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton, SignIn } from '@clerk/clerk-react';
import { Link, PenBox } from 'lucide-react';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  return (
    <>
      <nav className='flex justify-between items-center pl-15 bg-[rgba(0,0,0,0.9)] text-white fixed gap-[70vw]'>
        <div className='flex items-center text-2xl font-bold'>
          <img className='h-[6vw] relative right-5' src="/appLogo.png" alt="AppLogo" />
          <p className='relative right-7'>TalentNest</p>
        </div>
        <SignedOut>
          <Button variant="outline" onClick={() => setShowSignIn(true)}>Login</Button>
        </SignedOut>
        <SignedIn className=" flex bg-amber-100">
          {/* add condition here to render only when user is a recruiter */}
          <Button
            variant="destructive"
            className="rounded-full"
            onClick={() => window.location.href = '/post-job'}
            >
              <PenBox size={20} className="mr-2" />
                  Post a Job
          </Button>
          <UserButton />
        </SignedIn>
        
      </nav>
      {showSignIn && (
        <div>
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
}

export default Header;