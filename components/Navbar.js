'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Portfolio Link */}
          <Link 
            href="/" 
            className="font-mono text-2xl md:text-3xl tracking-widest hover:text-green-400 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`relative text-white font-mono text-lg group ${
                  pathname === path ? 'text-green-400' : ''
                }`}
              >
                <span className="z-10">{label}</span>
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-green-400 transition-all duration-300 ease-in-out"></span>
                <span className="absolute top-0 right-0 w-0 group-hover:w-[2px] h-[2px] bg-white opacity-0 group-hover:opacity-100 animate-blink transition-all duration-500"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`${
            isOpen ? 'max-h-64' : 'max-h-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="pb-3 space-y-1">
            {navigationLinks.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`block px-3 py-2 rounded-md text-base font-mono hover:bg-gray-800 hover:text-green-400 transition-colors ${
                  pathname === path ? 'text-green-400 bg-gray-800' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}