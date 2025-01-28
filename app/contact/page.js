"use client"

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Loader2, 
  Send,
  ArrowRight 
} from 'lucide-react';

const DataStreamLoader = () => (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 binary-rain opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <Loader2 className="w-16 h-16 text-green-500 animate-spin" />
        <div className="mt-4 font-mono text-green-500 animate-pulse">
          ESTABLISHING CONNECTION_
        </div>
      </div>
    </div>
  </div>
);

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    console.log('Input changed:', e.target.id, e.target.value);
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        loading: false,
        error: 'TRANSMISSION FAILED. RETRY SEQUENCE INITIATED.',
        success: false
      });
    }
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "#",
      color: "hover:text-green-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-green-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:your@email.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      {loading && <DataStreamLoader />}
      {status.loading && <DataStreamLoader />}
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center mb-12">
          <Terminal className="w-8 h-8 mr-4 text-green-500 animate-pulse" />
          <h1 className="text-4xl font-bold text-green-500 font-mono">ESTABLISH_CONNECTION_</h1>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`flex items-center space-x-2 text-green-500 ${link.color} 
                          transform transition-all duration-300 hover:scale-110
                          border border-green-500 rounded-full px-6 py-3
                          hover:shadow-lg hover:shadow-green-500/50`}
              >
                {link.icon}
                <span className="font-mono">{link.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>

          <div className="relative">
            <div className="form-grid-animation absolute inset-0 opacity-10" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-green-500 font-mono">
                  IDENTIFIER_
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-green-500 bg-black text-green-500 
                           shadow-sm focus:border-green-400 focus:ring-green-400 font-mono
                           placeholder-green-700 relative z-10"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-500 font-mono">
                  COMMUNICATION_CHANNEL_
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-green-500 bg-black text-green-500 
                           shadow-sm focus:border-green-400 focus:ring-green-400 font-mono
                           placeholder-green-700 relative z-10"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-500 font-mono">
                  TRANSMISSION_CONTENT_
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-green-500 bg-black text-green-500 
                           shadow-sm focus:border-green-400 focus:ring-green-400 font-mono
                           placeholder-green-700 relative z-10"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full bg-green-500 text-black py-3 px-6 rounded-lg hover:bg-green-400 
                         transition-all duration-300 font-mono flex items-center justify-center space-x-2
                         hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 relative z-10
                         ${status.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Send className="w-5 h-5" />
                <span>{status.loading ? 'TRANSMITTING...' : 'INITIATE_TRANSMISSION'}</span>
              </button>

              {status.error && (
                <div className="text-red-500 text-center mt-4 font-mono animate-pulse relative z-10">
                  {status.error}
                </div>
              )}
              {status.success && (
                <div className="text-green-500 text-center mt-4 font-mono animate-pulse relative z-10">
                  TRANSMISSION_SUCCESSFUL
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}