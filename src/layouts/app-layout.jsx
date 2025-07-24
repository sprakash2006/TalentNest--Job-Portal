import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/header.jsx';

function AppLayout() {
  return (
    <>
        <div className="grid-background"></div>
        <main className='min-h-screen container'>
          <Header />
          <Outlet />
        </main>
        <div>
          <footer className='text-center p-4 bg-gray-950 text-white'>
            &copy; {new Date().getFullYear()} TalentNest. All rights reserved.
            <p className='text-[15px] mt-2 font-serif'>Made By Prakash</p>
          </footer>
        </div>
        
    </>

  )
}

export default AppLayout;
