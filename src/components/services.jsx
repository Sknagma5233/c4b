"use client"
import React, { useRef, useState ,useEffect} from 'react';
import Navbar from './navbar';
import {motion} from 'framer-motion'
import gsap from 'gsap';

function Services() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);
  const triggerRefs = useRef([]);

  useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

   const services = [
    {
      title: "Web Development",
      shortDesc: "Build modern, responsive websites",
      fullDesc: "We create blazing fast websites with React, Next.js and modern CSS. Our web solutions include e-commerce platforms, corporate websites, and web applications with full backend integration.",
      features: [
        "React/Next.js development",
        "Responsive design",
        "API integration",
        "Performance optimization",
        "SEO friendly"
      ]
    },
    {
      title: "App Development",
      shortDesc: "Native and cross-platform mobile apps",
      fullDesc: "From concept to App Store, we build beautiful mobile applications for both iOS and Android using React Native and Flutter for cross-platform solutions.",
      features: [
        "iOS & Android apps",
        "React Native/Flutter",
        "UI/UX design",
        "Backend integration",
        "App store deployment"
      ]
    },
    {
      title: "UI/UX Design",
      shortDesc: "Beautiful, intuitive interfaces",
      fullDesc: "Our design team creates pixel-perfect interfaces with Figma and Adobe XD, focusing on user experience and conversion optimization.",
      features: [
        "Figma/Adobe XD designs",
        "User research",
        "Prototyping",
        "Design systems",
        "Usability testing"
      ]
    }
  ];
  
  const toggleCard = (index) => {
    if (expandedCard === index) {
      // Collapse animation
      gsap.to(overlayRefs.current[index], {
        scale: 0,
        borderRadius: "100%",
        width: "4rem",
        height: "2rem",
        x: "-1.5rem",
        y: "-1rem",
        duration: 1.2,
        ease: "power2.inOut"
      });
      
      gsap.to(cardRefs.current[index], {
        height: 200,
        duration: 0.8,
        ease: "power2.inOut"
      });
      
      gsap.to(triggerRefs.current[index], {
        y: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });
      
      setExpandedCard(null);
    } else {
      // First collapse any open card
      if (expandedCard !== null) {
        gsap.to(overlayRefs.current[expandedCard], {
          scale: 0,
          borderRadius: "100%",
          width: "4rem",
          height: "2rem",
          x: "-1.5rem",
          y: "-1rem",
          duration: 0.8,
          ease: "power2.inOut"
        });
        gsap.to(cardRefs.current[expandedCard], {
          height: 200,
          duration: 0.6,
          ease: "power2.inOut"
        });
        gsap.to(triggerRefs.current[expandedCard], {
          y: 0,
          duration: 0.6,
          ease: "power2.inOut"
        });
      }
      
      // Then expand the new card
      setExpandedCard(index);
      
      // Bubble expansion animation
      gsap.fromTo(overlayRefs.current[index], 
        {
          scale: 0,
          opacity: 1,
          transformOrigin: "right bottom",
          borderRadius: "100%",
          width: "4rem",
          height: "2rem",
          x: "-1.5rem",
          y: "-1rem"
        },
        { 
          scale: 25,
          borderRadius: "0.75rem",
          duration: 1.2,
          ease: "power2.out"
        }
      );
      
      // Move trigger to top
      gsap.to(triggerRefs.current[index], {
        y: -378,
        duration: 0.8,
        ease: "power2.out"
      });
      
      gsap.to(cardRefs.current[index], {
        height: "auto",
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out"
      });
    }
  };


  return (
     <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-screen relative overflow-hidden">
      <Navbar />

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
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-white mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden relative"
              style={{ height: expandedCard === index ? "auto" : "200px" }}
            >
              {/* Blue overlay */}
              <div 
                ref={el => overlayRefs.current[index] = el}
                className="absolute right-0 bottom-0 bg-blue-500/20 z-10"
                style={{
                  width: '4rem',
                  height: '2rem',
                  borderRadius: '100% 100% 0 0',
                  scale: 0,
                  transformOrigin: 'right bottom'
                }}
              />
              
              {/* Back button (top right, only shown when expanded) */}
              {expandedCard === index && (
                <div 
                  onClick={() => toggleCard(index)}
                  className="absolute right-4 top-4 z-30"
                >
                  <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                    Back
                  </button>
                </div>
              )}
              
              <div className="relative z-20 p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                
                {expandedCard === index && (
                  <div className="animate-fadeIn">
                    <p className="text-gray-600 mb-4">{service.fullDesc}</p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Read More half-circle (bottom right, only shown when collapsed) */}
              {!expandedCard && (
                <div 
                  onClick={() => toggleCard(index)}
                  className="absolute -right-9 bottom-0 w-32 h-18 rounded-t-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center cursor-pointer z-30"
                >
                  <span className="text-xs absolute right-12 bottom-6 text-center font-medium text-white">
                    Read More
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;