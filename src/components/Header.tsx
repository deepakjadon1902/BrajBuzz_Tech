
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';

export function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Motivation & Our Inspiration', path: '/motivation' },
    { name: 'Videos', path: '/videos' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0A0A0A] transition-all duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo and Brand Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#002366] dark:ring-white transition-all duration-300 group-hover:ring-4">
                <img 
                  src="/images/logo.png" 
                  alt="BrajBuzz Tech Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-[#002366] dark:text-white transition-colors">
                BrajBuzz Tech
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 dark:text-gray-300 hover:text-[#002366] dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun size={20} className="text-gray-300" />
                ) : (
                  <Moon size={20} className="text-gray-700" />
                )}
              </button>

              {/* Subscribe Button */}
              <a
                href="https://www.youtube.com/@BrajBuzzTech"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-[#E62117] text-white px-6 py-3 rounded-full text-center hover:bg-[#CC1813] transition-all duration-300 hover:scale-105"
              >
                YouTube Channel
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu size={24} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-16 bottom-0 w-64 bg-white dark:bg-[#0A0A0A] shadow-xl">
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-gray-700 dark:text-gray-300 hover:text-[#002366] dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://www.youtube.com/@BrajBuzzTech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E62117] text-white px-6 py-3 rounded-full text-center hover:bg-[#CC1813] transition-all duration-300"
              >
                YouTube Channel
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Search Overlay (Optional UI Keep) */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="w-full max-w-3xl relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              autoFocus
              placeholder="Search..."
              className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white pl-16 pr-16 py-6 text-xl rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#002366]"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}