"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import gsap from "gsap";
import { usePathname } from "next/navigation";

function Contactus() {
  // Refs declarations
  const containerRef = useRef(null);
  const emailEmojiRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const formItemsRef = useRef([]);
  const formRef = useRef(null);
  const pathname = usePathname();

  // State for mount tracking
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state and ensure visibility
  useEffect(() => {
    setIsMounted(true);
    if (containerRef.current) {
      containerRef.current.style.opacity = '1';
      containerRef.current.style.visibility = 'visible';
    }
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!isMounted) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onStart: () => {
        gsap.set(containerRef.current, { 
          opacity: 1,
          visibility: 'visible'
        });
      }
    });

    // Container animation
    tl.from(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      immediateRender: false,
      onStart: () => {
        gsap.set(containerRef.current, { visibility: 'visible' });
      }
    });

    // Email emoji animation
    tl.from(emailEmojiRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    });

    // Text animations
    tl.from([headingRef.current, subheadingRef.current], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });

    // Form items animation
    tl.from(formItemsRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.2
    }, "-=0.5");

    // Continuous emoji animation
    gsap.to(emailEmojiRef.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Mouse enter/leave handlers
    const enterHandlers = [];
    const leaveHandlers = [];

    formItemsRef.current.forEach((item, index) => {
      const enterHandler = () => {
        gsap.to(item, { scale: 1.02, duration: 0.3 });
      };
      const leaveHandler = () => {
        gsap.to(item, { scale: 1, duration: 0.3 });
      };

      item.addEventListener("mouseenter", enterHandler);
      item.addEventListener("mouseleave", leaveHandler);

      enterHandlers[index] = enterHandler;
      leaveHandlers[index] = leaveHandler;
    });

    // Cleanup function
    return () => {
      formItemsRef.current.forEach((item, index) => {
        if (item) {
          item.removeEventListener("mouseenter", enterHandlers[index]);
          item.removeEventListener("mouseleave", leaveHandlers[index]);
        }
      });
    };
  }, [pathname, isMounted]);

  // Form item ref adder
  const addToFormItemsRef = (el) => {
    if (el && !formItemsRef.current.includes(el)) {
      formItemsRef.current.push(el);
    }
  };

  // Component return
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[url('/images/bgImage.png')] bg-cover bg-center bg-fixed">
      <Navbar />
      
      <div 
        ref={containerRef} 
        className="w-full px-4 py-6 opacity-100"
        style={{ 
          visibility: isMounted ? 'visible' : 'hidden',
          opacity: isMounted ? 1 : 0
        }}
      >
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="py-8 flex flex-col items-center justify-center gap-4 mb-8">
            <div ref={emailEmojiRef} className="text-9xl">📧</div>
            <h1 ref={headingRef} className="text-3xl md:text-4xl font-bold text-center text-gray-800">
              Contact us — we're here to help. Reach out anytime!
            </h1>
            <p ref={subheadingRef} className="text-md text-gray-600 text-center max-w-2xl">
              Have questions or want to discuss a project? Fill out the form below.
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:w-[70vw] mx-auto bg-gradient-to-r from-white to-blue-300 py-8 rounded-md">
          <div className="max-w-6xl mx-auto">
            <form ref={formRef} className="py-6 px-6 flex flex-col lg:flex-row gap-8">
              {/* Left Column */}
              <div className="lg:w-1/4 flex flex-col gap-8">
                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <div className="input-container">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <div className="input-container">
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:w-1/2 flex flex-col gap-8">
                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">What service are you looking for?</label>
                  <div className="input-container">
                    <select className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors appearance-none">
                      <option>Select a service</option>
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>Consulting</option>
                      <option>Design</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Where did you hear about us?</label>
                  <div className="input-container">
                    <select className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors appearance-none">
                      <option>Select an option</option>
                      <option>Friend</option>
                      <option>Social Media</option>
                      <option>Search Engine</option>
                      <option>Advertisement</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div ref={addToFormItemsRef} className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Tell us more about your project</label>
                  <div className="input-container h-full">
                    <textarea
                      placeholder="Provide detailed information about your project..."
                      className="w-full h-full min-h-[150px] border-2 border-gray-200 rounded-lg p-3 bg-white/70 focus:outline-none focus:border-blue-500 transition-colors"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* File Upload Section */}
        <div className="max-w-6xl lg:w-[70vw] mx-auto px-4">
          <div ref={addToFormItemsRef} className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Upload a file (optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input type="file" className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-1">PDF, DOC, JPG, PNG up to 10MB</p>
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-1">Note: File uploads are not sent via WhatsApp.</p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95"
              onMouseEnter={(e) => {
                gsap.to(e.target, {
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                  duration: 0.3,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  scale: 1,
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  duration: 0.3,
                });
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;