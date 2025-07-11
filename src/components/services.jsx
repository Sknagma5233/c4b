"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import gsap from "gsap";

function Services() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedCard, setExpandedCard] = useState(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);
  const triggerRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      image: "https://code4bharat.com/images/Web%20development.png",
      title: "Web Development",
      shortDesc: "We create responsive and dynamic websites tailored to your business needs.",
      fullDesc: "We deliver exceptional web development services tailored to meet business needs. From responsive websites to complex web apps, we do it all.",
      features: ["Custom Website Development", "E-commerce Platforms", "CMS Systems", "Web Applications"],
      shortDes: "All websites we create are SEO-optimized and user-friendly.",
      date: "Launched: January 2023",
    },
    {
      image: "https://code4bharat.com/images/Mobile%20Application%20Development.png",
      title: "Mobile Application Development",
      shortDesc: "Building intuitive and robust mobile applications for Android and iOS",
      fullDesc: "Code4Bharat focuses on creating intuitive and robust mobile applications for both Android and iOS platforms.",
      features: [
        "In the mobile-first world, we help businesses build high-performing mobile apps",
        "That engage users and provide seamless experiences across platforms.",
        "Our team specializes in both iOS and Android development",
      ],
      shortDes: "Building intuitive and robust mobile applications for Android and iOS.",
      date: "Launched: March 2023",
    },
    {
      image: "https://code4bharat.com/images/It%20consulting.png",
      title: "IT Consulting",
      shortDesc: "Expert IT consulting to optimize your technology strategies and infrastructure",
      fullDesc: "Our IT consulting services guide businesses through their digital transformation journey. Whether you need advice on infrastructure or cloud solutions, our experts provide strategic insights and solutions.",
      features: ["Technology Strategy Consulting", "Cloud Migration Solutions", "System Integration and Automation"],
      shortDes: "We blend aesthetics with functionality.",
      date: "Launched: May 2023",
    },
    {
      image: "https://code4bharat.com/images/E%20commerce%20solution.png",
      title: "E-Commerce Solutions",
      shortDesc: "Comprehensive e-commerce solutions to build and grow your online store.",
      fullDesc: "Code4Bharat empowers businesses with end-to-end e-commerce solutions, providing everything from storefront setup to payment gateway integration.",
      features: [
        "Our expertise in building secure, scalable e-commerce platforms",
        "Ensures that your business is always ready to grow and meet customer demands efficiently."
      ],
      shortDes: "All websites we create are SEO-optimized and user-friendly.",
      date: "Launched: March 2023",
    },
    {
      image: "https://code4bharat.com/images/Offshore%20development%20service.png",
      title: "Offshore Development Services",
      shortDesc: "Scalable offshore development services with skilled professionals.",
      fullDesc: "We provide top-quality offshore development services, working closely with international clients to deliver high-quality software solutions. Our highly skilled team takes on complex development projects, offering cost-effective solutions without compromising on quality.",
      features: ["Dedicated Offshore Development Teams", "Project-Based Development", "Ongoing Support and Maintenance"],
      shortDes: "Scalable offshore development services with skilled professionals.",
      date: "Launched: September 2023",
    },
    {
      image: "https://code4bharat.com/images/Digital%20Marketing%20Solution.png",
      title: "Digital Marketing Solutions",
      shortDesc: "Strategic digital marketing solutions to enhance your online presence.",
      fullDesc: "Beyond development, Code4Bharat helps businesses reach their target audiences through comprehensive digital marketing services, including SEO, social media management, and content marketing.",
      features: [
        "We ensure that your digital footprint is optimized for visibility and growth in an increasingly competitive market."
      ],
      shortDes: "Strategic digital marketing solutions to enhance your online presence.",
      date: "Launched: November 2023",
    },
    {
      image: "https://code4bharat.com/images/connection.png",
      title: "Artificial Intelligence",
      shortDesc: "Leveraging AI technologies to create intelligent solutions for your business.",
      fullDesc: "Code4Bharat involves integrating AI technologies to enhance business operations and drive innovation.",
      features: ["Machine Learning Models", "Natural Language Processing", "AI-Powered Automation", "Data Analysis and Prediction"],
      shortDes: "Our AI Solutions are tailored to meet your specific business needs, ensuring efficiency and competitive advantage.",
      date: "Launched: January 2024",
    },
    {
      image: "https://code4bharat.com/images/It%20consulting.png",
      title: "Analytics",
      shortDesc: "Data analytics services to help you make informed business decisions.",
      fullDesc: "Code4Bharat provides comprehensive data analytics services to help you derive actionable insights from your data.",
      features: ["Data Warehousing", "Business Intelligence", "Predictive Analytics", "Data Visualization"],
      shortDes: "Our analytics solutions empower you to make data-driven decisions, enhancing your business strategies and performance.",
      date: "Launched: March 2024",
    },
  ];

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  const toggleCard = (index) => {
    if (expandedCard === index) {
      gsap.to(overlayRefs.current[index], {
        scale: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });
      setExpandedCard(null);
    } else {
      if (expandedCard !== null) {
        gsap.to(overlayRefs.current[expandedCard], {
          scale: 0,
          duration: 0.6,
        });
      }
      setExpandedCard(index);
      gsap.fromTo(
        overlayRefs.current[index],
        { scale: 0 },
        { scale: 25, duration: 1, ease: "power2.out" }
      );
    }
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      <Navbar />
      <div className="relative z-10">
       <div className=" w-full h-screen flex justify-evenly items-center relative">
        <div className="absolute left-6 bg-yellow-100 w-[40vw] h-[40vw]">
          <h2 className="text-3xl capitalize text-center">our services empowering businesses through innovation</h2>
        </div>
        <div className="absolute right-[13vw] z-2">
          <img  className="w-[35vw] h-[40w] rounded-md" src="https://code4bharat.com/_next/image?url=%2Fimages%2Fservices2.jpg&w=828&q=75"/>
        </div>
        <div className="bg-blue-900 w-[40vw] h-[40vw] rounded-full absolute -right-52"></div>
       </div>

  

        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">
            Our Services
          </h1>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 rounded-xl w-full max-w-[1280px]">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg relative flex flex-col transition-all duration-300 overflow-hidden"
                  style={{ height: "430px" }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    ref={(el) => (overlayRefs.current[index] = el)}
                    className="absolute right-0 text-white bottom-0 bg-blue-500/20 z-10"
                    style={{
                      width: "4rem",
                      height: "2rem",
                      borderRadius: "100%",
                      transformOrigin: "right bottom",
                      transform: "scale(0)",
                    }}
                  />
                  <div className="relative z-20 h-full flex flex-col">
                    <div className="h-[150px] flex-shrink-0 bg-white flex justify-center items-center">
                      <img
                        src={service.image}
                        alt={`Service - ${service.title}`}
                        className="object-contain h-full p-4"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      {expandedCard !== index && (
                        <div className="p-4 text-center">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {service.shortDesc}
                          </p>
                          <p className="text-gray-500 text-xs">{service.date}</p>
                        </div>
                      )}
                      {expandedCard === index && (
                        <div className="flex-1 overflow-y-auto px-4 pb-4">
                          <p className="text-gray-600 text-sm mb-3">
                            {service.fullDesc}
                          </p>
                          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mb-3">
                            {service.features.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                          <p className="text-gray-600 text-sm">
                            {service.shortDes}
                          </p>
                        </div>
                      )}
                    </div>
                    {expandedCard !== index ? (
                      <div
                        ref={(el) => (triggerRefs.current[index] = el)}
                        onClick={() => toggleCard(index)}
                        className="absolute -right-9 bottom-0 w-32 h-12 md:h-16 rounded-t-full bg-blue-500 hover:bg-blue-500 flex items-center justify-center cursor-pointer z-30 transition-colors"
                      >
                        <span className="text-xs absolute right-12 bottom-3 md:bottom-6 text-center font-medium text-white">
                          Read More
                        </span>
                      </div>
                    ) : (
                      <div
                        onClick={() => toggleCard(index)}
                        className="absolute right-4 top-4 z-30"
                      >
                        <button className="bg-blue-500 text-white hover:bg-blue-500 px-3 py-1 rounded-md text-xs font-medium transition-colors">
                          Back
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
