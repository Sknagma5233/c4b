import React from 'react'
import { BiSolidSun } from "react-icons/bi";

function Navbar() {
  return (
    <>
    {/* navbar starts here */}
    <div className='flex  justify-center items-center h-[8vw] '>
      <div className='bg-gradient-to-r from-white to-blue-300 flex justify-between items-center px-4 py-2 rounded-3xl mt-6 ml-4 mr-4 w-[90vw]'>
      <div className=' '>
      <img className='w-[16vw]' src="/logos/codeBharatLogo.webp" alt=''/>
      </div>
      <div  >
        <ul className='flex gap-7 capitalize tracking-wider px-8 py-2'>
          <li>home</li>
          <li>about us</li>
          <li>odoo</li>
          <li>clients</li>
          <li>approach</li>
          <li>services</li>
        </ul>
      </div>
      <div className='flex gap-6 items-center tracking-wider'>
        <div>
          <button className='bg-blue-400 px-2 py-2 rounded-xl text-white shadow-md'>Connect with us</button>
        </div>
        <div className='bg-blue-400 rounded-full px-2 py-2 shadow-md'>
          <BiSolidSun/>
        </div>
      </div>
    </div>
    </div>
   
    {/* navbar ends here */}
    </>
  )
}

export default Navbar
