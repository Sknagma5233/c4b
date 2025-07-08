"use client"

import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb, faCode, faRocket, faHandshake, faStar } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  HiArrowRight,
  HiCog,
  HiDeviceMobile,
  HiGlobeAlt,
  HiShoppingCart,
  HiChartBar,
  HiTrendingUp,
  HiChatAlt,
  HiSparkles,
} from "react-icons/hi"
import Navbar from "../components/navbar"
import Footer from "./footer"

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  // Mouse tracking for background only
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animated Text Component - Only animates once on page load
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

  // Character by character animation - Only animates once on page load
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

  const timelineItems = [
    {
      icon: faLightbulb,
      title: "Understanding your needs",
      desc: "At Code4bharat, we begin every project with a consultation to align our solutions with your business objectives and technology needs.",
      position: "left",
    },
    {
      icon: faCode,
      title: "Customized Development",
      desc: "Our client-centered development process is flexible, allowing us to customize our approach for projects ranging from simple websites to complex enterprise applications",
      position: "right",
    },
    {
      icon: faRocket,
      title: "Agile Methodology",
      desc: "We employ an agile development methodology to stay adaptable to changes in project scope, enabling incremental progress and allowing for your feedback throughout the process.",
      position: "left",
    },
    {
      icon: faHandshake,
      title: "Continuous improvement",
      desc: "We provide ongoing post-launch support, maintenance, and continuous improvement to keep your web platforms and IT infrastructure up-to-date and efficient as your business evolves.",
      position: "right",
    },
  ]

  const allServices = [
    {
      title: "Web Development",
      description:
        "At Code4Bharat, we deliver tailored web development services, including custom websites, e-commerce platforms, and web applications with modern technologies.",
      icon: HiCog,
      gradient: "from-blue-500 to-blue-700",
      features: ["Custom Websites", "E-commerce Platforms", "Web Applications", "Responsive Design"],
    },
    {
      title: "Mobile Development",
      description:
        "We provide custom mobile app development services that bring your vision to life across iOS and Android platforms with cutting-edge technology.",
      icon: HiDeviceMobile,
      gradient: "from-blue-600 to-blue-800",
      features: ["iOS Development", "Android Development", "Cross-Platform", "UI/UX Design"],
    },
    {
      title: "IT Consulting",
      description:
        "We help businesses navigate digital transformation with tailored solutions in technology strategy, cloud migration, and system integration.",
      icon: HiGlobeAlt,
      gradient: "from-blue-500 to-blue-700",
      features: ["Digital Strategy", "Cloud Migration", "System Integration", "Tech Consulting"],
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Code4Bharat provides complete e-commerce solutions, including storefront setup and payment integration, to create secure and scalable platforms.",
      icon: HiShoppingCart,
      gradient: "from-blue-600 to-blue-800",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Analytics"],
    },
    {
      title: "Offshore Development",
      description:
        "We provide high-quality, cost-effective software solutions for international clients, including dedicated teams and ongoing support.",
      icon: HiChartBar,
      gradient: "from-blue-500 to-blue-700",
      features: ["Dedicated Teams", "Quality Assurance", "24/7 Support", "Cost-Effective"],
    },
    {
      title: "Digital Marketing",
      description:
        "Code4Bharat offers comprehensive digital marketing services such as SEO, social media management, and content marketing to boost your online presence.",
      icon: HiTrendingUp,
      gradient: "from-blue-600 to-blue-800",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "Analytics"],
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO, TechStart Solutions",
      company: "Mumbai, India",
      rating: 5,
      text: "Code4Bharat transformed our business with their exceptional web development services. Their team delivered beyond our expectations, creating a modern, responsive website that significantly boosted our online presence.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Founder, Digital Dreams",
      company: "Delhi, India",
      rating: 5,
      text: "Working with Code4Bharat was a game-changer for our startup. Their mobile app development expertise helped us launch our product successfully. The team is professional, responsive, and truly understands client needs.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "CTO, Global Innovations",
      company: "New York, USA",
      rating: 5,
      text: "Code4Bharat's offshore development services exceeded our expectations. They delivered high-quality software solutions on time and within budget. Their technical expertise and communication skills are outstanding.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "Anita Patel",
      position: "Marketing Director, E-Shop Pro",
      company: "Bangalore, India",
      rating: 5,
      text: "The e-commerce platform developed by Code4Bharat revolutionized our online business. Sales increased by 300% within the first quarter. Their attention to detail and user experience design is remarkable.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      name: "David Chen",
      position: "Operations Manager, Tech Solutions Inc",
      company: "Singapore",
      rating: 5,
      text: "Code4Bharat's IT consulting services helped us streamline our operations and migrate to the cloud seamlessly. Their strategic approach and technical guidance were invaluable for our digital transformation.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      name: "Sarah Williams",
      position: "Brand Manager, Creative Agency",
      company: "London, UK",
      rating: 5,
      text: "The digital marketing strategies implemented by Code4Bharat significantly improved our online visibility. Our website traffic increased by 250% and lead generation improved dramatically. Highly recommended!",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Enhanced Animated Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.4" />
              </pattern>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Enhanced Animated Circles */}
            <motion.circle
              cx="200"
              cy="200"
              r="120"
              fill="url(#circleGradient)"
              stroke="#3b82f6"
              strokeWidth="2"
              opacity="0.3"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.circle
              cx="800"
              cy="300"
              r="100"
              fill="url(#circleGradient)"
              stroke="#1d4ed8"
              strokeWidth="2"
              opacity="0.25"
              animate={{ scale: [1.2, 0.8, 1.2], rotate: [360, 180, 0] }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.circle
              cx="600"
              cy="700"
              r="140"
              fill="url(#circleGradient)"
              stroke="#2563eb"
              strokeWidth="2"
              opacity="0.2"
              animate={{ scale: [1, 1.4, 1], rotate: [0, -180, -360] }}
              transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.circle
              cx="300"
              cy="600"
              r="80"
              fill="url(#circleGradient)"
              stroke="#1e40af"
              strokeWidth="2"
              opacity="0.35"
              animate={{ scale: [1.1, 0.7, 1.1], rotate: [0, 270, 540] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Enhanced Mouse Following Gradient */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/30 to-blue-600/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 150 }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-300/20 to-blue-500/15 rounded-full blur-2xl"
          animate={{
            x: mousePosition.x * 0.3 - 128,
            y: mousePosition.y * 0.4 - 128,
          }}
          transition={{ type: "spring", damping: 35, stiffness: 120 }}
        />
      </div>

      {/* Hero Content - Fixed spacing */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-4">
        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <AnimatedText
              text="Boost Your Business with"
              className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-gray-800 leading-tight"
              delay={0.2}
            />
            <AnimatedTextByChar
              text="Cutting-Edge IT Solutions"
              className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight"
              delay={1}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-5xl mx-auto leading-relaxed font-medium px-4">
              Unlock your full potential with our tailored technology services. From innovative software development to
              robust cybersecurity, we empower your business to thrive in the digital age with cutting-edge solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl inline-flex items-center space-x-2 hover:shadow-blue-500/30 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today!</span>
              <HiArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="bg-white/80 backdrop-blur-sm text-blue-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl border border-blue-200 hover:bg-white transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* How it works - Responsive Design */}
      <section ref={ref} className="py-12 md:py-20 px-4 relative bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures your project success from concept to completion
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.position === "left" ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex items-center w-full mb-16 ${
                  item.position === "left" ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-1/2 ${item.position === "left" ? "pr-12" : "pl-12"}`}>
                  <motion.div
                    className="p-6 md:p-8 rounded-2xl shadow-2xl bg-white/90 backdrop-blur-sm border border-blue-100 transition-all duration-300 hover:shadow-blue-200/50"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <FontAwesomeIcon icon={item.icon} className="text-xl md:text-2xl text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">{item.desc}</p>
                  </motion.div>
                </div>

                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full absolute left-1/2 text-white text-lg md:text-2xl font-bold transform -translate-x-1/2 flex items-center justify-center shadow-2xl border-4 border-white z-10"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-blue-100 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mr-4 shadow-lg flex-shrink-0">
                      <FontAwesomeIcon icon={item.icon} className="text-lg text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazing Services Section - Same background as hero */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
        {/* Background Pattern for Services */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="servicesGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servicesGrid)" />
            <motion.circle
              cx="150"
              cy="150"
              r="80"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              opacity="0.3"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.circle
              cx="850"
              cy="200"
              r="60"
              fill="none"
              stroke="#1d4ed8"
              strokeWidth="2"
              opacity="0.25"
              animate={{ scale: [1.1, 0.9, 1.1], rotate: [360, 180, 0] }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <HiSparkles className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Amazing Services
              </h2>
              <HiSparkles className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Code4Bharat, we drive your business forward with custom web and mobile app development, strategic IT
              consulting, and robust e-commerce solutions tailored to your unique needs.
            </p>
          </motion.div>

          {/* Services Grid - Enhanced */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-200/50 relative overflow-hidden h-full"
                  whileHover={{
                    scale: 1.03,
                    y: -10,
                    boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Animated Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-95 transition-all duration-500 rounded-3xl`}
                  />

                  {/* Enhanced Floating Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/60 rounded-full"
                        style={{
                          left: `${10 + i * 8}%`,
                          top: `${5 + (i % 4) * 20}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.2, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors duration-500">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                      {service.description}
                    </p>

                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          
        </div>
      </section>

      

     
    </div>
  )
}

export default Home
