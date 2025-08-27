// src/components/CTASection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="get-started"
      className="relative py-32 bg-blue-600 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Headline */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Ready to Take Your Project to the Next Level?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Start building modern, responsive, and high-performance websites today. 
          Join thousands of developers who trust our platform for seamless integration and speed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link href="#features">
            <button className="px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-8 py-3 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
