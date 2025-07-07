"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import gsap from "gsap";

function Contactus() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Refs for GSAP animation
  const containerRef = useRef(null);
  const emailEmojiRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const formItemsRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initialize GSAP animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Container fade in
    tl.from(containerRef.current, {
      opacity: 0,
      duration: 0.5,
    });

    // Email emoji animation
    tl.from(emailEmojiRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });

    // Text animations with staggered delay
    tl.from([headingRef.current, subheadingRef.current], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });

    // Form items animation
    tl.from(
      formItemsRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
      },
      "-=0.5"
    );

    // Continuous animation for email emoji
    gsap.to(emailEmojiRef.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Hover effects for form elements
    formItemsRef.current.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.02,
          duration: 0.3,
        });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
        });
      });
    });

    return () => {
      // Clean up event listeners
      formItemsRef.current.forEach((item) => {
        if (item) {
          item.removeEventListener("mouseenter", () => {});
          item.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  // Add form item to ref array
  const addToFormItemsRef = (el) => {
    if (el && !formItemsRef.current.includes(el)) {
      formItemsRef.current.push(el);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Animated Background Pattern - Fixed throughout */}
      <div className="fixed inset-0 z-0">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
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
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
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
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
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
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
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
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
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
              transition={{
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
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

      <div
        ref={containerRef}
        className="w-full px-4 py-6" // Full width container
      >
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="py-8 flex flex-col items-center justify-center gap-4 mb-8">
            {/* Animated Email Emoji */}
            <div ref={emailEmojiRef} className="text-9xl">
              📧
            </div>

            {/* Animated Text */}
            <h1
              ref={headingRef}
              className="text-3xl md:text-4xl font-bold text-center text-gray-800"
            >
              Contact us — we're here to help. Reach out anytime!
            </h1>

            <p
              ref={subheadingRef}
              className="text-md text-gray-600 text-center max-w-2xl"
            >
              Have questions or want to discuss a project? Fill out the form
              below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>

        {/* Full-width gradient form container */}
        <div className="lg:w-[70vw] mx-auto bg-gradient-to-r from-white to-blue-300 py-8 rounded-md">
          <div className="max-w-6xl mx-auto">
            {/* Contact Form Section - Responsive Layout */}
            <form
              ref={formRef}
              className="py-6 px-6 flex flex-col lg:flex-row gap-8"
            >
              {/* Left Column - Only visible on large screens */}
              <div className="lg:w-1/4 flex flex-col gap-8">
                {/* First Name */}
                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    First Name
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Last Name
                  </label>
                  <div className="input-container">
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="input-container">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="input-container">
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none py-2 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Only visible on large screens */}
              <div className="lg:w-1/2 flex flex-col gap-8">
                {/* Services */}
                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    What service are you looking for?
                  </label>
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

                {/* How did you hear about us? */}
                <div ref={addToFormItemsRef}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Where did you hear about us?
                  </label>
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

                {/* Project Info */}
                <div ref={addToFormItemsRef} className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Tell us more about your project
                  </label>
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

        {/* Full width elements below the columns */}
        <div className="max-w-6xl lg:w-[70vw] mx-auto px-4 ">
          {/* File Upload */}
          <div ref={addToFormItemsRef} className="mt-6">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Upload a file (optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input type="file" className="hidden" id="file-upload" />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center justify-center"
              >
                <svg
                  className="w-12 h-12 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, DOC, JPG, PNG up to 10MB
                </p>
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Note: File uploads are not sent via WhatsApp.
            </p>
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
