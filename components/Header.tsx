"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Hide header on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY && window.scrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full max-w-full overflow-x-hidden bg-white/90 backdrop-blur-md shadow-md z-50 transition-transform box-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Inner Container */}
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8 box-border overflow-x-hidden">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <motion.span
                className="text-2xl font-bold text-blue-600 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                MyNextJs
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Features", "About", "Contact"].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="#get-started">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition box-border">
                Get Started
              </button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 p-2 box-border"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden w-full max-w-full box-border bg-white/95 backdrop-blur-md shadow-md origin-top overflow-x-hidden"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="flex flex-col space-y-4 px-4 py-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              {["Features", "About", "Contact"].map((item) => (
                <motion.div key={item} variants={itemVariants}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link href="#get-started" onClick={() => setMenuOpen(false)}>
                  <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition box-border">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
