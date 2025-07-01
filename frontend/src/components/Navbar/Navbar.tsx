'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'About',
        href: '/about',
    },
    { label: 'Our Team', href: '/team' },
    {
        label: 'Services',
        href: '/services',
    },
    { label: 'Contact', href: 'contact' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Default to dark mode since no browser storage available
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`shadow-lg transition-colors relative overflow-hidden ${
            isDarkMode 
                ? 'bg-gray-900 text-gray-100' 
                : 'bg-white text-black'
        }`}>
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 to-green-500/5 pointer-events-none"></div>
            <div className="relative z-10 w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-2 sm:gap-3">
                            {/* Logo Image from public directory */}
                            <img 
                                src="/Hesed-Advocates.png" 
                                alt="Hesed Logo" 
                                className="w-10 h-8 sm:w-12 sm:h-10 rounded-lg shadow-lg object-contain"
                            />
                            <span className={`text-base sm:text-xl font-semibold sm:font-bold bg-gradient-to-r ${
                                isDarkMode 
                                    ? 'from-lime-200 to-lime-400 bg-clip-text text-transparent' 
                                    : 'from-lime-600 to-green-600 bg-clip-text text-transparent'
                            }`}>
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
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${
                                        isDarkMode
                                            ? 'hover:bg-lime-400/20 text-gray-100'
                                            : 'hover:bg-lime-600/20 text-black'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </div>
                        ))}

                        {/* Dark mode toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className={`ml-4 p-2 rounded-full transition-colors ${
                                isDarkMode
                                    ? 'hover:bg-lime-400/20 text-lime-400'
                                    : 'hover:bg-lime-600/20 text-lime-600'
                            }`}
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>

                        {/* CTA Button */}
                        <a
                            href="/contact"
                            className={`ml-4 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${
                                isDarkMode
                                    ? 'bg-gradient-to-r from-lime-400 to-green-500 text-black hover:from-lime-300 hover:to-green-400'
                                    : 'bg-gradient-to-r from-lime-600 to-green-600 text-white hover:from-lime-700 hover:to-green-700'
                            }`}
                        >
                            Book a Consultation
                        </a>
                    </div>

                    {/* Mobile menu button */}
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
                            {isDarkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                                isDarkMode
                                    ? 'hover:bg-lime-400/20 text-lime-400'
                                    : 'hover:bg-lime-600/20 text-lime-600'
                            }`}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
                    isDarkMode ? 'bg-gray-900' : 'bg-white'
                }`}>
                    {navItems.map((item) => (
                        <div key={item.label}>
                            <div className="flex justify-between items-center">
                                <a
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium w-full transition-colors ${
                                        isDarkMode
                                            ? 'hover:bg-lime-400/20 text-gray-100'
                                            : 'hover:bg-lime-600/20 text-black'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </div>
                        </div>
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