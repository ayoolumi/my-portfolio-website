'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import { 
  FileText, 
  BookOpen, 
  Table, 
  Code, 
  Download, 
  Search,
  Filter,
  FileSpreadsheet,
  FileCode,
  File,
  CheckCircle,
  Menu,
  X,
  Clock
} from 'lucide-react';

// Resource categories
const categories = [
  { id: 'all', name: 'All Resources', icon: Filter },
  { id: 'templates', name: 'Templates', icon: FileText },
  { id: 'guides', name: 'Guides & Ebooks', icon: BookOpen },
  { id: 'spreadsheets', name: 'Spreadsheets', icon: Table },
  { id: 'code', name: 'Code & Datasets', icon: Code },
];

// Resources data
const resources = [
  // TEMPLATES
  {
    id: 1,
    title: 'Professional CV Template',
    description: 'A clean, modern CV template designed for data analysts and tech professionals. ATS-friendly format with clear sections.',
    category: 'templates',
    fileType: 'DOCX',
    fileSize: '45 KB',
    downloadUrl: '/downloads/templates/cv-template.docx',
    tags: ['CV', 'Resume', 'Job Application'],
    featured: true,
    comingSoon: false,
  },
  {
    id: 2,
    title: 'Cover Letter Template',
    description: 'Professional cover letter template with guidance notes. Customizable for various industries and roles.',
    category: 'templates',
    fileType: 'DOCX',
    fileSize: '32 KB',
    downloadUrl: '/downloads/templates/cover-letter-template.docx',
    tags: ['Cover Letter', 'Job Application'],
    featured: false,
    comingSoon: false,
  },
  {
    id: 3,
    title: 'Care Documentation Templates Pack',
    description: 'Essential care sector documentation templates including care plans, incident reports, and daily records.',
    category: 'templates',
    fileType: 'ZIP',
    fileSize: '120 KB',
    downloadUrl: '/downloads/templates/care-documentation-pack.zip',
    tags: ['Care Sector', 'Documentation', 'Healthcare'],
    featured: true,
    comingSoon: false,
  },
  {
    id: 4,
    title: 'Project Proposal Template',
    description: 'Professional project proposal template for data analytics and AI projects with sections for scope, timeline, and budget.',
    category: 'templates',
    fileType: 'DOCX',
    fileSize: '55 KB',
    downloadUrl: '/downloads/templates/project-proposal-template.docx',
    tags: ['Project Management', 'Proposal'],
    featured: false,
    comingSoon: false,
  },
  
  // GUIDES & EBOOKS
  {
    id: 5,
    title: 'Getting Started with AI: A Beginner\'s Guide',
    description: 'Comprehensive introduction to Artificial Intelligence concepts, applications, and how to start your AI journey.',
    category: 'guides',
    fileType: 'PDF',
    fileSize: '2.5 MB',
    downloadUrl: '/downloads/guides/ai-beginners-guide.pdf',
    tags: ['AI', 'Machine Learning', 'Beginner'],
    featured: true,
    comingSoon: false,
  },
  {
    id: 6,
    title: 'Data Analytics with Python: Quick Start',
    description: 'Step-by-step tutorial on using Python for data analysis. Covers pandas, numpy, and visualization basics.',
    category: 'guides',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    downloadUrl: '/downloads/guides/python-data-analytics.pdf',
    tags: ['Python', 'Data Analytics', 'Tutorial'],
    featured: true,
    comingSoon: false,
  },
  {
    id: 7,
    title: 'Care Sector Digital Transformation Guide',
    description: 'A practical guide for care organisations looking to implement digital solutions and improve operational efficiency.',
    category: 'guides',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    downloadUrl: '/downloads/guides/care-digital-transformation.pdf',
    tags: ['Care Sector', 'Digital', 'Healthcare'],
    featured: false,
    comingSoon: false,
  },
  {
    id: 8,
    title: 'SQL for Data Analysts: Cheat Sheet',
    description: 'Essential SQL queries and commands every data analyst needs. Quick reference guide with examples.',
    category: 'guides',
    fileType: 'PDF',
    fileSize: '850 KB',
    downloadUrl: '/downloads/guides/sql-cheat-sheet.pdf',
    tags: ['SQL', 'Database', 'Reference'],
    featured: false,
    comingSoon: false,
  },
  {
    id: 9,
    title: 'Building Dashboards with Streamlit',
    description: 'Learn how to create interactive data dashboards using Python and Streamlit. Includes code examples.',
    category: 'guides',
    fileType: 'PDF',
    fileSize: '2.1 MB',
    downloadUrl: '/downloads/guides/streamlit-dashboard-guide.pdf',
    tags: ['Streamlit', 'Dashboard', 'Python'],
    featured: false,
    comingSoon: false,
  },

  // SPREADSHEETS
  {
    id: 10,
    title: 'Personal Budget Tracker',
    description: 'Comprehensive budget tracking spreadsheet with income, expenses, savings goals, and visual charts.',
    category: 'spreadsheets',
    fileType: 'XLSX',
    fileSize: '85 KB',
    downloadUrl: '/downloads/spreadsheets/budget-tracker.xlsx',
    tags: ['Budget', 'Finance', 'Personal'],
    featured: true,
    comingSoon: false,
  },
  {
    id: 11,
    title: 'Project Planner & Timeline',
    description: 'Project management spreadsheet with Gantt chart, task tracking, milestones, and resource allocation.',
    category: 'spreadsheets',
    fileType: 'XLSX',
    fileSize: '95 KB',
    downloadUrl: '/downloads/spreadsheets/project-planner.xlsx',
    tags: ['Project Management', 'Planning', 'Gantt'],
    featured: true,
    comingSoon: false,
  },
  {
    id: 12,
    title: 'KPI Dashboard Template',
    description: 'Business KPI tracking dashboard with automated charts and conditional formatting. Easy to customize.',
    category: 'spreadsheets',
    fileType: 'XLSX',
    fileSize: '120 KB',
    downloadUrl: '/downloads/spreadsheets/kpi-dashboard.xlsx',
    tags: ['KPI', 'Dashboard', 'Business'],
    featured: false,
    comingSoon: false,
  },
  {
    id: 13,
    title: 'Staff Rota Template',
    description: 'Weekly staff scheduling template with shift patterns, hour calculations, and coverage tracking.',
    category: 'spreadsheets',
    fileType: 'XLSX',
    fileSize: '75 KB',
    downloadUrl: '/downloads/spreadsheets/staff-rota-template.xlsx',
    tags: ['HR', 'Scheduling', 'Staff Management'],
    featured: false,
    comingSoon: false,
  },
  {
    id: 14,
    title: 'Invoice Tracker',
    description: 'Track invoices, payments, and outstanding amounts. Includes aging analysis and payment reminders.',
    category: 'spreadsheets',
    fileType: 'XLSX',
    fileSize: '68 KB',
    downloadUrl: '/downloads/spreadsheets/invoice-tracker.xlsx',
    tags: ['Finance', 'Invoicing', 'Business'],
    featured: false,
    comingSoon: false,
  },

  // CODE & DATASETS - ALL COMING SOON
  {
    id: 15,
    title: 'Python Data Cleaning Scripts',
    description: 'Collection of reusable Python scripts for common data cleaning tasks. Well-documented and ready to use.',
    category: 'code',
    fileType: 'ZIP',
    fileSize: '45 KB',
    downloadUrl: '#',
    tags: ['Python', 'Data Cleaning', 'Scripts'],
    featured: false,
    comingSoon: true,
  },
  {
    id: 16,
    title: 'Sample Healthcare Dataset',
    description: 'Synthetic healthcare dataset for practice and learning. Includes patient demographics, appointments, and outcomes.',
    category: 'code',
    fileType: 'CSV',
    fileSize: '1.2 MB',
    downloadUrl: '#',
    tags: ['Dataset', 'Healthcare', 'Practice'],
    featured: false,
    comingSoon: true,
  },
  {
    id: 17,
    title: 'Streamlit Dashboard Starter Template',
    description: 'Ready-to-use Streamlit dashboard template with sidebar navigation, charts, and data upload functionality.',
    category: 'code',
    fileType: 'ZIP',
    fileSize: '35 KB',
    downloadUrl: '#',
    tags: ['Streamlit', 'Dashboard', 'Template'],
    featured: false,
    comingSoon: true,
  },
  {
    id: 18,
    title: 'SQL Practice Queries & Database',
    description: 'SQLite database with sample data and practice queries. Perfect for learning and interview prep.',
    category: 'code',
    fileType: 'ZIP',
    fileSize: '500 KB',
    downloadUrl: '#',
    tags: ['SQL', 'Database', 'Practice'],
    featured: false,
    comingSoon: true,
  },
  {
    id: 19,
    title: 'Machine Learning Model Templates',
    description: 'Jupyter notebooks with ML model templates for classification, regression, and clustering tasks.',
    category: 'code',
    fileType: 'ZIP',
    fileSize: '180 KB',
    downloadUrl: '#',
    tags: ['Machine Learning', 'Jupyter', 'Python'],
    featured: false,
    comingSoon: true,
  },
];

const getFileIcon = (fileType: string) => {
  switch (fileType.toLowerCase()) {
    case 'pdf':
      return <FileText className="w-5 h-5 text-red-500" />;
    case 'docx':
    case 'doc':
      return <File className="w-5 h-5 text-blue-500" />;
    case 'xlsx':
    case 'xls':
      return <FileSpreadsheet className="w-5 h-5 text-green-600" />;
    case 'csv':
      return <Table className="w-5 h-5 text-orange-500" />;
    case 'zip':
      return <FileCode className="w-5 h-5 text-purple-500" />;
    default:
      return <File className="w-5 h-5 text-gray-500" />;
  }
};

const getCategoryIcon = (categoryId: string) => {
  const category = categories.find(c => c.id === categoryId);
  if (category) {
    const Icon = category.icon;
    return <Icon className="w-5 h-5" />;
  }
  return <File className="w-5 h-5" />;
};

const getCategoryColor = (categoryId: string) => {
  switch (categoryId) {
    case 'templates':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'guides':
      return 'bg-purple-100 text-purple-700 border-purple-200';
    case 'spreadsheets':
      return 'bg-green-100 text-green-700 border-green-200';
    case 'code':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadedItems, setDownloadedItems] = useState<number[]>([]);
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

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(r => r.featured && !r.comingSoon);

  const handleDownload = (resourceId: number) => {
    setDownloadedItems(prev => [...prev, resourceId]);
  };

  const availableCount = filteredResources.filter(r => !r.comingSoon).length;
  const comingSoonCount = filteredResources.filter(r => r.comingSoon).length;

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
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Portfolio', 'Resources', 'Experience & Skills'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Experience & Skills' ? '/experience' : `/${item.toLowerCase()}`} 
                  className={`relative text-gray-600 hover:text-teal-600 transition-colors font-medium text-sm group py-2 ${
                    item === 'Resources' ? 'text-teal-600' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 ease-out ${
                    item === 'Resources' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200 py-4 px-4"
          >
            {['About', 'Portfolio', 'Resources', 'Experience & Skills', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Experience & Skills' ? '/experience' : `/${item.toLowerCase()}`}
                className="block py-3 text-gray-600 hover:text-teal-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </motion.nav>

      <section className="pt-16 pb-12 px-4 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              📁 Free Downloads
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Download free templates, guides, spreadsheets, and code samples to accelerate your data analytics and AI journey.
            </p>

            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isCodeCategory = category.id === 'code';
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-teal-600 border-teal-600 text-white shadow-md'
                      : 'bg-white border-gray-300 text-gray-600 hover:border-teal-500 hover:text-teal-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                  {isCodeCategory && (
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ml-1 ${
                      selectedCategory === category.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {selectedCategory === 'all' && searchQuery === '' && (
        <section className="px-4 pb-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-yellow-500">★</span> Featured Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-teal-50 to-blue-50 border border-gray-200 rounded-xl p-4 hover:border-teal-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    {getFileIcon(resource.fileType)}
                    <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(resource.category)}`}>
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2 line-clamp-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{resource.fileType} • {resource.fileSize}</span>
                    <a
                      href={resource.downloadUrl}
                      onClick={() => handleDownload(resource.id)}
                      className="flex items-center gap-1 text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto pt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Resources' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">
                {availableCount} available
              </span>
              {comingSoonCount > 0 && (
                <span className="text-amber-600 text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {comingSoonCount} coming soon
                </span>
              )}
            </div>
          </div>

          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-4 text-teal-600 hover:text-teal-700 transition-colors font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`bg-white border rounded-xl p-6 transition-all duration-300 group ${
                    resource.comingSoon 
                      ? 'border-gray-200 opacity-80' 
                      : 'border-gray-200 hover:border-teal-500 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg transition-colors ${
                      resource.comingSoon 
                        ? 'bg-gray-100' 
                        : 'bg-gray-100 group-hover:bg-teal-100'
                    }`}>
                      {getCategoryIcon(resource.category)}
                    </div>
                    <div className="flex items-center gap-2">
                      {resource.comingSoon && (
                        <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Coming Soon
                        </span>
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(resource.category)}`}>
                        {resource.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className={`font-semibold text-lg mb-2 transition-colors ${
                    resource.comingSoon 
                      ? 'text-gray-700' 
                      : 'text-gray-900 group-hover:text-teal-600'
                  }`}>
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      {getFileIcon(resource.fileType)}
                      <span className="text-xs text-gray-500">{resource.fileType} • {resource.fileSize}</span>
                    </div>
                    {resource.comingSoon ? (
                      <span className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm bg-gray-100 text-gray-500 cursor-not-allowed">
                        <Clock className="w-4 h-4" />
                        Coming Soon
                      </span>
                    ) : (
                      <a
                        href={resource.downloadUrl}
                        onClick={() => handleDownload(resource.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                          downloadedItems.includes(resource.id)
                            ? 'bg-green-100 text-green-700'
                            : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                        }`}
                      >
                        {downloadedItems.includes(resource.id) ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            Downloaded
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Download
                          </>
                        )}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 pb-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="text-teal-100 mb-6">
              Looking for custom templates, dashboards, or data solutions tailored to your specific needs? 
              Let&apos;s discuss how I can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-teal-700 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-md"
              >
                Get in Touch
              </Link>
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-teal-700 text-white font-medium rounded-lg hover:bg-teal-800 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Ayoolumi Melehon</h3>
              <p className="text-gray-400 text-sm">
                Care Tech Advocate, Data Analyst & AI Developer, Tech Entrepreneur. Building intelligent solutions for healthcare, social care, and business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-teal-400 transition-colors text-sm">About</Link>
                <Link href="/portfolio" className="block text-gray-400 hover:text-teal-400 transition-colors text-sm">Portfolio</Link>
                <Link href="/resources" className="block text-gray-400 hover:text-teal-400 transition-colors text-sm">Resources</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-teal-400 transition-colors text-sm">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business</h4>
              <div className="space-y-2">
                <a href="https://aandacomputers.theaandagroup.com/" className="block text-gray-400 hover:text-teal-400 transition-colors text-sm">AandA Computers 🇳🇬</a>
                <a href="https://labs.theaandagroup.com/" className="block text-gray-400 hover:text-teal-400 transition-colors text-sm">AandA Labs Limited 🇬🇧</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400 text-sm">Grangemouth, Falkirk, Scotland</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 Ayoolumi Melehon | Founder, The AandA Group. All resources are free to use.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
