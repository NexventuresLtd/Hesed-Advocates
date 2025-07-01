import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 dark:bg-gray-950 text-gray-300 pt-20 pb-12">
      <div className="max-w-full md:max-w-11/12 m-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                H
              </div>
              <span className="text-white text-2xl font-bold">Hesed Advocates</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing exceptional legal services with integrity, expertise, and personalized attention.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="/#team" className="text-gray-400 hover:text-primary transition-colors duration-300">Our Team</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Intellectual Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Litigation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Corporate Law</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Private Notary</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Legal Advisory</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Policy Consulting</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">KN 78 St, Kigali, Rwanda</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@hesedadvocates.com" className="text-gray-400 hover:text-primary transition-colors duration-300">info@hesedadvocates.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+250788123456" className="text-gray-400 hover:text-primary transition-colors duration-300">+250 788 414 353</a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hesed Advocates Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors duration-300 text-sm">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;