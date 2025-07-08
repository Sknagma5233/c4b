"use client"
import { motion } from "framer-motion"
import { HiOutlineGlobeAlt, HiOutlineUsers, HiOutlineClock, HiOutlineOfficeBuilding } from "react-icons/hi"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import Navbar from "../components/navbar"

function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Code4Bharat Team Member"
                  className="w-full h-auto object-cover rounded-lg"
                />

                {/* Decorative Element */}
                <div className="absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-black rounded-full relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        {/* Radiating lines */}
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-0.5 h-2 bg-white origin-bottom"
                            style={{
                              transform: `rotate(${i * 30}deg)`,
                              transformOrigin: "50% 100%",
                              top: "-4px",
                              left: "50%",
                              marginLeft: "-1px",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
              className="lg:pl-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Main Heading */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-12 tracking-tight">
                ABOUT US
              </h1>

              {/* Content */}
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Code4Bharat started as a small internal design team in Bangalore, India. Today, we're a full-service
                  digital agency with clients all over the world. We specialize in web development, mobile applications,
                  and custom software solutions that help our clients and their customers achieve their goals.
                </p>

                <p className="text-lg">
                  Our team consists of passionate developers, designers, and strategists committed to creating digital
                  experiences that have lasting impact. We understand that technology is essential, but we never lose
                  sight of the human element that makes great digital experiences possible.
                </p>

                <p className="text-lg">
                  We believe in building long-term partnerships with our clients, providing ongoing support and
                  innovative solutions that grow with their business needs.
                </p>
              </div>

              {/* Decorative Line */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="w-16 h-1 bg-black"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
