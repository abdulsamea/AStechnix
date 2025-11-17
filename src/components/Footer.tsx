import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Mail, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#03045e] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-[#00b4d8] to-[#48cae4] p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AStechnix</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering NGOs, Governments, and Private Sectors with AI-driven solutions to eliminate bottlenecks and automate repetitive tasks.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#48cae4] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#48cae4] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#48cae4] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-[#48cae4] transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Process Automation</li>
              <li>AI Integration</li>
              <li>Workflow Optimization</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/company/astechnix/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#0077b6] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/astechnix_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#0077b6] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/AStechnix/61571877568172/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#0077b6] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <a
              href="mailto:contact@astechnix.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-[#48cae4] transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>contact@astechnix.com</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} AStechnix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
