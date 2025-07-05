"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Users, Award } from "lucide-react"
import Navbar from "@/components/navbar"


function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animated Counter Component
  const AnimatedCounter = ({ end, duration = 2 }) => {
    const [count, setCount] = React.useState(0)
    const [hasAnimated, setHasAnimated] = React.useState(false)

    React.useEffect(() => {
      if (!hasAnimated) {
        setHasAnimated(true)
        let startTime = null
        const animate = (currentTime) => {
          if (startTime === null) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        setTimeout(() => requestAnimationFrame(animate), 2000)
      }
    }, [hasAnimated, end, duration])

    return <span>{count}+</span>
  }

  // Animated Text Component - Word by word
  const AnimatedText = ({ text, className = "", delay = 0 }) => {
    const words = text.split(" ")

    return (
      <div className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    )
  }

  // Character by character animation
  const AnimatedTextByChar = ({ text, className = "", delay = 0 }) => {
    const chars = text.split("")

    return (
      <div className={className}>
        {chars.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: "easeOut",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    )
  }

  const stats = [
    { number: 150, label: "Projects Completed", icon: Award },
    { number: 50, label: "Happy Clients", icon: Users },
    { number: 5, label: "Years Experience", icon: Zap },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-screen relative overflow-hidden">
      {/* Your Navbar Component */}
      <Navbar/>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Animated Circles */}
            <motion.circle
              cx="200"
              cy="200"
              r="100"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              opacity="0.2"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.circle
              cx="800"
              cy="300"
              r="80"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2"
              opacity="0.2"
              animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.circle
              cx="600"
              cy="700"
              r="120"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              opacity="0.2"
              animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.circle
              cx="300"
              cy="600"
              r="90"
              fill="none"
              stroke="#1e40af"
              strokeWidth="2"
              opacity="0.15"
              animate={{ scale: [1.1, 0.9, 1.1], rotate: [0, 270, 540] }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.circle
              cx="700"
              cy="150"
              r="60"
              fill="none"
              stroke="#3730a3"
              strokeWidth="2"
              opacity="0.25"
              animate={{ scale: [0.8, 1.4, 0.8], rotate: [540, 270, 0] }}
              transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Mouse Following Gradient */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        {/* Additional floating gradients */}
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-300/15 to-blue-500/15 rounded-full blur-2xl"
          animate={{
            x: mousePosition.x * 0.5 - 128,
            y: mousePosition.y * 0.3 - 128,
          }}
          transition={{ type: "spring", damping: 40, stiffness: 150 }}
        />
      </div>

      {/* Hero Content */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <AnimatedText
              text="Boost Your Business with"
              className="text-4xl md:text-7xl font-bold mb-4 text-gray-800 leading-tight"
              delay={0.2}
            />
            <AnimatedTextByChar
              text="Cutting-Edge IT Solutions"
              className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight"
              delay={1}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              Unlock your full potential with our tailored technology services. From innovative software development to
              robust cybersecurity, we empower your business to thrive in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-xl inline-flex items-center space-x-2 hover:shadow-2xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today!</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200/50 hover:bg-white/70 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2 + index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                  y: -5,
                }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                  <AnimatedCounter end={stat.number} />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
            animate={{
              y: [0, 15, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-12 h-12 bg-blue-600/20 rounded-full blur-lg"
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </section>
    </div>
  )
}

export default Hero
