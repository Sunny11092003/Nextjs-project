// src/components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaUsers } from "react-icons/fa";

const aboutItems = [
  {
    icon: <FaRocket size={40} className="text-blue-600" />,
    title: "Fast Performance",
    description:
      "Our platform is optimized for speed, ensuring fast load times and smooth user experiences across all devices.",
  },
  {
    icon: <FaShieldAlt size={40} className="text-blue-600" />,
    title: "Top Security",
    description:
      "We implement the highest security standards to protect your data and maintain your trust with regular audits and monitoring.",
  },
  {
    icon: <FaUsers size={40} className="text-blue-600" />,
    title: "User Friendly",
    description:
      "A simple and intuitive interface designed to make complex workflows easy for everyone on your team.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hover: { scale: 1.05, y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" },
};

const iconVariants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 0.5 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a powerful, reliable, and easy-to-use platform that empowers your team to achieve more.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                className="mb-4 flex justify-center"
                variants={iconVariants}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
