"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Zap,
  Users,
  Award,
  Settings,
  Smartphone,
  Network,
  ShoppingCart,
  BarChart3,
  TrendingUp,
  MessageCircle,
  Sparkles,
  Check,
} from "lucide-react"
import Navbar from "../components/navbar"
import Footer from "./footer"

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

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
    const [counterAnimated, setCounterAnimated] = React.useState(false)

    React.useEffect(() => {
      if (!counterAnimated) {
        setCounterAnimated(true)
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
    }, [counterAnimated, end, duration])

    return <span>{count}+</span>
  }

  // Animated Text Component - Word by word (only once)
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

  // Character by character animation (only once)
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

  const mainServices = [
    {
      title: "Web Development",
      description:
        "At Code4Bharat, we deliver tailored web development services, including custom websites, e-commerce platforms, and web applications.",
      icon: Settings,
      gradient: "from-blue-800 via-blue-900 to-blue-950",
      features: ["Custom Websites", "E-commerce Platforms", "Web Applications", "Responsive Design"],
      color: "blue",
    },
    {
      title: "Mobile Development",
      description:
        "We provide custom mobile app development services that bring your vision to life across iOS and Android platforms.",
      icon: Smartphone,
      gradient: "from-emerald-600 via-emerald-700 to-emerald-800",
      features: ["iOS Development", "Android Development", "Cross-Platform", "UI/UX Design"],
      color: "emerald",
    },
  ]

  const additionalServices = [
    {
      title: "IT Consulting",
      description:
        "We help businesses navigate digital transformation with tailored solutions in technology strategy, cloud migration, and system integration.",
      icon: Network,
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Code4Bharat provides complete e-commerce solutions, including storefront setup and payment integration, to create secure and scalable platforms.",
      icon: ShoppingCart,
      color: "green",
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "Offshore Development",
      description:
        "We provide high-quality, cost-effective software solutions for international clients, including dedicated teams and ongoing support.",
      icon: BarChart3,
      color: "orange",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      title: "Digital Marketing Solutions",
      description:
        "Code4Bharat offers comprehensive digital marketing services such as SEO, social media management, and content marketing.",
      icon: TrendingUp,
      color: "pink",
      gradient: "from-pink-500 to-pink-700",
    },
  ]

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

      {/* Hero Content */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
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

        </div>
      </section>

      {/* Amazing Services Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Amazing Services
              </h2>
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              At Code4Bharat, we drive your business forward with custom web and mobile app development, strategic IT
              consulting, and robust e-commerce solutions tailored to your needs.
            </p>
          </motion.div>

          {/* Main Services - Unique Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Web Development - Larger Card (7 columns) */}
            <motion.div
              className="lg:col-span-7 relative overflow-hidden rounded-3xl shadow-2xl group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                z: 50,
              }}
            >
              <div className={`bg-gradient-to-br ${mainServices[0].gradient} p-8 h-full relative overflow-hidden`}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0],
                    }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Settings className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{mainServices[0].title}</h3>

                  <p className="text-white/90 text-lg mb-6 leading-relaxed">{mainServices[0].description}</p>

                  {/* Feature List */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {mainServices[0].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Mobile Development - Smaller Card (5 columns) */}
            <motion.div
              className="lg:col-span-5 relative overflow-hidden rounded-3xl shadow-2xl group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: -5,
                z: 50,
              }}
            >
              <div className={`bg-gradient-to-br ${mainServices[1].gradient} p-8 h-full relative overflow-hidden`}>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    className="absolute top-5 right-5 w-20 h-20 bg-white rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Smartphone className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{mainServices[1].title}</h3>

                  <p className="text-white/90 mb-6 leading-relaxed">{mainServices[1].description}</p>

                  {/* Feature List */}
                  <div className="space-y-2 mb-6">
                    {mainServices[1].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200/50 hover:bg-white/90 transition-all duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                }}
              >
                {/* Floating Particles on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>

                <div className="flex justify-center mb-4">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed text-center">{service.description}</p>

                {/* Hover Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk About Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Chat Widget */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition-colors duration-300">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </motion.div>
    </div>
  )
}

export default Home
