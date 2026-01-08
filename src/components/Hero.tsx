import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "WordPress Expert",
    "NLP Expert",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const role = roles[currentRoleIndex];

    const typing = setInterval(() => {
      if (index <= role.length) {
        setDisplayedText(role.slice(0, index));
        index++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          const deleting = setInterval(() => {
            if (index > 0) {
              index--;
              setDisplayedText(role.slice(0, index));
            } else {
              clearInterval(deleting);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [currentRoleIndex]);

  // 🔥 FORCE DOWNLOAD FUNCTION
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Muhammad_Ali_Anjum_CV.pdf";
    link.download = "Muhammad_Ali_Anjum_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-lg mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Muhammad Ali Anjum
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-400 mb-8 h-12 flex justify-center items-center"
        >
          <span className="text-cyan-400">{displayedText}</span>
          <span className="ml-1 animate-pulse text-cyan-400">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-300 text-lg mb-10"
        >
          I build modern, fast, and scalable web applications with clean,
          maintainable, and user-focused code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* DOWNLOAD CV */}
          <button
            onClick={downloadCV}
            className="flex items-center gap-2 px-8 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500 transition shadow-lg hover:shadow-cyan-400/50"
          >
            <Download size={20} />
            Download CV
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mb-16"
        >
          <a
            href="https://github.com/Muhammad-Ali-Anjum"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-ali-anjum-aa345727b/"
            target="_blank"
            className="text-gray-400 hover:text-cyan-400"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="mailto:anjumbalgharii@gmail.com"
            className="text-gray-400 hover:text-cyan-400"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        {/* Scroll down */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="animate-bounce"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="text-cyan-400 hover:text-cyan-500"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
