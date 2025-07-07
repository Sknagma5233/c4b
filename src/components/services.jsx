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
      shortDesc: "We create responsive and dynamic websites tailored to your business needs.",
      fullDesc: "We deliver exceptional web development services tailored to meet business needs. From responsive websites to complex web apps, we do it all.",
      features: [
        "Custom Website Development",
        "E-commerce Platforms",
        "CMS Systems",
        "Web Applications",
      ],
      shortDes: "All websites we create are SEO-optimized and user-friendly.",
      date: "Launched: January 2023"
    },
    {
      image: "https://code4bharat.com/images/App%20development.png",
      title: "App Development",
      shortDesc: "Native and cross-platform mobile apps",
      fullDesc: "From concept to deployment, we build stunning mobile apps for both iOS and Android using React Native and Flutter.",
      features: [
        "iOS & Android Apps",
        "React Native / Flutter",
        "UI/UX Design",
        "Backend Integration",
        "Deployment"
      ],
      shortDes: "Our apps are fast, scalable, and user-friendly.",
      date: "Launched: March 2023"
    },
    {
      image: "https://code4bharat.com/images/UIUX%20design.png",
      title: "UI/UX Design",
      shortDesc: "Beautiful, intuitive interfaces",
      fullDesc: "Our designers create pixel-perfect UI/UX using Figma and Adobe XD, ensuring top-notch user experience.",
      features: [
        "Figma / Adobe XD",
        "User Research",
        "Prototyping",
        "Design Systems",
        "Usability Testing"
      ],
      shortDes: "We blend aesthetics with functionality.",
      date: "Launched: May 2023"
    }
  ];

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: "power2.out"
    });
  }, []);

  const toggleCard = (index) => {
    if (expandedCard === index) {
      // Collapse
      gsap.to(overlayRefs.current[index], {
        scale: 0,
        duration: 1.2,
        ease: "power2.inOut"
      });
      gsap.to(cardRefs.current[index], {
        height: 300,
        duration: 0.8
      });
      gsap.to(triggerRefs.current[index], {
        y: 0,
        duration: 0.8
      });
      setExpandedCard(null);
    } else {
      // Collapse any open card first
      if (expandedCard !== null) {
        gsap.to(overlayRefs.current[expandedCard], {
          scale: 0,
          duration: 0.8
        });
        gsap.to(cardRefs.current[expandedCard], {
          height: 300,
          duration: 0.6
        });
        gsap.to(triggerRefs.current[expandedCard], {
          y: 0,
          duration: 0.6
        });
      }
      // Expand the clicked card
      setExpandedCard(index);
      gsap.fromTo(overlayRefs.current[index], 
        { scale: 0 },
        { scale: 25, duration: 1.2, ease: "power2.out" }
      );
      gsap.to(triggerRefs.current[index], {
        y: -400,
        duration: 0.8
      });
      gsap.to(cardRefs.current[index], {
        height: "auto",
        duration: 0.8,
        delay: 0.2
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
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-13 bg-blue-800 my-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg relative flex flex-col transition-all duration-300 overflow-hidden"
              style={{ height: expandedCard === index ? "auto" : "300px" }}
            >
              {/* Animated overlay */}
              <div
                ref={el => overlayRefs.current[index] = el}
                className="absolute right-0 bottom-0 bg-blue-500/20 z-10"
                style={{
                  width: '4rem',
                  height: '2rem',
                  borderRadius: '100%',
                  transformOrigin: 'right bottom',
                  scale: 0
                }}
              />

              {/* Card Content */}
              <div className="relative z-20 h-full flex flex-col">
                {/* Image */}
                <div className="h-[150px] flex-shrink-0 bg-gray-100 flex justify-center items-center">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="object-contain h-full p-4"
                  />
                </div>

                {/* Basic Info */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{service.shortDesc}</p>
                  <p className="text-gray-500 text-xs">{service.date}</p>
                </div>

                {/* Full info (on expand) */}
                {expandedCard === index && (
                  <div className="px-4 pb-6">
                    <p className="text-gray-600 text-sm mb-3">{service.fullDesc}</p>
                    <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mb-3">
                      {service.features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="text-gray-600 text-sm">{service.shortDes}</p>
                  </div>
                )}

                {/* Back button */}
                {expandedCard === index && (
                  <div 
                    onClick={() => toggleCard(index)}
                    className="absolute right-4 top-4 z-30"
                  >
                    <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-3 py-1 rounded-md text-xs font-medium">
                      Back
                    </button>
                  </div>
                )}

                {/* Read More Button */}
                {expandedCard !== index && (
                  <div
                    ref={el => triggerRefs.current[index] = el}
                    onClick={() => toggleCard(index)}
                    className="absolute -right-10 bottom-0 w-32 h-14 rounded-t-full bg-blue-500 hover:bg-blue-600 flex justify-center items-center cursor-pointer z-30"
                  >
                    <span className="text-white text-sm font-medium">Read More</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
