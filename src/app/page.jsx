import Navbar from '@/components/navbar'
import Home from '@/components/home'
import React from 'react'
import Footer from '@/components/footer'

function Hero() {
  return (
 <div className="w-full h-screen bg-[url('/images/bgImage.png')] bg-cover bg-center">
  {/* <Navbar/> */}
  <Home/>
  <Footer/>
</div>


  )
}

export default Hero
