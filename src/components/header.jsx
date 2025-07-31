import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton, SignIn } from '@clerk/clerk-react';
import { PenBox,  BriefcaseBusiness, Heart } from 'lucide-react';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };

  return (
    <>
      <nav className='flex justify-between items-center px-10 bg-[rgba(0,0,0,0.9)] text-white fixed w-full z-40 h-[6vw]'>
        <div className='flex items-center text-2xl font-bold'>
          <img className='h-[6vw] relative right-5' src="/appLogo.png" alt="AppLogo" />
          <p className='relative right-7'>TalentNest</p>
        </div>
        <div className="flex justify-center items-center gap-6">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>Login</Button>
          </SignedOut>
          <SignedIn>
            <div className="flex gap-3 p-1 rounded-lg">
              <Button
                variant="destructive"
                className="rounded-full"
                onClick={() => window.location.href = '/post-job'}
              >
                <PenBox size={20} className="mr-2" />
                Post a Job
              </Button>
              <UserButton
              appearance={{
                elements:{
                  avatarBox:"h-50 w-50",
                },
              }} 
              >
                <UserButton.MenuItems>
                  <UserButton.Link
                  label="my Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                  />
                  <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={< Heart size={15} />}
                  href="/saved-jobs"
                  />
                </UserButton.MenuItems>
              </UserButton>
            </div>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <SignIn
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/onboarding"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
