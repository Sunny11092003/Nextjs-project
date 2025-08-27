// src/components/Footer.tsx
"use client";

import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400 text-sm">
              We build high-performance web solutions that scale with your business. Our focus is on speed, reliability, and modern design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-blue-500 transition">Features</Link></li>
              <li><Link href="#testimonials" className="hover:text-blue-500 transition">Testimonials</Link></li>
              <li><Link href="#pricing" className="hover:text-blue-500 transition">Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-blue-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-500 transition">Documentation</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition">Support</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-600 transition">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://github.com" target="_blank" className="hover:text-gray-100 transition">
                <FaGithub size={24} />
              </Link>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MyNextJs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
