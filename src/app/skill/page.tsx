"use client";
import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
const skills = [
  {
    title: "HTML",
    icon: <SiHtml5 className="h-16 w-16 text-orange-500" />,
  },
  {
    title: "CSS",
    icon: <SiCss3 className="h-16 w-16 text-blue-500" />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript className="h-16 w-16 text-yellow-500" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-blue-500" />,
  },
  {
    title: "Next.js",
    icon: <img src="/OIP.jpeg" alt="Next.js Logo" className="h-16 w-16" />,
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16 text-teal-500" />,
  },
];

const Skill = () => {
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
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold">{skill.title}</h3>
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

export default Skill;
