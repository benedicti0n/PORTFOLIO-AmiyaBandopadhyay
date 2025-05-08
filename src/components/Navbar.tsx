import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <Shield className="h-8 w-8 text-[#005DA6]" />
            <span className="ml-2 text-xl font-semibold text-[#005DA6]">
              Anil Kumar
              <span className="text-[#F7CB05] font-bold"> LIC</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-[#005DA6] transition-all">Home</a>
            <a href="#about" className="text-gray-800 hover:text-[#005DA6] transition-all">About</a>
            <a href="#services" className="text-gray-800 hover:text-[#005DA6] transition-all">Services</a>
            <a href="#gallery" className="text-gray-800 hover:text-[#005DA6] transition-all">Gallery</a>
            <a href="#testimonials" className="text-gray-800 hover:text-[#005DA6] transition-all">Testimonials</a>
            <a href="#contact" className="text-gray-800 hover:text-[#005DA6] transition-all">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#005DA6] focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4 transition-all">
            <div className="flex flex-col space-y-3">
              <a 
                href="#" 
                className="text-gray-800 hover:text-[#005DA6] transition-all py-2 px-4 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-800 hover:text-[#005DA6] transition-all py-2 px-4 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-gray-800 hover:text-[#005DA6] transition-all py-2 px-4 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#gallery" 
                className="text-gray-800 hover:text-[#005DA6] transition-all py-2 px-4 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-800 hover:text-[#005DA6] transition-all py-2 px-4 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="text-gray-800 hover:text-[#005DA6] transition-all py-2 px-4 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;