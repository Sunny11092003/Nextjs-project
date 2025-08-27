// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Desktop Background Video */}
      <div className="absolute inset-0 hidden md:block">
      <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/Hero-mobile.jpg" 
      >
      <source src="/Hero-video.mp4" type="video/mp4" />
      </video>

      </div>

      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/Hero-mobile.jpg"
          alt="Hero"
          fill
          className="object-cover max-w-full"
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/5 z-0"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black drop-shadow-lg">
      Welcome to MyNextJs Landing
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-black drop-shadow-md max-w-2xl mx-auto">
      Build modern, responsive, and high-performance websites with Next.js & Tailwind CSS.
      </p>
      <Link href="#get-started">
      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
      Get Started
      </button>
      </Link>
      </div>

    </section>
  );
}
