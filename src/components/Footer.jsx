import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold mb-2">EMS Dashboard by Nand</h3>
          <p className="text-sm text-gray-300">
            An intuitive employee and task management platform built for tracking progress, encouraging collaboration, and ensuring accountability.
          </p>
          <p className="mt-2 text-sm text-gray-400 italic">Crafted with ❤️ by Nand Kumar Sahu.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="/dashboard" className="hover:text-blue-400">Dashboard</a></li>
            <li><a href="/profile" className="hover:text-blue-400">Profile</a></li>
            <li><a href="/calendar" className="hover:text-blue-400">Calendar</a></li>
            <li><a href="/reports" className="hover:text-blue-400">Reports</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="/terms" className="hover:text-blue-400">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-blue-400">FAQs</a></li>
            <li><a href="/support" className="hover:text-blue-400">Support</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Connect with Nand</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Email: <a href="mailto:support@example.com" className="hover:text-blue-400">support@example.com</a></li>
            <li>Phone: +91-1234567890</li>
            <li>Location: Samastipur, Bihar, India</li>
          </ul>
          <div className="flex mt-3 space-x-4 text-2xl">
            <a href="mailto:support@example.com" className="hover:text-blue-400" aria-label="Email"><FaEnvelope /></a>
            <a href="https://github.com/nandkumar1000" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" className="hover:text-pink-500" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h4 className="text-lg font-semibold mb-2">Subscribe to Nand's updates</h4>
          <p className="text-sm text-gray-400 mb-4">Get the latest task management tips, updates, and feature releases.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded w-full sm:w-1/2 text-black" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} EMS Dashboard by Nand. All rights reserved.
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
