"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/navbar"

function Approach() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])



  
  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Animated Background Pattern - Fixed throughout */}
      <div className="fixed inset-0 z-0">
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

  
    </div>
  )
}

export default Approach;
