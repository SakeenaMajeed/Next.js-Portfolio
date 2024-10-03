"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Responsive Web Design",
    description:
      "Designing websites that work seamlessly on all devices, including mobile, tablet, and desktop.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user interfaces and experiences.",
  },
  {
    title: "Canva Design Services",
    description:
      "Creating visually stunning graphics and designs using Canva for various needs.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving website loading speed and performance with image optimization and lazy loading.",
  },
  {
    title: "Accessibility Enhancements",
    description:
      "Making websites accessible for all users, regardless of their abilities.",
  },
  {
    title: "JavaScript Development",
    description:
      "Building dynamic and interactive features using JavaScript and frameworks like React or Vue.",
  },
];

const Services = () => {
  return (
    <section className="relative bg-gray-900 text-white p-10">
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => {
          const isWhiteBubble = Math.random() < 0.5;
          return (
            <div
              key={index}
              className={`bubble absolute rounded-full ${
                isWhiteBubble ? "bg-white" : "bg-pink-500"
              } opacity-60 animate-bubble`}
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

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105"
            >
              <FaCheckCircle className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-lg mt-2">{service.description}</p>
            </div>
          ))}
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
    </section>
  );
};

export default Services;
