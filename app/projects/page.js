"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  ExternalLink,
  Terminal,
  ArrowRight,
  Contact,
} from "lucide-react";

const CircuitLoader = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
        {/* Circuit paths */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M10,50 L40,50 L45,40 L55,60 L60,50 L90,50"
              className="stroke-green-500 stroke-2 fill-none animate-circuit"
            />
            <path
              d="M50,10 L50,40 L40,45 L60,55 L50,60 L50,90"
              className="stroke-green-500 stroke-2 fill-none animate-circuit-delay"
            />
          </svg>
        </div>
        {/* Pulse circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500/20 rounded-full animate-ping" />
          <div className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-500/40 rounded-full animate-pulse" />
          <div className="absolute w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="absolute mt-24 sm:mt-28 md:mt-32 font-mono text-sm sm:text-base md:text-lg text-green-500">
        INITIALIZING PROJECTS...
      </div>
    </div>
  );
};

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = async (path) => {
    setButtonLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    window.location.href = path;
  };

  const projects = [
    {
      title: "Support Ticket Management System",
      description:
        "Web application with user login, personalized panels, and role-based access for efficient support ticket management.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "TailWindcss",
        "API Integration",
        "Real Time Notification",
      ],
      github: "#",
      demo: "https://console.deskassure.com",
      image: "./deskAssure.jpg",
    },
    {
      title: "Social Network App",
      description:
        "Feature-rich social platform with real-time messaging and content sharing",
      tech: ["React", "Socket.io", "Node.js", "Redis"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/300",
    },
    {
      title: "Project Management Tool",
      description:
        "Collaborative project management system with real-time updates",
      tech: ["React", "GraphQL", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {loading && <CircuitLoader />}
      {buttonLoading && <CircuitLoader />}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 space-y-4 sm:space-y-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-500 font-mono flex items-center">
            <Terminal className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4 animate-pulse" />
            <span className="animate-pulse">PROJECTS_</span>
          </h1>
          <button
            onClick={() => handleNavigation("/contact")}
            className="group flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <Contact className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Contact</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-green-500 rounded-lg overflow-hidden
                       transform transition-all duration-300 hover:scale-105 hover:border-green-400
                       hover:shadow-lg hover:shadow-green-500/50"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-green-400">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-green-900/30 border border-green-500 rounded-full text-xs sm:text-sm text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={project.github}
                    onClick={(e) => {
                      e.preventDefault();
                      setButtonLoading(true);
                      setTimeout(() => setButtonLoading(false), 1000);
                    }}
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> Code
                  </Link>
                  <Link
                    href={project.demo}
                    onClick={(e) => {
                      e.preventDefault();
                      setButtonLoading(true);
                      setTimeout(() => {
                        setButtonLoading(false);
                        window.open(project.demo, '_blank');
                      }, 1000);
                    }}
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Add to your global CSS (keep the same animations)
const styles = `
@keyframes circuit {
  0% {
    stroke-dasharray: 0 100;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dasharray: 100 100;
    opacity: 0;
  }
}

.animate-circuit {
  animation: circuit 3s linear infinite;
}

.animate-circuit-delay {
  animation: circuit 3s linear infinite;
  animation-delay: 1.5s;
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px #22c55e,
                0 0 10px #22c55e,
                0 0 15px #22c55e;
  }
  50% {
    box-shadow: 0 0 20px #22c55e,
                0 0 25px #22c55e,
                0 0 30px #22c55e;
  }
}
`;