// src/components/FeatureSectionsWithVideo.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Seamless Integration",
    description:
      "Easily integrate our platform with your existing tools and workflows for maximum efficiency. " +
      "Flexible APIs and pre-built connectors ensure smooth setup, minimizing downtime. " +
      "Automate tasks, synchronize data across applications, and streamline operations effortlessly.",
    img: "/Feature-image1.jpg",
  },
  {
    title: "Secure & Reliable",
    description:
      "Your data is protected with industry-standard encryption and reliable cloud infrastructure. " +
      "Advanced security protocols, real-time monitoring, and robust backups keep your information safe and accessible at all times.",
    img: "/Feature-image2.jpg",
  },
];

export default function FeatureSectionsAlt() {
  return (
    <section
      id="features"
      className="relative py-32 bg-gray-50"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            {/* Image */}
            <motion.div
              className="md:w-1/2 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={feature.img}
                alt={feature.title}
                width={600}
                height={400}
                className="object-cover rounded-xl"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {feature.description}
              </p>
              <motion.a
                href="#get-started"
                className="inline-block mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
