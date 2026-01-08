import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ['Full Stack Developer', 'MERN Stack Developer', 'WordPress Expert','NLP Expert'];

  useEffect(() => {
    let currentIndex = 0;
    const currentRole = roles[currentRoleIndex];

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setDisplayedText(currentRole.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (currentIndex > 0) {
              currentIndex--;
              setDisplayedText(currentRole.substring(0, currentIndex));
            } else {
              clearInterval(deleteInterval);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-cyan-400 text-lg font-medium">Hi, my name is</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Muhammad Ali Anjum
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 mb-8 h-12 flex items-center justify-center"
          >
            <span className="text-cyan-400">{displayedText}</span>
            <span className="animate-pulse ml-1 text-cyan-400">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I'm a passionate developer specializing in building exceptional digital experiences.
            Currently focused on creating responsive web applications with modern technologies
            and best practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="group px-8 py-3 bg-cyan-400 text-gray-900 rounded-lg font-semibold hover:bg-cyan-500 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-400/50">
              <Download size={20} />
              Download CV
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-6 justify-center mb-16"
          >
            <a
              href="https://github.com/Muhammad-Ali-Anjum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ali-anjum-aa345727b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="anjumbalgharii@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="animate-bounce"
          >
            <button
              onClick={() => scrollToSection('#about')}
              className="text-cyan-400 hover:text-cyan-500 transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
