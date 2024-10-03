"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi"; // React Icon for the mobile menu
import { motion } from "framer-motion"; // Import motion from framer-motion

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
      setIsOpen(false); // Close mobile menu after selection
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-gray-900 p-4 md:p-6 shadow-lg">
      {/* Logo Section with Bounce Animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white"
        whileHover={{ scale: 1.1, color: "#ff0080" }}
      >
        <Link href="/" className="hover:text-pink-300 transition duration-300">
          Sakeena
        </Link>
      </motion.div>

      {/* Mobile Menu Icon for small screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle mobile menu" // Add an aria-label for accessibility
        >
          <FiMenu className="w-8 h-8 hover:text-pink-600 transition-colors duration-300 ease-in-out" />
        </button>
      </div>

      {/* Navigation Links with Staggered Reveal Animation */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-gray-900 p-4 md:relative md:flex md:gap-x-6 md:bg-transparent md:p-0 transition-all duration-500 ease-in-out`}
      >
        <ul className="flex flex-col gap-6 text-pink-600 md:flex-row md:ml-auto">
          {["home", "about", "project", "skill", "services", "contact"].map(
            (link, idx) => (
              <li
                key={idx}
                className={`relative group transition-all transform duration-500 ease-in-out delay-${idx * 100}`}
              >
                <a
                  onClick={() => handleScrollToSection(link)}
                  className="text-3xl md:text-lg text-pink-300 group-hover:text-blue-400 cursor-pointer transition-colors duration-300 ease-in-out"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
                {/* Sliding Line on Hover */}
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
