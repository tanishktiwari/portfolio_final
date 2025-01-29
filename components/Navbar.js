'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Terminal, Shield, Code, Cpu, Radio } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrambledText, setScrambledText] = useState('');
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Text scramble effect for hover
  useEffect(() => {
    if (isOpen) {
      const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/';
      const interval = setInterval(() => {
        const randomText = Array(3).fill(0)
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join('');
        setScrambledText(randomText);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const navigationLinks = [
    { path: '/', label: 'Terminal', icon: Terminal },
    { path: '/about', label: 'Identity', icon: Shield },
    { path: '/experience', label: 'Exploits', icon: Code },
    { path: '/projects', label: 'Systems', icon: Cpu },
    { path: '/contact', label: 'Network', icon: Radio }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 text-green-500 z-50 shadow-lg backdrop-blur-sm border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Glitch overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {scrambledText}
          </div>
        </div>

        <div className="flex justify-between items-center h-16 relative">
          {/* Portfolio Link with targeting frame */}
          <Link
            href="/"
            className="font-mono text-2xl md:text-3xl tracking-widest group relative"
          >
            <span className="relative z-10 group-hover:text-green-400 transition-all duration-300">
              [0xSYSTEM]
            </span>
            <div className="absolute -inset-2 border border-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-green-500/40" />
            <div className="absolute top-0 left-0 w-1 h-1 bg-green-500 group-hover:animate-ping" />
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-green-500 group-hover:animate-ping" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                href={path}
                className={`relative text-green-500 font-mono text-lg group flex items-center space-x-2 ${
                  pathname === path ? 'text-green-400' : ''
                }`}
              >
                <Icon className="w-4 h-4 group-hover:animate-pulse" />
                <span className="z-10">{label}</span>
                {/* Targeting frame on hover */}
                <div className="absolute -inset-2 border border-green-500/0 group-hover:border-green-500/20 transition-all duration-300" />
                {/* Scan line */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                {/* Active indicator */}
                {pathname === path && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-green-500 animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-md hover:bg-green-500/10 transition-colors relative group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute -inset-2 border border-green-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`${
            isOpen ? 'max-h-96' : 'max-h-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out relative`}
        >
          <div className="pb-3 space-y-1">
            {navigationLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                href={path}
                className={`group flex items-center space-x-3 px-4 py-2 rounded-sm text-base font-mono relative ${
                  pathname === path ? 'text-green-400 bg-green-500/5' : ''
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
                {/* Hover effect */}
                <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-all duration-300" />
                <div className="absolute left-0 top-0 w-1 h-0 bg-green-500/50 group-hover:h-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Matrix-like scan line effect */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent animate-scan" />

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </nav>
  );
}