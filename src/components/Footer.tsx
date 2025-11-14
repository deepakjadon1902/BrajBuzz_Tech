import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    'Smartphones',
    'Laptops & PCs',
    'Wearables',
    'Gaming',
    'Smart Home',
    'Audio',
    'Cameras',
    'AI & Software'
  ];

  const quickLinks = [
    'About Us',
    'Contact',
    'Privacy Policy',
    'Terms of Service',
    'Editorial Policy'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* ---------- Company Info ---------- */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BrajBuzz Tech</h3>
            <p className="text-sm mb-4 text-gray-400">
              Your Source for Honest Tech Reviews
            </p>
            <p className="text-sm mb-6 text-gray-400">
              We provide in-depth, unbiased reviews of the latest technology products to help you make informed decisions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@BrajBuzzTech" className="hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* ---------- Categories ---------- */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link to="/reviews" className="text-sm hover:text-white transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Quick Links (UPDATED) ---------- */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                let path = '/';
                if (link === 'About Us') path = '/about';       // ✅ Added route for About Us
                else if (link === 'Contact') path = '/contact';
                else if (link === 'Privacy Policy') path = '/privacy';
                else if (link === 'Terms of Service') path = '/terms';
                else if (link === 'Editorial Policy') path = '/editorial';

                return (
                  <li key={link}>
                    <Link to={path} className="text-sm hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- Newsletter ---------- */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-sm mb-4 text-gray-400">
              Get weekly tech news and exclusive reviews delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#002366]"
              />
              <button className="bg-[#002366] text-white px-6 py-2 rounded-full hover:bg-[#003399] transition-all text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Footer Bottom ---------- */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 BrajBuzz Tech. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
