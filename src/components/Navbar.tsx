import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-gray-900">FDS V2</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/work" className={`text-sm font-medium transition-colors ${isActive('/work') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>Work</Link>
            <Link to="/services" className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>Services</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>About</Link>
            <Link to="/contact" className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">Start a Project</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/work" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-900">Work</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-900">Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-900">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-blue-600">Start a Project</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
