'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import type { NavItem } from '../../types/NavbarTypes';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '/about',
  },
  { 
    label: 'Services', 
    href: '/services',
  },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check sessionStorage for saved theme preference
    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Fallback to system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    sessionStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background text-text shadow-sm dark:bg-dark-background dark:text-dark-text">
      <div className="w-full md:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary dark:text-dark-primary">
                Hesed Advocates Ltd
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/20 dark:hover:bg-dark-accent/20 transition-colors flex items-center"
                >
                  {item.label}
                </a>


              </div>
            ))}

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full hover:bg-accent/20 dark:hover:bg-dark-accent/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-primary dark:text-dark-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary dark:text-dark-primary" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="/contact"
              className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-primary text-background dark:bg-dark-primary dark:text-dark-background hover:bg-accent dark:hover:bg-dark-accent transition-colors"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="mr-4 p-2 rounded-full hover:bg-accent/20 dark:hover:bg-dark-accent/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-primary dark:text-dark-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary dark:text-dark-primary" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-accent/20 dark:hover:bg-dark-accent/20 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-primary dark:text-dark-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary dark:text-dark-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background dark:bg-dark-background">
          {navItems.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between items-center">
                <a
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent/20 dark:hover:bg-dark-accent/20 w-full"
                >
                  {item.label}
                </a>
              </div>
     
            </div>
          ))}
          <a
            href="/contact"
            className="block w-full mt-2 px-4 py-2 rounded-md text-base font-medium text-center bg-primary text-background dark:bg-dark-primary dark:text-dark-background hover:bg-accent dark:hover:bg-dark-accent transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};