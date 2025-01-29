"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, ExternalLink, Terminal, Shield, Cpu, ArrowRight, Loader2 } from 'lucide-react';

const ButtonLoader = () => (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
    <div className="text-green-500 flex flex-col items-center px-4 text-center">
      <Loader2 className="w-8 h-8 sm:w-12 sm:h-12 animate-spin" />
      <p className="mt-4 font-mono text-sm sm:text-base">Processing Request...</p>
    </div>
  </div>
);

const MatrixBackground = () => {
  return (
    <div className="fixed inset-0 bg-black opacity-20 pointer-events-none">
      <div className="absolute inset-0 overflow-hidden matrix-animation" />
    </div>
  );
};

const GlitchText = ({ children, className = "" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="glitch-text">{children}</span>
      <span className="glitch-text-alt" aria-hidden="true">{children}</span>
      <span className="glitch-text-alt2" aria-hidden="true">{children}</span>
    </div>
  );
};

const HackerLoader = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    const messages = [
      'Loading MERN modules...',
      'Connecting to MongoDB...',
      'Starting Express server...',
      'Rendering React components...'
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prev => prev + 2);
        if (progress % 25 === 0 && currentIndex < messages.length) {
          setStatus(messages[currentIndex]);
          currentIndex++;
        }
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
      <div className="text-green-500 font-mono w-full max-w-xs sm:w-80">
        <Terminal className="w-8 h-8 sm:w-12 sm:h-12 mb-4 mx-auto animate-pulse" />
        <div className="mb-4 text-sm sm:text-base">{status}</div>
        <div className="h-2 bg-gray-800 rounded">
          <div 
            className="h-full bg-green-500 rounded transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-right text-sm sm:text-base">{progress}%</div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    window.location.href = '/projects';
  };

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Fully responsive e-commerce platform with real-time inventory management",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time analytics dashboard for social media management",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "AWS"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Task Management System",
      description: "Enterprise task management system with real-time collaboration",
      tech: ["MERN Stack", "GraphQL", "JWT", "Docker"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/300"
    }
  ];

  const experience = [
    {
      company: "Foxnet Securitas Private Limited",
      role: "Senior MERN Stack Developer",
      period: "2022 - Present",
      description: "Leading development of enterprise applications using MERN stack. Implementing microservices architecture and real-time features. Mentoring junior developers and establishing best practices.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "AWS", "Docker"]
    },
    {
      company: "e2e Research",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed scalable web applications using MERN stack. Implemented CI/CD pipelines and automated testing. Collaborated with cross-functional teams to deliver high-quality solutions.",
      technologies: ["MERN Stack", "Redux", "Jest", "Jenkins", "TypeScript"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono pt-8 sm:pt-16">
      {loading && <HackerLoader />}
      {buttonLoading && <ButtonLoader />}
      <MatrixBackground />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20 relative">
        <div className="flex items-center mb-8 sm:mb-12">
          <Shield className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 animate-pulse" />
          <GlitchText className="text-2xl sm:text-3xl md:text-4xl font-bold">MERN PROJECTS</GlitchText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
          {projects.map((project, index) => (
            <div key={index} 
                 className="bg-gray-900 border border-green-500 rounded-lg overflow-hidden 
                          transform transition-all duration-300 hover:scale-105 hover:border-green-400
                          hover:shadow-lg hover:shadow-green-500/50">
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-green-400">{project.title}</h2>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 bg-green-900/30 border border-green-500 rounded-full text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={project.github}
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
                    onClick={(e) => {
                      e.preventDefault();
                      setButtonLoading(true);
                      setTimeout(() => setButtonLoading(false), 1000);
                    }}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> Source
                  </Link>
                  <Link
                    href={project.demo}
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base"
                    onClick={(e) => {
                      e.preventDefault();
                      setButtonLoading(true);
                      setTimeout(() => setButtonLoading(false), 1000);
                    }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="flex items-center mb-6 sm:mb-8">
            <Cpu className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 animate-pulse" />
            <GlitchText className="text-xl sm:text-2xl md:text-3xl font-bold">WORK EXPERIENCE</GlitchText>
          </div>
          <div className="space-y-4 sm:space-y-8">
            {experience.map((job, index) => (
              <div key={index} 
                   className="bg-gray-900 border border-green-500 rounded-lg p-4 sm:p-6
                            transform transition-all duration-300 hover:border-green-400">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-green-400">{job.company}</h3>
                    <p className="text-green-300 text-sm sm:text-base">{job.role}</p>
                  </div>
                  <span className="text-gray-500 text-sm sm:text-base mt-2 sm:mt-0">{job.period}</span>
                </div>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 bg-green-900/30 border border-green-500 rounded-full text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-16">
          <button
            onClick={handleButtonClick}
            className="group flex items-center space-x-2 bg-green-500 hover:bg-green-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

export const styles = `
@keyframes matrix {
  0% { background-position: 0% 0%; }
  100% { background-position: 0% 100%; }
}

.matrix-animation {
  background: linear-gradient(0deg, rgba(32, 194, 14, 0.1) 25%, transparent);
  background-size: 100% 400%;
  animation: matrix 20s linear infinite;
}

.glitch-text {
  position: relative;
  display: inline-block;
}

.glitch-text-alt, .glitch-text-alt2 {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch-text-alt {
  animation: glitch 0.4s cubic-bezier(.25, .46, .45, .94) both infinite;
  color: #0ff;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.glitch-text-alt2 {
  animation: glitch 0.4s cubic-bezier(.25, .46, .45, .94) reverse both infinite;
  color: #f0f;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}
`;