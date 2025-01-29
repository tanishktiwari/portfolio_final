'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, FileText, Github, Linkedin, Mail, Code, Terminal, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const MatrixLoader = ({ isLoading }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!isLoading) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const hackSymbols = '{}[]()<>$#@%&*!?/\\|+=~^';
    
    const alphabet = katakana + latin + nums + hackSymbols;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = Array(Math.floor(columns)).fill(canvas.height);

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0F0';
      context.font = fontSize + 'px "Fira Code", monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      <canvas ref={canvasRef} className="relative z-10" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 flex items-center justify-center z-20"
      >
        <motion.div
          className="px-6 py-3 bg-black/50 border border-green-500 rounded-lg backdrop-blur-md"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.p 
            className="text-green-500 font-mono"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            INITIALIZING_SYSTEM_ACCESS...
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const CustomCursor = ({ mousePosition }) => {
  return (
    <>
      {/* Primary high-tech cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: "tween", duration: 0.1 }}
      >
        {/* Hexagonal targeting frame */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="animate-[spin_4s_linear_infinite]">
            <path d="M20 2L35 11V29L20 38L5 29V11L20 2Z" stroke="#00ff00" strokeWidth="0.5" strokeOpacity="0.5"/>
            <path d="M20 6L31 12.5V27.5L20 34L9 27.5V12.5L20 6Z" stroke="#00ff00" strokeWidth="0.5" strokeOpacity="0.3"/>
          </svg>
        </div>

        {/* Dynamic scan lines */}
        <div className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2">
          {/* Horizontal scan line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent transform -translate-y-1/2 animate-[scanline_2s_ease-in-out_infinite]" />
          {/* Vertical scan line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-green-500 to-transparent transform -translate-x-1/2 animate-[scanline_2s_ease-in-out_infinite]" />
        </div>

        {/* Targeting elements */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2">
          {/* Corner brackets */}
          <div className="absolute left-0 top-0 w-3 h-3 border-l-2 border-t-2 border-green-500 opacity-80" />
          <div className="absolute right-0 top-0 w-3 h-3 border-r-2 border-t-2 border-green-500 opacity-80 translate-x-[20px] -translate-y-[3px]" />
          <div className="absolute left-0 bottom-0 w-3 h-3 border-l-2 border-b-2 border-green-500 opacity-80 -translate-x-[3px] translate-y-[20px]" />
          <div className="absolute right-0 bottom-0 w-3 h-3 border-r-2 border-b-2 border-green-500 opacity-80 translate-x-[20px] translate-y-[20px]" />
        </div>

        {/* Central targeting system */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2">
          {/* Precision dot */}
          <div className="absolute w-1.5 h-1.5 bg-green-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-50" />
          </div>
          
          {/* Technical rings */}
          <div className="absolute w-8 h-8 border border-green-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]">
            <div className="absolute top-1/2 left-0 w-1 h-1 bg-green-500 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Data stream effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-40"
          animate={{ 
            x: mousePosition.x, 
            y: mousePosition.y,
          }}
          transition={{ 
            type: "tween", 
            duration: 0.1 + (i * 0.05),
          }}
        >
          <div className="absolute -translate-x-1/2 -translate-y-1/2">
            <div 
              className="w-1 h-1 bg-green-500/40 rounded-full"
              style={{
                filter: `blur(${i * 0.5}px)`,
                opacity: 1 - (i * 0.2)
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Analysis radius */}
      <motion.div
        className="fixed pointer-events-none z-30"
        animate={{ 
          x: mousePosition.x, 
          y: mousePosition.y,
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="absolute w-32 h-32 border border-green-500/20 rounded-full -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 border-t-2 border-green-500/20 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes scanline {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [glitchText, setGlitchText] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techStack = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Terminal,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB'],
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Globe,
      title: 'Other',
      skills: ['Git', 'AWS'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '3+', color: 'from-green-400 to-emerald-400' },
    { label: 'Years Experience', value: '1+', color: 'from-emerald-400 to-teal-400' },
    { label: 'Technologies', value: '5+', color: 'from-teal-400 to-green-400' },
    { label: 'Satisfied Clients', value: '5+', color: 'from-green-400 to-emerald-400' }
  ];

  const handleNavigation = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(path);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-green-500 font-mono" style={{ cursor: 'none' }}>
      <MatrixLoader isLoading={isLoading} />
      <CustomCursor mousePosition={mousePosition} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          <div className="space-y-8 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-green-500/20 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Full Stack Developer
                  <Terminal className="w-4 h-4" />
                </span>
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold glitch-text"
                onMouseEnter={() => setGlitchText(true)}
                onMouseLeave={() => setGlitchText(false)}
              >
                <span className={`relative ${glitchText ? 'animate-glitch' : ''}`}>
                  Tanishk Tiwari
                  {glitchText && (
                    <>
                      <span className="absolute top-0 left-0 -translate-x-1 translate-y-1 text-red-500 opacity-50">Tanishk Tiwari</span>
                      <span className="absolute top-0 left-0 translate-x-1 -translate-y-1 text-blue-500 opacity-50">Tanishk Tiwari</span>
                    </>
                  )}
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto sm:mx-0"
            >
              Crafting exceptional digital experiences with modern technologies.
              Specialized in building full-stack applications with the MERN stack.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center sm:justify-start gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('/projects')}
                className="group inline-flex items-center justify-center px-6 py-3 bg-orange-600 rounded-lg hover:bg-orange-700 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    window.open('/Tanishk_s_Resume.pdf', '_blank');
                    setIsLoading(false);
                  }, 1500);
                }}
                className="group inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all backdrop-blur-sm"
              >
                <span>Resume</span>
                <FileText className="ml-2 group-hover:rotate-6 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-300">Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {techStack.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setActiveCard(index)}
                  onHoverEnd={() => setActiveCard(null)}
                  className="relative p-4 rounded-lg backdrop-blur-sm cursor-pointer overflow-hidden"
                >
                  <div className="relative z-10 flex items-center gap-4">
                    <item.icon className="w-6 h-6 text-orange-400" />
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {item.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-sm bg-white/10 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10`}
                    animate={{
                      opacity: activeCard === index ? 0.2 : 0.1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-4 rounded-lg backdrop-blur-sm text-center"
              >
                <div className="relative z-10">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-lg`}
                  whileHover={{ opacity: 0.2 }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center sm:justify-start items-center gap-6"
          >
            {[ 
              { icon: Github, href: 'https://github.com/tanishktiwari' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/tanishktiwari/' },
              { icon: Mail, href: 'mailto:tanishktiwari12@gmail.com' }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
            <style jsx global>{`
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
        .animate-glitch {
          animation: glitch 500ms infinite;
        }
      `}</style>
    </div>
  );
}
