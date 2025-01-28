"use client"

import React, { useState } from 'react';
import { Terminal, Code, Server, Database, Layers, Braces } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Loading Overlay Component
const LoadingOverlay = ({ isLoading, onClose }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-green-500 font-mono">
        <div className="flex flex-col items-center space-y-4">
          <Terminal className="w-12 h-12 animate-pulse" />
          <div className="text-center space-y-2">
            <div className="typewriter overflow-hidden whitespace-nowrap border-r-2 border-green-500 animate-typing">
              Initializing system...
            </div>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 border border-green-500 rounded hover:bg-green-500 hover:bg-opacity-20 transition-colors"
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

    // Simulate loading for 3 seconds
    setTimeout(() => {
      setLoading(false);
      router.push('/projects');  // Using router.push instead of navigate
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16 bg-black text-green-500">
      {/* Add the loading overlay */}
      <LoadingOverlay isLoading={loading} onClose={() => setLoading(false)} />
      
      {/* Add the animation keyframes */}
      <style jsx global>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        .animate-typing {
          animation: typing 2s steps(20) infinite;
        }
      `}</style>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-2 mb-8">
          <Terminal className="w-8 h-8" />
          <h1 className="text-4xl font-mono font-bold">dev_profile</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 opacity-20 blur-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhY2tlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              className="relative rounded-lg shadow-lg border-2 border-green-500"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-green-500 rounded-lg opacity-50"></div>
          </div>
          
          <div className="font-mono">
            <div className="mb-6 bg-gray-900 p-4 rounded-lg border border-green-500">
              <p className="text-lg mb-2">{'>>'} npm start career.js</p>
              <p className="text-lg">
                Passionate MERN stack developer exploring the endless possibilities of web development.
                Currently diving deep into modern web technologies while building scalable applications.
                Learning and growing every day, because in tech, being a student never ends.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" />
              Tech Stack
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Make cards clickable */}
              <div 
                className="bg-gray-900 p-4 rounded-lg border border-green-500 cursor-pointer transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-green-500/20"
                onClick={handleCardClick}
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Frontend Mastery
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Braces className="w-4 h-4" />
                    React.js / Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    JavaScript / TypeScript
                  </li>
                </ul>
              </div>
              
              <div 
                className="bg-gray-900 p-4 rounded-lg border border-green-500 cursor-pointer transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-green-500/20"
                onClick={handleCardClick}
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  Backend Arsenal
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    Node.js / Express
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    MongoDB / Mongoose
                  </li>
                  <li className="flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    RESTful APIs
                  </li>
                </ul>
              </div>

              <div 
                className="bg-gray-900 p-4 rounded-lg border border-green-500 sm:col-span-2 cursor-pointer transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-green-500/20"
                onClick={handleCardClick}
              >
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  Currently Learning
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Advanced TypeScript Patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <Database className="w-4 h-4" />
                    System Design & Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <Layers className="w-4 h-4" />
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