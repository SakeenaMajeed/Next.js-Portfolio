"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => {
          const isWhiteBubble = Math.random() < 0.5; // 50% chance for white bubbles
          return (
            <div
              key={index}
              className={`bubble absolute rounded-full ${isWhiteBubble ? 'bg-white' : 'bg-pink-500'} opacity-60 animate-bubble`}
              style={{
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-${Math.random() * 100}px`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          );
        })}
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-10 bg-black bg-opacity-70 rounded-lg shadow-lg max-w-4xl text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/profile-pic (3).png"
            alt="Sakeena"
            className="object-cover rounded-full shadow-lg"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-xl mb-6">
     {"Peace be upon you! I am Sakeena, and I am 16 years old. I started my first coding journey at 'GIAIC,' where I learned TypeScript. Then, through self-study, I also learned HTML and CSS. Thankfully, I have great confidence in myself and can create very good websites. My passion is frontend development and design, and I strive to learn new skills every day." }  </p>
       

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://www.linkedin.com/in/sakeena-majeed-86b58732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/SakeenaMajeed" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/_sakeena_majeed/?igsh=cHZ4MHl3MTF4dDcz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.facebook.com/sukaina.majeed.98?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
            <FaFacebook size={30} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .bubble {
          position: absolute;
          bottom: 0;
          border-radius: 50%;
          animation: rise 4s linear infinite;
        }

        @keyframes rise {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default About;
