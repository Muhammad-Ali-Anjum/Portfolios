import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Creating robust server-side applications and APIs',
    },
    {
      icon: Globe,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from concept to deployment',
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      description: 'Optimized applications for speed and efficiency',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Hi, I'm Muhammad Ali Anjum
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A passionate Full Stack Developer with over 5 years of experience in creating
                  dynamic and user-friendly web applications. I specialize in the MERN stack and
                  have a proven track record of delivering high-quality solutions for diverse
                  clients.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My journey in web development started with a fascination for how things work on
                  the web. Over the years, I've honed my skills in both frontend and backend
                  technologies, always staying updated with the latest industry trends and best
                  practices.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer community. I believe
                  in writing clean, maintainable code and creating experiences that users love.
                </p>
                <div className="flex gap-4 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">50+</div>
                    <div className="text-gray-400 text-sm">Projects Completed</div>
                  </div>
                  <div className="w-px bg-gray-700"></div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">5+</div>
                    <div className="text-gray-400 text-sm">Years Experience</div>
                  </div>
                  <div className="w-px bg-gray-700"></div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400">30+</div>
                    <div className="text-gray-400 text-sm">Happy Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                  >
                    <highlight.icon className="text-cyan-400 mb-4" size={32} />
                    <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
