import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-[#023e8a] to-[#0096c7] p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#03045e]">AStechnix</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#0077b6]'
                    : 'text-gray-600 hover:text-[#0096c7]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.path)
                    ? 'text-[#0077b6]'
                    : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
