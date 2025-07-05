"use client"
import { useState } from "react"
import { BiSolidMoon, BiSolidSun, BiMenuAltRight } from "react-icons/bi"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoCloseOutline } from "react-icons/io5"

function Navbar() {
  const [isSunIcon, setIsSunIcon] = useState(true)
  const [isMenuOpen, setIsmenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleIcon = () => setIsSunIcon(!isSunIcon)
  const toggleMenu = () => setIsmenuOpen(!isMenuOpen)

  const navItems = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about" },
    { name: "odoo", path: "/odoo" },
    { name: "clients", path: "/clients" },
    { name: "approach", path: "/approach" },
    { name: "services", path: "/services" },
  ]

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-gradient-to-r from-white to-blue-300 shadow flex justify-between items-center px-4 py-2 rounded-3xl mt-4 w-[90vw] relative z-50">
          <Link href="/">
            <img
              className="w-[30vw] lg:w-[10vw] md:[20vw] sm:[20vw] cursor-pointer"
              src="/logos/codeBharatLogo.webp"
              alt="logo"
            />
          </Link>

          <ul className="hidden md:flex gap-7 capitalize tracking-wider px-8 py-2">
            {navItems.map((item) => (
              <li key={item.path} className="relative">
                <Link
                  href={item.path}
                  className={`
                    ${pathname === item.path ? "text-black font-medium" : "text-gray-600"}
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

          <div className="flex gap-4 items-center">
            <Link href="/contactus">
              <motion.button
                className="hidden md:block bg-blue-400 px-3 py-2 rounded-xl text-white shadow-md text-sm"
                whileHover={{ backgroundColor: "#3b82f6", scale: 1.05 }}
                whileTap={{ backgroundColor: "#3b82f6", scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Connect with us
              </motion.button>
            </Link>

            <motion.div
              className="bg-blue-400 rounded-full p-2 shadow-md cursor-pointer"
              onClick={toggleIcon}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                key={isSunIcon ? "sun" : "moon"}
                initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 90, scale: 1, opacity: 1 }}
                exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.6, type: "tween" }}
              >
                {isSunIcon ? <BiSolidSun /> : <BiSolidMoon />}
              </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "menu"}
                className="text-3xl cursor-pointer md:hidden"
                onClick={toggleMenu}
                initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <IoCloseOutline /> : <BiMenuAltRight />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[100px] left-0 right-0 mx-6 my-4 rounded-md bg-white/90 backdrop-blur-md z-50 md:hidden flex flex-col items-center shadow-lg justify-start px-8 py-8 gap-6 h-[calc(100vh-100px)]"
            >
              <ul className="flex flex-col gap-6 text-md capitalize tracking-wider w-full">
                {navItems.map((item) => (
                  <li key={item.path} className="relative w-full">
                    <Link
                      href={item.path}
                      onClick={() => setIsmenuOpen(false)}
                      className={`
                        block w-full
                        ${pathname === item.path ? "text-black font-semibold" : "text-gray-600"}
                        hover:text-black transition-colors duration-200
                      `}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <motion.div
                          className="w-full h-[2px] bg-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: "30%" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/contactus" className="w-full text-start">
                <motion.button
                  className="bg-blue-400 px-3 py-2 rounded-xl text-white shadow-md text-sm"
                  whileHover={{ backgroundColor: "#3b82f6", scale: 1.05 }}
                  whileTap={{ backgroundColor: "#3b82f6", scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Connect with us
                </motion.button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navbar
