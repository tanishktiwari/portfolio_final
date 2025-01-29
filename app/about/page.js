"use client"

import React, { useState } from 'react';
import { Terminal, Code, Server, Database, Layers, Braces } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Loading Overlay Component
const LoadingOverlay = ({ isLoading, onClose }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-green-500 font-mono px-4">
        <div className="flex flex-col items-center space-y-4">
          <Terminal className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-pulse" />
          <div className="text-center space-y-2">
            <div className="typewriter overflow-hidden whitespace-nowrap border-r-2 border-green-500 animate-typing text-sm sm:text-base">
              Initializing system...
            </div>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-3 py-1.5 sm:px-4 sm:py-2 border border-green-500 rounded text-sm sm:text-base hover:bg-green-500 hover:bg-opacity-20 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCardClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/projects');
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16 bg-black text-green-500">
      <LoadingOverlay isLoading={loading} onClose={() => setLoading(false)} />
      
      <style jsx global>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        .animate-typing {
          animation: typing 2s steps(20) infinite;
        }

        @media (max-width: 640px) {
          .animate-typing {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <Terminal className="w-6 h-6 sm:w-8 sm:h-8" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold">dev_profile</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-green-500 opacity-20 blur-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhY2tlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              className="relative rounded-lg shadow-lg border-2 border-green-500 w-full h-48 sm:h-64 md:h-80 object-cover"
            />
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-24 sm:w-32 h-24 sm:h-32 border-2 border-green-500 rounded-lg opacity-50"></div>
          </div>
          
          <div className="font-mono order-1 lg:order-2">
            <div className="mb-6 bg-gray-900 p-3 sm:p-4 rounded-lg border border-green-500">
              <p className="text-base sm:text-lg mb-2">{'>>'} npm start career.js</p>
<p className="text-sm sm:text-base md:text-lg">
  Passionate ReactJS developer exploring the endless possibilities of building dynamic and responsive web applications. 
  Currently deepening my expertise in ReactJS while leveraging the power of the MERN stack to build full-stack solutions. 
  Constantly learning and evolving, because in tech, the journey of learning never stops.
</p>

            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 sm:w-6 sm:h-6" />
              Tech Stack
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div 
                className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-green-500 cursor-pointer transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-green-500/20"
                onClick={handleCardClick}
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <Layers className="w-4 h-4" />
                  Frontend Mastery
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Braces className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    React.js / Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    JavaScript / TypeScript
                  </li>
                </ul>
              </div>
              
              <div 
                className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-green-500 cursor-pointer transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-green-500/20"
                onClick={handleCardClick}
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <Server className="w-4 h-4" />
                  Backend Arsenal
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Node.js / Express
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    MongoDB / Mongoose
                  </li>
                  <li className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    RESTful APIs
                  </li>
                </ul>
              </div>

              <div 
                className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-green-500 sm:col-span-2 cursor-pointer transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-green-500/20"
                onClick={handleCardClick}
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <Terminal className="w-4 h-4" />
                  Currently Learning
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Advanced TypeScript Patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    System Design & Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Web3 Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}