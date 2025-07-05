"use client"
import React, { useState } from 'react';
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

function Navbar() {
  const [isSunIcon, setIsSunIcon] = useState(true);
  const pathname = usePathname();
  
  const toggleIcon = () => {
    setIsSunIcon(!isSunIcon);
  }
  const navItems = [
    { name: 'home', path: '/' },
    { name: 'about us', path: '/about' },
    { name: 'odoo', path: '/odoo' },
    { name: 'clients', path: '/clients' },
    { name: 'approach', path: '/approach' },
    { name: 'services', path: '/services' }
  ];

  return (
    <>
      <div className='flex justify-center items-center h-[8vw] '>
        <div className='bg-gradient-to-r from-white to-blue-300 shadow flex justify-between items-center px-4 py-2 rounded-3xl lg:mt-6 sm:mt-14 ml-4 mr-4 sm:w-[80vw] lg:w-[90vw]'>
          <div>
            <Link href="/">
              <img className='lg:w-[16vw] sm:w-[30vw] cursor-pointer' src="/logos/codeBharatLogo.webp" alt=''/>
            </Link>
          </div>
          {/* menu bar display */}
          <div></div>
          {/* desktop design */}
          <div>
            <ul className='hidden md:flex lg:flex gap-7 capitalize tracking-wider lg:px-8 lg:py-2'>
              {navItems.map((item) => (
                <li key={item.path} className='relative'>
                  <Link 
                    href={item.path}
                    className={`
                      relative 
                      ${pathname === item.path ? 'text-black font-medium' : 'text-gray-600'}
                      hover:text-black transition-colors duration-200
                    `}
                  >
                    {item.name}
                    
                    {pathname === item.path && (
                      <motion.div
                        className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           <div>
            <ul className='sm:flex md:hidden lg:hidden gap-7 capitalize tracking-wider lg:px-8 lg:py-2'>
              {navItems.map((item) => (
                <li key={item.path} className='relative'>
                  <Link 
                    href={item.path}
                    className={`
                      relative 
                      ${pathname === item.path ? 'text-black font-medium' : 'text-gray-600'}
                      hover:text-black transition-colors duration-200
                    `}
                  >
                    {item.name}
                    
                    {pathname === item.path && (
                      <motion.div
                        className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
     
          <div className='flex gap-6 items-center tracking-wider'>
            <Link href="/contactus">
              <motion.button 
                className='bg-blue-400 px-2 py-2 rounded-xl text-white shadow-md cursor-pointer sm:text-sm '
                whileHover={{ 
                  backgroundColor: "#3b82f6",
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  backgroundColor: "#3b82f6",
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
              >
                Connect with us
              </motion.button>
            </Link>
            
            <motion.div
              className='bg-blue-400 rounded-full px-2 py-2 shadow-md cursor-pointer' 
              onClick={toggleIcon}
              whileTap={{scale:0.9}}
            >
              <motion.div 
                key={isSunIcon ? "sun" : "moon"} 
                initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 360, scale: 1, opacity: 1 }}
                exit={{ rotate: -360, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.6, type: "tween" }}
              >
                {isSunIcon ? <BiSolidSun/>:<BiSolidMoon/>}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;