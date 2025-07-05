"use client"
import React, { useRef, useState } from 'react';
import Navbar from './navbar';
import gsap from 'gsap';

function Services() {
  const [expandedCard, setExpandedCard] = useState(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);
  const triggerRefs = useRef([]);
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
    <div className="w-full min-h-screen bg-[url('/images/bgImage.png')] bg-cover bg-center bg-fixed">
      <Navbar />
      
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