"use client"
import { motion } from "framer-motion"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import Navbar from "../components/navbar"
import Image from "next/image"
import img1 from "../../public/images/img2.webp"

function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative bg-red-300">
                <Image
                  src={img1}
                  alt="Nagma"
                  className="w-full h-[20rem] object-cover rounded-lg"
                />

              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-8">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter className="w-5 h-5 text-gray-700" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebookF className="w-4 h-4 text-gray-700" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInstagram className="w-4 h-4 text-gray-700" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedinIn className="w-4 h-4 text-gray-700" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="lg:pl-8  bg-blue-500 absolute "
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Heading */}
              <h1 className="text-6xl absolute left-[34vw] sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-12 tracking-tight">
                ABOUT US
              </h1>

              {/* Content */}
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg ">
                 At Code4Bharat, we specialize in delivering innovative IT solutions.
                 From tailored software development to web design, we help businesses
                 succeed in the digital world.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
