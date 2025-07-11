"use client"
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb, faCode, faRocket, faHandshake, faStar } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import {
  HiArrowRight,
  HiCog,
  HiDeviceMobile,
  HiGlobeAlt,
  HiShoppingCart,
  HiChartBar,
  HiTrendingUp,
  HiSparkles,
} from "react-icons/hi"
import Navbar from "../components/navbar"

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const waveRef1 = useRef(null);
  const waveRef2 = useRef(null);
  const waveRef3 = useRef(null);

  const timelineItems = [
    {
      number: "01",
      label: "Plan",
      icon: faLightbulb,
      title: "Understanding your needs",
      desc: "At Code4bharat, we begin every project with a consultation to align our solutions with your business objectives and technology needs.",
      position: "left",
    },
    {
      number: "02",
      label: "Build",
      icon: faCode,
      title: "Customized Development",
      desc: "Our client-centered development process is flexible, allowing us to customize our approach for projects ranging from simple websites to complex enterprise applications",
      position: "right",
    },
    {
      number: "03",
      label: "Adapt",
      icon: faRocket,
      title: "Agile Methodology",
      desc: "We employ an agile development methodology to stay adaptable to changes in project scope, enabling incremental progress and allowing for your feedback throughout the process.",
      position: "left",
    },
    {
      number: "04",
      label: "Improve",
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
      gradient: "from-blue-700 to-blue-900",
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
      gradient: "from-blue-800 to-blue-950",
      features: ["Digital Strategy", "Cloud Migration", "System Integration", "Tech Consulting"],
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Code4Bharat provides complete e-commerce solutions, including storefront setup and payment integration, to create secure and scalable platforms.",
      icon: HiShoppingCart,
      gradient: "from-blue-700 to-blue-900",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Analytics"],
    },
    {
      title: "Offshore Development",
      description:
        "We provide high-quality, cost-effective software solutions for international clients, including dedicated teams and ongoing support.",
      icon: HiChartBar,
      gradient: "from-blue-600 to-blue-800",
      features: ["Dedicated Teams", "Quality Assurance", "24/7 Support", "Cost-Effective"],
    },
    {
      title: "Digital Marketing",
      description:
        "Code4Bharat offers comprehensive digital marketing services such as SEO, social media management, and content marketing to boost your online presence.",
      icon: HiTrendingUp,
      gradient: "from-blue-800 to-blue-950",
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
    <div className="relative bg-gradient-to-br from-white to-blue-50 min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Content */}
      <section className="relative h-screen flex items-center justify-start px-6 lg:px-20">
        <div className="max-w-4xl text-left z-10 -mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-900 leading-tight mb-6">
            Boost Your Business with <br />
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Cutting-Edge IT Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 leading-relaxed font-medium">
            Unlock your full potential with our tailored technology services. From innovative software development to robust cybersecurity, we empower your business to thrive in the digital age with cutting-edge solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 flex items-center">
              Get Started Today! <HiArrowRight className="inline ml-2 w-5 h-5" />
            </button>
            <button className="bg-white text-blue-800 border-2 border-blue-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Multiple GSAP River Animation Layers */}
        <svg
          ref={waveRef1}
          className="absolute bottom-0 left-0 w-full h-[500px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1E40AF"
            fillOpacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,186.7C480,192,600,192,720,186.7C840,181,960,171,1080,176C1200,181,1320,203,1380,213.3L1440,224L1440,320L0,320Z"
          ></path>
        </svg>

        <svg
          ref={waveRef2}
          className="absolute bottom-0 left-0 w-full h-[520px] opacity-70"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1D4ED8"
            fillOpacity="1"
            d="M0,200L80,190C160,180,320,160,480,170C640,180,800,220,960,210C1120,200,1280,140,1360,110L1440,80L1440,320L0,320Z"
          ></path>
        </svg>

        <svg
          ref={waveRef3}
          className="absolute bottom-0 left-0 w-full h-[540px] opacity-50"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#3B82F6"
            fillOpacity="1"
            d="M0,240L60,230C120,220,240,200,360,210C480,220,600,260,720,250C840,240,960,200,1080,190C1200,180,1320,200,1380,210L1440,220L1440,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* How it works - Responsive Design */}
      <section className="py-20 px-4 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              How it works
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Our proven process delivers exceptional results for every client
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>

            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center justify-between mb-20 ${item.position === "left" ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl px-6 py-4 text-center shadow-lg">
                    <p className="text-lg font-bold text-white">{item.number}</p>
                    <p className="text-sm text-blue-100">{item.label}</p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-2/3 bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-xl border border-blue-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <FontAwesomeIcon icon={item.icon} className="text-xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">
                      {item.title} <span className="ml-2 text-blue-600">&rarr;</span>
                    </h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazing Services Section */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Background Pattern for Services */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="servicesGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1E40AF" strokeWidth="0.5" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servicesGrid)" />
            <motion.circle
              cx="150"
              cy="150"
              r="80"
              fill="none"
              stroke="#1D4ED8"
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
              stroke="#3B82F6"
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
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                Our Services
              </h2>
              <HiSparkles className="w-8 h-8 text-blue-600" />
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
                  className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 relative overflow-hidden h-full"
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
                      className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-500`}
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

                    {/* Features */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-blue-700 group-hover:text-blue-200 mb-2">KEY FEATURES:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="w-4 h-4 text-blue-600 group-hover:text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-sm text-gray-700 group-hover:text-blue-100">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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