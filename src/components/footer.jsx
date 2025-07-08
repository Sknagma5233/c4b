"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/code4bharat" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/company/code4bharat" },
    { icon: <FaTwitter />, url: "https://twitter.com/code4bharat" },
    { icon: <FaYoutube />, url: "https://youtube.com/code4bharat" }
  ];

  const footerLinks = [
    { title: "Featured Links", links: ["Home", "About Us", "Our Services", "Our Clients", "Our Approach"] },
    { title: "Policies", links: ["About C4B", "Contact", "Terms & Conditions", "Privacy Policies", "Product Pricing", "Cancellation Policy", "Refund Policy", "Shipping And Delivery Policy"] },
    { title: "Contact Us", links: ["Call: +91 9594430295", "Email:code4bharat@gmail.com", "Office: Off BKC, Mumbai, India 400070"] },
  ];

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-blue-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8"
    >  
      <div className="max-w-7xl mx-auto">
        {/* Logo and Description Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <img 
                src="/logos/codeBharatLogo.webp" 
                alt="Code4Bharat Logo"
                className="h-12 w-auto object-contain"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-sm md:text-base"
            >
              Code4Bharat is at the forefront of providing world-class IT solutions, helping businesses globally leverage technology for growth and success.
            </motion.p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-2/3">
            {footerLinks.map((section, i) => (
              <motion.div 
                key={section.title}
                custom={i}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-blue-400">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <motion.li 
                      key={link}
                      custom={j}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-sm md:text-base"
                    >
                      {link.includes(":") ? (
                        <span className="text-gray-300">
                          {link.split(":")[0]}:<br className="sm:hidden"/>
                          <span className="text-white"> {link.split(":")[1]}</span>
                        </span>
                      ) : (
                        <Link href="#" className="text-gray-300 hover:text-blue-300 transition-colors">
                          {link}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              className="flex space-x-6   order-2 md:order-1"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400 text-xl transition-colors"
                  aria-label={social.url.split('.com/')[1]}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-xs sm:text-sm text-center order-1 md:order-2"
            >
              © 2011-{new Date().getFullYear()} Code for Bharat. All Rights Reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;