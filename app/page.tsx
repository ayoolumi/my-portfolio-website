'use client';

import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

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
                  href={`/${item.toLowerCase()}`} 
                  className="relative text-gray-600 hover:text-teal-600 transition-colors font-medium text-sm group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-teal-600 hover:bg-teal-50 py-3 px-4 rounded-lg font-medium transition-all"
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6 border border-teal-200"
              >
                ✨ Open to Healthcare Data, Analytics & Care Technology Opportunities
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-gray-900">Hi, I&apos;m</span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Ayoolumi Melehon
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-2 font-semibold">
                Care Tech Advocate • Data Analyst & AI Developer • Tech Entrepreneur
              </p>
              
              <p className="text-lg text-gray-600 mb-4">
                Founder of <span className="font-semibold text-teal-600">The AANDA Group</span>
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Building intelligent solutions for healthcare, social care, and business—from clinical dashboards and predictive models to automated business platforms managing real operations.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 shadow-sm">
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                  MSc Artificial Intelligence
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 shadow-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  CompTIA Data+ Certified
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 shadow-sm">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Scottish Social Care Professional
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 shadow-sm">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Grangemouth, Falkirk, Scotland
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/portfolio"
                    className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl inline-block"
                  >
                    View My Work
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/ventures"
                    className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition inline-block"
                  >
                    Explore Ventures
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/Head.jpg"
                  alt="Ayoolumi Melehon"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-teal-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">5</p>
                      <p className="text-sm text-gray-600 font-medium">Companies Founded</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 border-2 border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">9+</p>
                      <p className="text-xs text-gray-600 font-medium">Tech Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">What I Do</h2>
            <p className="text-xl text-gray-600">Bridging care, technology, and business with practical solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💙',
                title: 'Care Technology',
                description: 'Building solutions that improve outcomes in health and social care—from patient monitoring systems to care management platforms.',
                stats: 'Care Sector Focus',
              },
              {
                icon: '📊',
                title: 'Data & AI Solutions',
                description: 'Developing predictive models, dashboards, and analytics tools for healthcare, business intelligence, and operational efficiency.',
                stats: '85%+ Model Accuracy',
              },
              {
                icon: '🚀',
                title: 'Business Platforms',
                description: 'Creating production-ready systems for real businesses—inventory management, staff tracking, payment integration, and automated operations.',
                stats: '8+ Staff Managed',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-300 shadow-lg hover:shadow-2xl transition-all cursor-default"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold border border-teal-200">
                  {service.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 5, suffix: '', label: 'Companies Founded' },
              { value: 9, suffix: '+', label: 'Tech Projects' },
              { value: 8, suffix: '+', label: 'Team Members' },
              { value: 2, suffix: '+', label: 'Years in Care Sector' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
              >
                <p className="text-5xl font-bold text-teal-600 mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The AANDA Group Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold mb-3">The AANDA Group</h2>
            <p className="text-xl text-gray-300">A diversified business conglomerate across Nigeria and the United Kingdom</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { 
                name: 'A AND A COMPUTERS', 
                country: '🇳🇬 Nigeria', 
                focus: 'Technology Services',
                description: 'Flagship business with 8+ staff, custom-built management platform',
                established: '2017'
              },
              { 
                name: 'AANDA SUPPLIES & IMPORTS', 
                country: '🇳🇬 Nigeria', 
                focus: 'Import/Export',
                description: 'Procurement and supply chain operations',
                established: '2019'
              },
              { 
                name: 'A AND A FARMS & FOODS', 
                country: '🇳🇬 Nigeria', 
                focus: 'Agriculture',
                description: 'Agricultural production and food processing',
                established: '2025'
              },
              { 
                name: 'AANDA LABS LIMITED', 
                country: '🇬🇧 UK', 
                focus: 'Software Development',
                description: 'IT consultancy, data processing, educational support',
                established: 'Dec 2025'
              },
              { 
                name: 'AANDA SUPPLIES & IMPORTS', 
                country: '🇬🇧 UK', 
                focus: 'Food Imports',
                description: 'Falkirk Council registered food business',
                established: 'Dec 2025'
              },
            ].map((company, index) => (
              <motion.div
                key={company.name + company.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-teal-400/50 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-teal-400 font-medium">{company.country}</span>
                  <span className="text-xs text-gray-400">Est. {company.established}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{company.name}</h3>
                <p className="text-teal-400 text-sm font-medium mb-2">{company.focus}</p>
                <p className="text-gray-400 text-sm">{company.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/ventures"
              className="inline-block px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
            >
              Explore All Ventures →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Projects</h2>
            <p className="text-xl text-gray-600">Healthcare solutions and business platforms in production</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                title: 'A&A Business Management Platform', 
                category: 'Business Tech', 
                impact: 'Production system managing 8+ staff',
                id: 'aanda-business-platform',
                isNew: true
              },
              { 
                title: 'NHS A&E Wait Time Prediction', 
                category: 'Healthcare AI', 
                impact: '85.67% accuracy prediction model',
                id: 'nhs-ae-wait-time-prediction'
              },
              { 
                title: 'Pneumonia Detection System', 
                category: 'Medical AI', 
                impact: '85.58% diagnostic accuracy',
                id: 'pneumonia-detection-system'
              },
              { 
                title: 'COVID-19 Healthcare Impact Analysis', 
                category: 'Public Health', 
                impact: 'Scotland 14 health boards analysis',
                id: 'covid-19-healthcare-impact'
              },
              { 
                title: 'Mental Health Demand Forecasting', 
                category: 'Health Analytics', 
                impact: 'ARIMA forecasting across Scotland',
                id: 'mental-health-demand-forecasting'
              },
              { 
                title: 'Fall Risk Assessment System', 
                category: 'Care Technology', 
                impact: '79.5% accuracy, 85.6% AUC',
                id: 'fall-risk-assessment'
              },
            ].map((project, index) => (
              <Link key={project.title} href={`/portfolio/${project.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white rounded-xl border-2 border-gray-200 hover:border-teal-300 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden h-full"
                >
                  <div className="aspect-video bg-gradient-to-br from-teal-100 to-blue-100 overflow-hidden relative">
                    {project.isNew && (
                      <div className="absolute top-3 right-3 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                        FLAGSHIP
                      </div>
                    )}
                    {project.id === 'nhs-ae-wait-time-prediction' && (
                      <img 
                        src="/projects/nhs-ae-prediction-1.png"
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {project.id === 'pneumonia-detection-system' && (
                      <img 
                        src="/projects/pneumonia-detection-1.png"
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {project.id === 'fall-risk-assessment' && (
                      <img 
                        src="/projects/fall-risk-1.png"
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {project.id === 'mental-health-demand-forecasting' && (
                      <img 
                        src="/projects/mental-health-1.png"
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {project.id === 'aanda-business-platform' && (
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-800 to-gray-900">
                        <div className="text-center">
                          <span className="text-5xl">🏢</span>
                          <p className="text-white font-semibold mt-2">Business Platform</p>
                        </div>
                      </div>
                    )}
                    {!['nhs-ae-wait-time-prediction', 'pneumonia-detection-system', 'fall-risk-assessment', 'mental-health-demand-forecasting', 'aanda-business-platform'].includes(project.id) && (
                      <div className="flex items-center justify-center h-full">
                        <svg className="w-16 h-16 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-teal-600 font-semibold mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {project.impact}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/portfolio"
              className="inline-block px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Care Experience Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Grounded in Care</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My work in Scottish social care isn&apos;t just a job—it&apos;s the foundation of everything I build. Working directly with people with learning disabilities gives me unique insight into what care technology actually needs to do.
              </p>
              <div className="space-y-4">
                {[
                  'Frontline understanding of care delivery challenges',
                  'Real insight into what staff and residents actually need',
                  'Technology designed for practical care environments',
                  'Commitment to dignity, privacy, and person-centered solutions',
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border-2 border-teal-100"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💙</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Care Tech Vision</h3>
                <p className="text-gray-600 mb-6">
                  Building technology that genuinely improves lives in health and social care settings—not just digitizing processes, but transforming outcomes.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-2xl font-bold text-teal-600">2+</p>
                    <p className="text-sm text-gray-600">Years in Care</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-2xl font-bold text-teal-600">Scotland</p>
                    <p className="text-sm text-gray-600">Based & Committed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build Something Meaningful</h2>
            <p className="text-xl mb-8 text-teal-100">
              Whether you need care technology solutions, data analytics, or business automation—I bring both technical expertise and real-world care experience.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl"
              >
                Get in Touch
              </Link>
              <Link 
                href="/portfolio"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Explore My Work
              </Link>
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
                {['About', 'Portfolio', 'Experience & Skills', 'Contact'].map(item => (
                  <Link key={item} href={`/${item.toLowerCase()}`} className="block text-gray-400 hover:text-white transition text-sm">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ventures</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">The AANDA Group</p>
                <p className="text-gray-400">A&A Computers 🇳🇬</p>
                <p className="text-gray-400">AANDA Labs Ltd 🇬🇧</p>
                <p className="text-gray-400">AANDA Supplies 🇬🇧</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3 mb-4">
                <a href="mailto:ayoolumimelehon@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/ayoolumi-melehon-b63237179/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/ayothetechguy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm">Grangemouth, Falkirk, Scotland</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>© 2026 Ayoolumi Melehon | Founder, The AANDA Group</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
