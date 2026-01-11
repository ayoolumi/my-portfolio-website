'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.img
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src="/Head.jpg"
                alt="Ayoolumi Melehon"
                className="w-10 h-10 rounded-full object-cover border-2 border-teal-500 group-hover:border-teal-600 transition-all shadow-md"
              />
              <span className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                AYOOLUMI MELEHON
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Portfolio', 'Experience & Skills'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Experience & Skills' ? '/experience' : `/${item.toLowerCase()}`} 
                  className={`relative ${item === 'About' ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-600'} transition-colors font-medium text-sm group py-2`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-medium hover:from-teal-700 hover:to-teal-600 transition-all shadow-md hover:shadow-lg"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 border-t border-gray-200 bg-white"
            >
              <div className="flex flex-col space-y-3 pt-4">
                {['Home', 'About', 'Portfolio', 'Experience & Skills'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Home' ? '/' : item === 'Experience & Skills' ? '/experience' : `/${item.toLowerCase()}`} 
                    className={`${item === 'About' ? 'text-teal-600 bg-teal-50 font-semibold' : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'} py-3 px-4 rounded-lg font-medium transition-all`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">About Me</h1>
              <p className="text-xl md:text-2xl text-teal-600 font-semibold mb-2">Care Tech Advocate • Data Analyst & AI Developer • Tech Entrepreneur</p>
              <p className="text-lg text-gray-600 mb-4">Founder of <span className="font-semibold text-teal-600">The AandA Group</span></p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Building intelligent solutions for healthcare, social care, and business—combining frontline care experience with technical expertise and entrepreneurial vision to transform how technology serves people.</p>
              <div className="flex flex-wrap gap-3 mb-6 text-sm">
                <span className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-gray-700">MSc Artificial Intelligence</span>
                <span className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-gray-700">CompTIA Data+ Certified</span>
                <span className="px-3 py-1 bg-purple-50 border border-purple-200 rounded-full text-gray-700">Scottish Social Care Professional</span>
                <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700">Grangemouth, Falkirk, Scotland</span>
              </div>
              <div className="flex gap-4">
                <Link href="/portfolio" className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg">View Projects</Link>
                <Link href="/experience" className="px-6 py-3 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition">My Experience & Skills</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="relative bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <img src="/Head.jpg" alt="Ayoolumi Melehon" className="w-full rounded-2xl shadow-xl" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-teal-200">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">5</p>
                    <p className="text-sm text-gray-600 font-medium">Companies Founded</p>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 border-2 border-blue-200">
                  <div className="text-center">
                    <p className="text-xl font-bold text-gray-900">2+</p>
                    <p className="text-xs text-gray-600 font-medium">Years in Care</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story - The Full Journey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey: From Corporate Banking to Care to Building What Matters</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>My story doesn&apos;t begin with code or care—it begins with learning how to show up professionally, ethically, and with integrity. At <span className="font-semibold text-teal-600">FCMB Bank in Nigeria</span>, I learned the foundations that would shape everything I&apos;ve built since. Working in one of Nigeria&apos;s leading financial institutions taught me corporate discipline, regulatory compliance, and the weight of handling sensitive information with absolute confidentiality.</p>
              <p>But I always knew I wanted to build, not just serve. So in 2017, I took everything I&apos;d learned about business operations, customer service, and professional conduct and founded <a href="https://aandacomputers.theaandagroup.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">AandA Computers and Technologies</a> in Bauchi, Nigeria. What started as a vision became a thriving technology services business with 20+ employees, and a custom-built business management platform that I developed myself.</p>
              <p>Building on this success, I expanded into import/export with <a href="https://suppliesandimports.theaandagroup.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">AandA Supplies and Imports Limited</a> in 2019. More recently, I ventured into agriculture with <a href="https://farmsfood.theaandagroup.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">AandA Farms and Foods Limited</a>. In December 2025, I brought my entrepreneurial vision to the UK, establishing <a href="https://labs.theaandagroup.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">AandA Labs Limited</a> for software development and IT consultancy, and <a href="https://suppliesandimports.theaandagroup.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">AandA Supplies and Imports Limited</a> for food imports. Together, these five companies form <span className="font-semibold text-teal-600">The AandA Group</span>.</p>
              <p>In <span className="font-semibold">February 2023</span>, I made a deliberate decision to enter Scotland&apos;s health and social care sector. This wasn&apos;t a step backward or a career change—it was a strategic move. I knew that to truly build technology that transforms care, I couldn&apos;t just study it from textbooks or analyze datasets from a distance. I needed to <em>feel</em> it.</p>
              <p>I started with <span className="font-semibold text-teal-600">Avenue Care Services</span>, then moved to <span className="font-semibold text-teal-600">First Class Care Services</span>, gaining experience in adult social care. Since <span className="font-semibold">March 2025</span>, I&apos;ve been at <span className="font-semibold text-teal-600">Camphill Blair Drummond</span>, a therapeutic community supporting people with learning disabilities.</p>
              <p className="text-gray-800 italic border-l-4 border-teal-500 pl-4 bg-teal-50 py-3 rounded-r-lg">And in that work, I&apos;ve seen things that changed me forever.</p>
              <p>I&apos;ve witnessed the quiet heartbreak of families who can&apos;t get clear answers about their loved one&apos;s care. I&apos;ve seen the exhaustion in colleagues&apos; eyes when they spend more time on paperwork than with the people they&apos;re meant to support. I&apos;ve held the hand of someone having a difficult day, knowing that somewhere in a database there might be a pattern—a trigger we could have anticipated.</p>
              <p>This is why I pursued an <span className="font-semibold text-teal-600">MSc in Artificial Intelligence at the University of Stirling</span> while working in care, and why I earned my <span className="font-semibold text-teal-600">CompTIA Data+</span> certification. I&apos;ve now built over nine healthcare analytics projects and numerous optimised social care and administrative systems.</p>
              <p className="text-teal-600 font-semibold text-xl">My mission is deeply personal: to use AI, data analytics, and technology to improve patient outcomes, support frontline care workers, and build more resilient, integrated health and social care systems across Scotland and beyond.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">What Makes Me Different</h2>
            <p className="text-xl text-gray-600 mb-10 text-center">Four perspectives that set my work apart</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div whileHover={{ y: -8 }} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4"><span className="text-3xl">🏦</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Foundation</h3>
                <p className="text-gray-600 text-sm mb-3">FCMB Bank taught me professional excellence, regulatory compliance, and ethical conduct.</p>
                <ul className="space-y-1 text-gray-700 text-xs"><li>✓ Professional discipline</li><li>✓ Confidentiality & data handling</li><li>✓ Customer service excellence</li><li>✓ Process improvement</li></ul>
              </motion.div>
              <motion.div whileHover={{ y: -8 }} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border-2 border-teal-200">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4"><span className="text-3xl">💙</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Care Sector Insider</h3>
                <p className="text-gray-600 text-sm mb-3">I don&apos;t study healthcare data—I live it. Every day at Camphill, I experience what my technology aims to fix.</p>
                <ul className="space-y-1 text-gray-700 text-xs"><li>✓ 2+ years frontline care</li><li>✓ Avenue → First Class → Camphill</li><li>✓ Real understanding of challenges</li><li>✓ Emotional connection to mission</li></ul>
              </motion.div>
              <motion.div whileHover={{ y: -8 }} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4"><span className="text-3xl">📊</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Excellence</h3>
                <p className="text-gray-600 text-sm mb-3">Advanced AI and data science skills, proven through academic achievement and real-world delivery.</p>
                <ul className="space-y-1 text-gray-700 text-xs"><li>✓ MSc Artificial Intelligence</li><li>✓ 9+ deployed projects</li><li>✓ Python, SQL, ML/AI, Power BI</li><li>✓ Full-stack development</li></ul>
              </motion.div>
              <motion.div whileHover={{ y: -8 }} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4"><span className="text-3xl">🚀</span></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Business Builder</h3>
                <p className="text-gray-600 text-sm mb-3">I don&apos;t just build prototypes—I build production systems for real businesses with real stakes.</p>
                <ul className="space-y-1 text-gray-700 text-xs"><li>✓ 5 companies founded</li><li>✓ 20+ staff managed remotely</li><li>✓ Production systems in daily use</li><li>✓ Cross-border operations</li></ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Experience & Impact */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Healthcare Experience & Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="text-3xl mr-3">🏥</span>Frontline Care Experience</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-teal-600 mr-2 font-bold">✓</span><span>2+ years in Scottish health and social care (since Feb 2023)</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2 font-bold">✓</span><span>Camphill Blair Drummond (March 2025 - Present)</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2 font-bold">✓</span><span>First Class Care Services (previous role)</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2 font-bold">✓</span><span>Avenue Care Services (previous role)</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2 font-bold">✓</span><span>Supporting people with learning disabilities</span></li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2 font-bold">✓</span><span>Adult social care, community & domiciliary care</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><span className="text-3xl mr-3">📊</span>Data Science Projects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-purple-600 mr-2 font-bold">✓</span><span>9+ healthcare analytics and AI projects completed</span></li>
                  <li className="flex items-start"><span className="text-purple-600 mr-2 font-bold">✓</span><span>NHS A&E wait time prediction (85.67% accuracy)</span></li>
                  <li className="flex items-start"><span className="text-purple-600 mr-2 font-bold">✓</span><span>COVID-19 impact analysis across 14 Scottish health boards</span></li>
                  <li className="flex items-start"><span className="text-purple-600 mr-2 font-bold">✓</span><span>Mental health demand forecasting</span></li>
                  <li className="flex items-start"><span className="text-purple-600 mr-2 font-bold">✓</span><span>Medical AI (pneumonia detection, fall risk assessment)</span></li>
                  <li className="flex items-start"><span className="text-purple-600 mr-2 font-bold">✓</span><span>620K+ healthcare records processed with GDPR compliance</span></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The AandA Group */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4 text-center">The AandA Group</h2>
            <p className="text-xl text-gray-300 mb-10 text-center">A diversified business conglomerate I founded and lead across Nigeria and the UK</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.a href="https://aandacomputers.theaandagroup.com/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all cursor-pointer block">
                <div className="flex justify-between items-start mb-3"><span className="text-sm text-teal-400 font-medium">🇳🇬 Nigeria</span><span className="text-xs text-gray-400">Est. 2017</span></div>
                <h3 className="text-lg font-bold text-white mb-1">AandA Computers and Technologies</h3>
                <p className="text-teal-400 text-sm font-medium mb-2">Technology Services</p>
                <p className="text-gray-400 text-sm">Flagship business with 20+ staff, custom-built management platform</p>
                <p className="text-teal-400 text-xs mt-3 flex items-center">Visit Website <span className="ml-1">→</span></p>
              </motion.a>
              <motion.a href="https://suppliesandimports.theaandagroup.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all cursor-pointer block">
                <div className="flex justify-between items-start mb-3"><span className="text-sm text-teal-400 font-medium">🇳🇬 Nigeria</span><span className="text-xs text-gray-400">Est. 2019</span></div>
                <h3 className="text-lg font-bold text-white mb-1">AandA Supplies and Imports Limited</h3>
                <p className="text-teal-400 text-sm font-medium mb-2">Import/Export</p>
                <p className="text-gray-400 text-sm">Procurement, supply chain operations, supplier management</p>
                <p className="text-teal-400 text-xs mt-3 flex items-center">Visit Website <span className="ml-1">→</span></p>
              </motion.a>
              <motion.a href="https://farmsfood.theaandagroup.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all cursor-pointer block">
                <div className="flex justify-between items-start mb-3"><span className="text-sm text-teal-400 font-medium">🇳🇬 Nigeria</span><span className="text-xs text-gray-400">Est. 2025</span></div>
                <h3 className="text-lg font-bold text-white mb-1">AandA Farms and Foods Limited</h3>
                <p className="text-teal-400 text-sm font-medium mb-2">Agriculture</p>
                <p className="text-gray-400 text-sm">Agricultural production and food processing</p>
                <p className="text-teal-400 text-xs mt-3 flex items-center">Visit Website <span className="ml-1">→</span></p>
              </motion.a>
              <motion.a href="https://labs.theaandagroup.com/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all cursor-pointer block">
                <div className="flex justify-between items-start mb-3"><span className="text-sm text-teal-400 font-medium">🇬🇧 UK (SC872002)</span><span className="text-xs text-gray-400">Est. Dec 2025</span></div>
                <h3 className="text-lg font-bold text-white mb-1">AandA Labs Limited</h3>
                <p className="text-teal-400 text-sm font-medium mb-2">Software Development</p>
                <p className="text-gray-400 text-sm">IT consultancy, data processing, software solutions</p>
                <p className="text-teal-400 text-xs mt-3 flex items-center">Visit Website <span className="ml-1">→</span></p>
              </motion.a>
              <motion.a href="https://suppliesandimports.theaandagroup.com" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all cursor-pointer block">
                <div className="flex justify-between items-start mb-3"><span className="text-sm text-teal-400 font-medium">🇬🇧 UK (SC872626)</span><span className="text-xs text-gray-400">Est. Dec 2025</span></div>
                <h3 className="text-lg font-bold text-white mb-1">AandA Supplies and Imports Limited</h3>
                <p className="text-teal-400 text-sm font-medium mb-2">Food Imports</p>
                <p className="text-gray-400 text-sm">Falkirk Council registered food business (FC773379797)</p>
                <p className="text-teal-400 text-xs mt-3 flex items-center">Visit Website <span className="ml-1">→</span></p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Programming & Development */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><span className="text-2xl mr-2">💻</span>Programming & Development</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Languages:</strong> Python, JavaScript, TypeScript, SQL, HTML/CSS</p>
                  <p><strong>Frameworks:</strong> Flask, Next.js, React, Tailwind CSS</p>
                  <p><strong>Data:</strong> Pandas, NumPy, DuckDB, SQLite</p>
                  <p><strong>ML/AI:</strong> Scikit-learn, XGBoost, TensorFlow, PyTorch</p>
                  <p><strong>Visualization:</strong> Plotly, Altair, Matplotlib, Seaborn</p>
                </div>
              </div>

              {/* Analytics & BI */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><span className="text-2xl mr-2">📊</span>Analytics & BI</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Dashboards:</strong> Streamlit, Power BI, Tableau</p>
                  <p><strong>Spreadsheets:</strong> Microsoft Excel (Advanced), Google Sheets</p>
                  <p><strong>Databases:</strong> PostgreSQL, SQLite</p>
                  <p><strong>Notebooks:</strong> Jupyter, Google Colab</p>
                  <p><strong>ML Platforms:</strong> Hugging Face, Streamlit Cloud</p>
                  <p><strong>Cloud:</strong> AWS, Render, Vercel</p>
                </div>
              </div>

              {/* Web Development */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><span className="text-2xl mr-2">🌐</span>Web Development</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Frontend:</strong> React, Next.js, HTML5, CSS3, Tailwind</p>
                  <p><strong>Backend:</strong> Flask, RESTful APIs, Node.js</p>
                  <p><strong>CMS:</strong> WordPress, Custom CMS</p>
                  <p><strong>DevOps:</strong> Git/GitHub, Docker, Vercel, DNS</p>
                  <p><strong>SEO:</strong> On-page optimization, Analytics</p>
                  <p><strong>Social Media:</strong> Content strategy, Platform management</p>
                </div>
              </div>

              {/* Hardware & Systems */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><span className="text-2xl mr-2">🔧</span>Hardware & Systems</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Hardware:</strong> PC Assembly, Component Installation, Upgrades</p>
                  <p><strong>Systems:</strong> Windows, Linux, System Configuration</p>
                  <p><strong>Software:</strong> Installation, Deployment, Troubleshooting</p>
                  <p><strong>Networking:</strong> Setup, Configuration, Maintenance</p>
                  <p><strong>Support:</strong> Technical Support, User Training</p>
                </div>
              </div>

              {/* Design & Publishing */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><span className="text-2xl mr-2">🎨</span>Design & Publishing</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Graphic Design:</strong> CorelDRAW, Logo & Branding</p>
                  <p><strong>Desktop Publishing:</strong> Flyers, Brochures, Banners</p>
                  <p><strong>Large Format:</strong> Billboard Design, Signage, Posters</p>
                  <p><strong>Print Production:</strong> Pre-press, Color Management</p>
                  <p><strong>Print Management:</strong> Large format printing operations</p>
                </div>
              </div>

              {/* Healthcare & Corporate */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center"><span className="text-2xl mr-2">🏥</span>Healthcare & Corporate</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>Data Sources:</strong> Public Health Scotland, NHS datasets</p>
                  <p><strong>Office:</strong> Microsoft Office Suite, SharePoint</p>
                  <p><strong>Systems:</strong> Document Management, Quality Assurance</p>
                  <p><strong>HR:</strong> People Systems, Recruitment Admin</p>
                  <p><strong>AI Tools:</strong> ChatGPT, Claude AI, GitHub Copilot</p>
                  <p><strong>Compliance:</strong> GDPR, Patient privacy, Confidentiality</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Education & Experience</h2>
            <div className="space-y-6 mb-12">
              <motion.div whileHover={{ x: 8 }} className="border-l-4 border-teal-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg">
                <div className="text-teal-600 font-semibold mb-2">2023-2025</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MSc Artificial Intelligence</h3>
                <p className="text-gray-700 mb-2 font-medium">University of Stirling, Scotland</p>
                <p className="text-gray-600">Focus: Machine Learning, Deep Learning, Healthcare AI, Data Science Applications</p>
              </motion.div>
              <motion.div whileHover={{ x: 8 }} className="border-l-4 border-amber-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg">
                <div className="text-amber-600 font-semibold mb-2">Banking Experience</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">FCMB Bank Nigeria</h3>
                <p className="text-gray-700 mb-2 font-medium">Corporate Banking & Customer Service</p>
                <p className="text-gray-600">Professional conduct, regulatory compliance, confidentiality, customer service excellence</p>
              </motion.div>
              <motion.div whileHover={{ x: 8 }} className="border-l-4 border-blue-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg">
                <div className="text-blue-600 font-semibold mb-2">2024</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">CompTIA Data+ Certification</h3>
                <p className="text-gray-700">Data Analytics • Business Intelligence • Statistical Analysis • Data Governance</p>
              </motion.div>
              <motion.div whileHover={{ x: 8 }} className="border-l-4 border-purple-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg">
                <div className="text-purple-600 font-semibold mb-2">2023-Present</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scottish Social Care Professional</h3>
                <p className="text-gray-700">Active care worker • Avenue Care → First Class Care → Camphill Blair Drummond</p>
              </motion.div>
              <motion.div whileHover={{ x: 8 }} className="border-l-4 border-green-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg">
                <div className="text-green-600 font-semibold mb-2">2015-2018</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">PGD Computer Science</h3>
                <p className="text-gray-700">Abubakar Tafawa Balewa University, Nigeria</p>
              </motion.div>
              <motion.div whileHover={{ x: 8 }} className="border-l-4 border-orange-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg">
                <div className="text-orange-600 font-semibold mb-2">2009-2014</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ND & HND Computer Engineering</h3>
                <p className="text-gray-700">Nigeria • Foundation in Systems, Networks, and Technical Computing</p>
              </motion.div>
            </div>

            {/* Professional Certifications Subsection */}
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Professional Certifications</h3>
            <p className="text-lg text-gray-600 mb-8 text-center">Continuous learning through industry-recognized platforms</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Codecademy */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">{'</>'}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Codecademy</h4>
                    <p className="text-sm text-gray-500">2024</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span>Learn Tableau for Data Visualization</li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span>Learn SQL</li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span>Learn Python 3</li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span>Principles of Data Literacy</li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span>Microsoft Excel for Data Analysis</li>
                  <li className="flex items-start"><span className="text-teal-600 mr-2">✓</span>Handling Missing Data</li>
                </ul>
              </div>

              {/* LinkedIn Learning */}
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">in</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">LinkedIn Learning</h4>
                    <p className="text-sm text-gray-500">2025</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span>Statistics Foundations 1: The Basics</li>
                  <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span>Preparing to Get a Job in Data Analytics</li>
                  <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span>Introduction to Data Science</li>
                  <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span>Connecting Your Work to Your Purpose</li>
                  <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span>CompTIA Data+ Cert Prep: Data Concepts</li>
                  <li className="flex items-start"><span className="text-blue-600 mr-2">✓</span>Basics of Data Visualization Analysis</li>
                </ul>
              </div>

              {/* AWS */}
              <div className="bg-white rounded-2xl p-6 border-2 border-orange-200 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">AWS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">AWS Training</h4>
                    <p className="text-sm text-gray-500">2025</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start"><span className="text-orange-600 mr-2">✓</span>Fundamentals of Analytics on AWS - Part 1</li>
                </ul>
                <p className="text-gray-500 text-xs mt-4 italic">Cloud analytics and data processing fundamentals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border-2 border-teal-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What I&apos;m Looking For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💼 Employment Opportunities</h3>
                <p className="text-gray-700 mb-3">Open to roles that combine my technical skills with my passion for care:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Healthcare Data Analyst / Data Scientist</li>
                  <li>• Care Technology Developer</li>
                  <li>• Business Intelligence Analyst (NHS, health tech)</li>
                  <li>• Information Analyst (NHS, public sector)</li>
                  <li>• Operations/Administration with tech focus</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🤝 Freelance & Consulting</h3>
                <p className="text-gray-700 mb-3">Also available for project-based work through AandA Labs:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Dashboard and analytics development</li>
                  <li>• Business automation systems</li>
                  <li>• Data analysis and visualization</li>
                  <li>• Custom software solutions</li>
                  <li>• AI/ML model development</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build Something Meaningful Together</h2>
            <p className="text-xl mb-8 text-teal-100">Whether you need care technology solutions, data analytics, or business automation—I bring technical expertise, business acumen, corporate discipline, and real-world care experience to every project.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl">Get in Touch</Link>
              <Link href="/portfolio" className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition">View My Projects</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ayoolumi Melehon</h3>
              <p className="text-gray-400 text-sm">Care Tech Advocate, Data Analyst & AI Developer, Tech Entrepreneur. Building intelligent solutions for healthcare, social care, and business.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-white transition text-sm">About</Link>
                <Link href="/portfolio" className="block text-gray-400 hover:text-white transition text-sm">Portfolio</Link>
                <Link href="/experience" className="block text-gray-400 hover:text-white transition text-sm">Experience & Skills</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition text-sm">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business</h4>
              <div className="space-y-2 text-sm">
                <a href="https://aandacomputers.theaandagroup.com/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-teal-400 transition">AandA Computers 🇳🇬</a>
                <a href="https://labs.theaandagroup.com/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-teal-400 transition">AandA Labs Limited 🇬🇧</a>
                <a href="https://suppliesandimports.theaandagroup.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-teal-400 transition">AandA Supplies and Imports 🇳🇬</a>
                <a href="https://farmsfood.theaandagroup.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-teal-400 transition">AandA Farms and Foods 🇳🇬</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3 mb-4">
                <a href="mailto:ayoolumimelehon@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/ayoolumi-melehon-b63237179/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://github.com/ayoolumi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm">Grangemouth, Falkirk, Scotland</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>© 2026 Ayoolumi Melehon | Founder, The AandA Group</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
