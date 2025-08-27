// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">

      {/* Overlay Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 md:bg-black/10 z-0"></div>


      {/* Overlay Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl flex flex-col items-center justify-center h-screen">
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-black drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to MyNextJs Landing
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl text-black drop-shadow-md max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Build modern, responsive, and high-performance websites with Next.js & Tailwind CSS.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link href="#get-started">
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}  