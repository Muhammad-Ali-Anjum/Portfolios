import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Palette,
  Server,
  Smartphone,
  ShoppingCart,
  Wrench,
} from "lucide-react";

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom website development using modern frameworks and technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading Speed"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
      features: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Building scalable and secure server-side applications with robust APIs and database management.",
      features: ["RESTful APIs", "Database Design", "Authentication"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications with native performance and smooth user interactions.",
      features: ["React Native", "iOS & Android", "Push Notifications"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
      features: ["Payment Gateway", "Shopping Cart", "Order Management"],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Ongoing website maintenance, updates, and technical support to keep your site running smoothly.",
      features: ["Bug Fixes", "Updates", "24/7 Support"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heading */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              My <span className="text-cyan-400">Services</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive development services tailored to your business needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.04 }}
                  className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="bg-gray-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-400 transition">
                    <Icon
                      size={32}
                      className="text-cyan-400 group-hover:text-gray-900 transition"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-400 text-sm"
                      >
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
