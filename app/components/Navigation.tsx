'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Resources', href: '/resources' },
  { name: 'Experience & Skills', href: '/experience' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative w-10 h-10"
            >
              <Image
                src="/Head.jpg"
                alt="Ayoolumi Melehon"
                fill
                className="rounded-full object-cover border-2 border-teal-500 group-hover:border-teal-600 transition-all shadow-md"
              />
            </motion.div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
              AYOOLUMI MELEHON
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className={`relative text-gray-600 hover:text-teal-600 transition-colors font-medium text-sm group py-2 ${
                  isActive(item.href) ? 'text-teal-600' : ''
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 ease-out ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact"
                className={`px-6 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg ${
                  isActive('/contact')
                    ? 'bg-teal-700 text-white'
                    : 'bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-700 hover:to-teal-600'
                }`}
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-200 py-4 px-4"
        >
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className={`block py-3 font-medium transition-colors ${
                isActive(item.href) 
                  ? 'text-teal-600' 
                  : 'text-gray-600 hover:text-teal-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="block py-3 text-gray-600 hover:text-teal-600 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
