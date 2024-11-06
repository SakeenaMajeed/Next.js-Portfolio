"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen h-full flex flex-col md:flex-row items-center justify-between text-white overflow-y-auto">
      <div className="flex-1 h-full flex items-center justify-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/profile-pic (3).png"
            alt="Sakeena"
            width={350}
            height={350}
          />
        </motion.div>
      </div>

      <div className="flex-1 flex flex-col items-start justify-center p-10 z-20">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide animate-color"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {"Hey, I'm Sakeena."}
        </motion.h1>
        <motion.p className="mt-4 text-base md:text-lg lg:text-xl text-gray-300">
          A passionate Frontend Developer
        </motion.p>
        <motion.a
          href="https://github.com/SakeenaMajeed"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          View My GitHub
        </motion.a>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        ></motion.div>
      </div>

      <div className="particles z-10">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
        <div className="bubble bubble6"></div>
        <div className="bubble bubble7"></div>
        <div className="bubble bubble8"></div>
      </div>
    </div>
  );
};

export default Hero;
