"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce MakeUp Website",
    description: "A fully responsive e-commerce platform with secure payment gateways, allowing users to shop seamlessly with a dynamic product catalog.",
    image: "/makeup.jpg", // Replace with actual image path
    link: "https://github.com/SakeenaMajeed/e-commerce", // Replace with actual project link
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills, projects, and contact information with an interactive design, helping to attract potential clients.",
    image: "/sak.png", // Replace with actual image path
    link: "https://sakeenamajeed.netlify.app", // Replace with actual project link
  },
  {
    title: "#D Portfolio",
    description: "A modern social media application with real-time chat, notifications, and a sleek UI, connecting users globally.",
    image: "/na.png", // Replace with actual image path
    link: "https://3-d-portfolio-kappa-self.vercel.app/", // Replace with actual project link
  },
  {
    title: "Dynamic Countdown Timer",
    description: "A dynamic countdown timer that counts down to specific events with stylish UI and customizable options.",
    image: "/counttimes.png", // Replace with actual image path
    link: "https://count-down-timer-hzsx.vercel.app/ ", // Replace with actual project link
  },
  {
    title: "Next.js First Portfolio",
    description: "A showcase of my first projects built with Next.js, emphasizing modern design and responsive features.",
    image: "/next.jsp.png", // Replace with actual image path
    link: "https://milestone-2-cfbp.vercel.app/", // Replace with actual project link
  },
  {
    title: "Stylish Calculator",
    description: "A sleek and modern calculator app with a user-friendly interface and advanced features.",
    image: "/calcu.png", // Replace with actual image path
    link: "https://stylish-calculatorxyz.vercel.app/", // Replace with actual project link
  },
  {
    title: "Hackathon Project",
    description: "An innovative solution developed during a hackathon, focused on solving real-world problems with technology.",
    image: "/hackathon.jpg", // Replace with actual image path
    link: "https://milestone-5-unique-path-and-shareable-link-lac.vercel.app/", // Replace with actual project link
  },
  {
    title: "ATM Machine",
    description: "A simulated ATM interface that allows users to perform banking operations virtually, enhancing their understanding of ATM functions.",
    image: "/ATMM.jpg", // Replace with actual image path
    link: "https://github.com/SakeenaMajeed/ATM-Machine.git", // Replace with actual project link
  },
  {
    title: "Calculator App",
    description: "A basic calculator application with essential mathematical operations, designed for ease of use.",
    image: "/cs.jpg", // Replace with actual image path
    link: "https://github.com/SakeenaMajeed/simple_calculator.git", // Replace with actual project link
  },
  {
    title: "Word Counter",
    description: "An application that counts the number of words and characters in a given text, ideal for writers and students.",
    image: "/w3.jpg", // Replace with actual image path
    link: "https://github.com/SakeenaMajeed/word-_counter.git", // Replace with actual project link
  },
  {
    title: "Student Management System",
    description: "A comprehensive system for managing student information, including attendance, grades, and schedules.",
    image: "/s.jpg", // Replace with actual image path
    link: "https://github.com/SakeenaMajeed/student-management-system.git", // Replace with actual project link
  },
  {
    title: "University Management System",
    description: "An all-in-one platform for managing university operations, student data, and academic resources.",
    image: "/Uni.jpg", 
    link: "https://github.com/SakeenaMajeed/university_management_system.git", 
  },
  {
    title: "Number Guessing Game",
    description: "A fun and interactive game where users guess a number within a range, improving their logic and number skills.",
    image: "/NumberGuessing.jpg", 
    link: "https://github.com/SakeenaMajeed/number_guessing_1.git", 
  },
  {
    title: "Quiz App",
    description: "An engaging quiz application that tests users on various subjects, featuring multiple-choice questions and instant feedback.",
    image: "/QuizApp.jpg", 
    link: "https://github.com/SakeenaMajeed/cli_quiz-app.git", 
  },
  {
    title: "Currency Converter",
    description: "A currency conversion tool that provides real-time exchange rates and allows users to convert between different currencies.",
    image: "/cur.jpg", 
    link: "https://github.com/SakeenaMajeed/Currency-Converter.git", 
  },
  {
    title: "OOP My Bank",
    description: "An Object-Oriented Programming project that simulates a banking system with account management and transactions.",
    image: "/OOPBank.jpg",
    link: "https://github.com/SakeenaMajeed/oop_mybank.git", 
  },
  {
    title: "Adventure Game",
    description: "An interactive text-based adventure game where users make choices that affect the story outcome.",
    image: "/ture.jpg", 
    link: "https://github.com/SakeenaMajeed/Adventure_Game.git", 
  {
    title: "Sign-In Page",
    description: "A modern and user-friendly sign-in page template, focusing on simplicity and usability.",
    image: "https://th.bing.com/th/id/R.090ad4b6fc3164dea75c4cadf29ff803?rik=elFO%2fWaSMSww1w&pid=ImgRaw&r=0", 
    link: "https://github.com/SakeenaMajeed/signin-page-.git", 
  },
  {
    title: "Eid Mubarak Greeting",
    description: "A festive greeting page designed to celebrate Eid, featuring colorful graphics and a heartfelt message.",
    image: "/Eid Mubarak.jpg", 
    link: "https://github.com/SakeenaMajeed/Eid-Mubarak.git", 
  },
  {
    title: "Todo List",
    description: "A simple yet effective todo list application that helps users manage their tasks efficiently.",
    image: "/TodoList.jpg", 
    link: "https://github.com/SakeenaMajeed/Todos.git", 
  },
  {
    title: "Next.js Assignment",
    description: "A simple yet effective todo list application that helps users manage their tasks efficiently.",
    image: "/Ass.png", 
    link: "https://next-js-class-assignment-sakeena-majeed.vercel.app/", 
  },
];

const Project = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white p-10">
      {/* Bubbles Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => {
          const isWhiteBubble = Math.random() < 0.5; 
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

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline mt-4 inline-block"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
