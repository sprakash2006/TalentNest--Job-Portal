import React from 'react'
import { Button } from "./ui/button";


const header = () => {
  return (
    <nav className='flex justify-between items-center  pl-15 bg-[rgba(0,0,0,0.9)] text-white fixed gap-[70vw]'>
        <div className='flex items-center text-2xl font-bold'>
            <img className='h-[6vw] relative right-5' src="/appLogo.png" alt="AppLogo" />
            <p className='relative right-7'>TalentNest</p>
        </div>
        <div>
            <Button varient="outline" className="mr-15 bg-gray-800 text-white px-8 py-4 hover:text-black transition duration-300" > Login </Button>
        </div>
        
    </nav>
  )
}

export default header;
