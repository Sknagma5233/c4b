"use client";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./navbar";
import gsap from "gsap";

function Services() {
  const [expandedCard, setExpandedCard] = useState(null);
  const cardRefs = useRef([]);
  const overlayRefs = useRef([]);
  const triggerRefs = useRef([]);
  const textRef = useRef(null);

  const services = [
    {
      image: "https://code4bharat.com/images/Web%20development.png",
      title: "Web Development",
      shortDesc:
        "We create responsive and dynamic websites tailored to your business needs.",
      fullDesc:
        "We deliver exceptional web development services tailored to meet business needs. From responsive websites to complex web apps, we do it all.",
      features: [
        "Custom Website Development",
        "E-commerce Platforms",
        "CMS Systems",
        "Web Applications",
      ],
      shortDes: "All websites we create are SEO-optimized and user-friendly.",
      date: "Launched: January 2023",
    },
    {
      image: "https://code4bharat.com/images/App%20development.png",
      title: "App Development",
      shortDesc: "Native and cross-platform mobile apps",
      fullDesc:
        "From concept to deployment, we build stunning mobile apps for both iOS and Android using React Native and Flutter.",
      features: [
        "iOS & Android Apps",
        "React Native / Flutter",
        "UI/UX Design",
        "Backend Integration",
        "Deployment",
      ],
      shortDes: "Our apps are fast, scalable, and user-friendly.",
      date: "Launched: March 2023",
    },
    {
      image: "https://code4bharat.com/images/UIUX%20design.png",
      title: "UI/UX Design",
      shortDesc: "Beautiful, intuitive interfaces",
      fullDesc:
        "Our designers create pixel-perfect UI/UX using Figma and Adobe XD, ensuring top-notch user experience.",
      features: [
        "Figma / Adobe XD",
        "User Research",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
      shortDes: "We blend aesthetics with functionality.",
      date: "Launched: May 2023",
    },
  ];

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  const toggleCard = (index) => {
    if (expandedCard === index) {
      gsap.to(overlayRefs.current[index], {
        scale: 0,
        duration: 1.2,
        ease: "power2.inOut",
      });
      gsap.to(cardRefs.current[index], {
        height: 300,
        duration: 0.8,
      });
      gsap.to(triggerRefs.current[index], {
        y: 0,
        duration: 0.8,
      });
      setExpandedCard(null);
    } else {
      if (expandedCard !== null) {
        gsap.to(overlayRefs.current[expandedCard], {
          scale: 0,
          duration: 0.8,
        });
        gsap.to(cardRefs.current[expandedCard], {
          height: 300,
          duration: 0.6,
        });
        gsap.to(triggerRefs.current[expandedCard], {
          y: 0,
          duration: 0.6,
        });
      }
      setExpandedCard(index);
      gsap.fromTo(
        overlayRefs.current[index],
        { scale: 0 },
        { scale: 25, duration: 1.2, ease: "power2.out" }
      );
      gsap.to(triggerRefs.current[index], {
        y: -400,
        duration: 0.8,
      });
      gsap.to(cardRefs.current[index], {
        height: "auto",
        duration: 0.8,
        delay: 0.2,
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[url('https://via.placeholder.com/1600x1000')] bg-cover bg-center bg-fixed">
      <Navbar />

      <div className="w-full mt-10 flex justify-center items-center bg-white/90 py-10">
        <p
          ref={textRef}
          className="text-4xl font-bold text-blue-600 text-center"
        >
          Our Services - Empowering Businesses Through Innovation
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-10">
          Our Services
        </h1>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-6 rounded-xl w-full max-w-[1280px]">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg relative flex flex-col transition-all duration-300 overflow-hidden"
                style={{ height: expandedCard === index ? "auto" : "300px" }}
              >
                <div
                  ref={(el) => (overlayRefs.current[index] = el)}
                  className="absolute right-0 bottom-0 bg-blue-500/20 z-10"
                  style={{
                    width: "4rem",
                    height: "2rem",
                    borderRadius: "100%",
                    transformOrigin: "right bottom",
                    scale: 0,
                  }}
                />

                <div className="relative z-20 h-full flex flex-col">
                  <div className="h-[150px] flex-shrink-0 bg-white  flex justify-center items-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-contain h-full p-4"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {service.shortDesc}
                    </p>
                    <p className="text-gray-500 text-xs">{service.date}</p>
                  </div>

                  {expandedCard === index && (
                    <div className="px-4 pb-6">
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

                  {expandedCard === index && (
                    <div
                      onClick={() => toggleCard(index)}
                      className="absolute right-4 top-4 z-30"
                    >
                      <button className="bg-blue-500 text-white  px-3 py-3 rounded-md text-xs font-medium">
                        Back
                      </button>
                    </div>
                  )}

                  {/* ✅ Semi-circle Read More */}
               {expandedCard !== index && (
  <div
    ref={(el) => (triggerRefs.current[index] = el)}
    onClick={() => toggleCard(index)}
    className="absolute bottom-0 -right-8 w-28 h-12 md:h-14 rounded-t-full bg-blue-500 hover:bg-blue-600 flex justify-center items-center cursor-pointer z-30"
  >
    <span className="text-white text-[10px] font-medium pr-3">
      Read More
    </span>
  </div>
)}


                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;
