'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = sessionStorage.getItem('darkMode');
    const darkPref = storedMode === 'true';
    setIsDarkMode(darkPref);
    document.documentElement.classList.toggle('dark', darkPref);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    sessionStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`shadow-lg transition-colors relative overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'
      }`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 to-green-500/5 pointer-events-none"></div>

      <div className="relative z-10 w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/Hesed-Advocates.png"
                alt="Hesed Logo"
                className="w-8 h-12 sm:w-20 sm:h-18 rounded-lg py-2 shadow-lg object-contain"
              />
              <span
                className={`text-lg sm:text-2xl font-semibold sm:font-bold bg-gradient-to-r ${
                  isDarkMode
                    ? 'from-lime-200 to-white bg-clip-text text-transparent'
                    : 'text-accent'
                }`}
              >
                Hesed Advocates Ltd
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                  isDarkMode
                    ? 'hover:bg-lime-400/20 text-gray-100'
                    : 'hover:bg-lime-600/20 text-black'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Toggle Theme */}
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-full transition-colors ${
                isDarkMode
                  ? 'hover:bg-lime-400/20 text-lime-400'
                  : 'hover:bg-lime-600/20 text-lime-600'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA */}
            <a
              href="/contact"
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isDarkMode
                  ? 'bg-gradient-to-r from-white to-lime-300 text-black'
                  : 'bg-gradient-to-r from-white to-lime-300 text-black'
              }`}
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`mr-4 p-2 rounded-full transition-colors ${
                isDarkMode
                  ? 'hover:bg-lime-400/20 text-lime-400'
                  : 'hover:bg-lime-600/20 text-lime-600'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors ${
                isDarkMode
                  ? 'hover:bg-lime-400/20 text-lime-400'
                  : 'hover:bg-lime-600/20 text-lime-600'
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isDarkMode
                  ? 'hover:bg-lime-400/20 text-gray-100'
                  : 'hover:bg-lime-600/20 text-black'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact"
            className={`block w-full mt-2 px-4 py-2 rounded-md text-base font-medium text-center transition-colors ${
              isDarkMode
                ? 'bg-lime-400 text-black hover:bg-lime-300'
                : 'bg-lime-600 text-white hover:bg-lime-700'
            }`}
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};
