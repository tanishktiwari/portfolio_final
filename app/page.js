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
    const symbols = '{}[]()$#@%&*';

    const alphabet = katakana + latin + nums + symbols;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = Array(Math.floor(columns)).fill(canvas.height);

    const draw = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0F0';
      context.font = fontSize + 'px monospace';

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
      <canvas
        ref={canvasRef}
        className="relative z-10"
      />
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
            SYSTEM LOADING...
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);  // Set it to true initially
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Simulate loading for 2 seconds after the component mounts
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);  // Set loading to false after 2 seconds
    }, 2000); 

    return () => clearTimeout(loadingTimeout);  // Clear timeout on component unmount
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

  const fireParticles = Array.from({ length: 6 }).map((_, i) => ({
    size: 12 - i * 2,
    delay: i * 0.01,
    opacity: 1 - (i * 0.15),
    blur: i * 2
  }));

  const techStack = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind'],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Terminal,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Other',
      skills: ['Git', 'AWS', 'Docker'],
      color: 'from-pink-500 to-purple-500'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '20+', color: 'from-orange-400 to-red-400' },
    { label: 'Years Experience', value: '3+', color: 'from-red-400 to-pink-400' },
    { label: 'Technologies', value: '15+', color: 'from-pink-400 to-purple-400' },
    { label: 'Satisfied Clients', value: '25+', color: 'from-purple-400 to-orange-400' }
  ];

  const handleNavigation = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(path);
    }, 2000);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white"
      style={{ cursor: 'none' }}  // Hides the default cursor
    >
      <MatrixLoader isLoading={isLoading} />

      {fireParticles.map((particle, index) => (
        <motion.div
          key={index}
          className="fixed rounded-full pointer-events-none mix-blend-screen z-50 backdrop-blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            filter: `blur(${particle.blur}px)`,
            background: `radial-gradient(circle at center, 
              rgba(255,160,0,${particle.opacity}) 0%,
              rgba(255,100,0,${particle.opacity * 0.8}) 50%,
              rgba(255,50,0,${particle.opacity * 0.6}) 100%)`
          }}
          animate={{
            x: mousePosition.x - (particle.size / 2),
            y: mousePosition.y - (particle.size / 2),
            scale: [1, 1.1, 1],
          }}
          transition={{
            type: "spring",
            stiffness: 1200 - index * 30,
            damping: 15 - index * 1,
            mass: 0.2,
            delay: particle.delay,
          }}
        />
      ))}

      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          width: 40,
          height: 40,
          filter: 'blur(15px)',
          background: 'radial-gradient(circle at center, rgba(255,150,0,0.4) 0%, rgba(255,100,0,0.2) 50%, transparent 100%)',
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: [1, 1.05, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 15,
          mass: 0.1,
        }}
      />
      
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
                className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-orange-500/20 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Full Stack Developer
                  <Sparkles className="w-4 h-4" />
                </span>
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-400">
                Tanishk Tiwari
              </h1>
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
              { icon: Github, href: 'https://github.com/yourusername' },
              { icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
              { icon: Mail, href: 'mailto:your.email@example.com' }
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
    </div>
  );
}
