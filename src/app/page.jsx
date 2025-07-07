import Navbar from '@/components/navbar'
import Home from '@/components/home'
import React from 'react'

function Hero() {
  return (
 <div className="w-full h-screen bg-[url('/images/bgImage.png')] bg-cover bg-center">
  {/* <Navbar/> */}
  <Home/>
</div>


  )
}

export default Hero
