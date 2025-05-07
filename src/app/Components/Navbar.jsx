"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDesktopDropdown = () => {
    setIsDesktopDropdownOpen(!isDesktopDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setIsDesktopDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setIsMobileDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
      
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/lgo3.jpg"
                alt="logo"
                height={50}
                width={50}
                className="object-contain"
              />
            </Link>
          </div>

      
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-700 hover:text-red-500 font-medium transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-700 hover:text-red-500 font-medium transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-700 hover:text-red-500 font-medium transition duration-300">
                  Menu
                </Link>
              </li>
              <li className="relative" ref={desktopDropdownRef}>
                <button 
                  className="text-gray-700 hover:text-red-500 font-medium transition duration-300 flex items-center"
                  onClick={toggleDesktopDropdown}
                >
                  Blog
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDesktopDropdownOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-2 px-4">
                      <Link href="/blog" onClick={() => isDesktopDropdownOpen(false)} className="block py-2 text-gray-700 hover:text-red-500 transition duration-300">
                        Blog
                      </Link>
                      <Link href="/blog-details" onClick={() => isDesktopDropdownOpen(false)} className="block py-2 text-gray-700 hover:text-red-500 transition duration-300">
                        Blog Details
                      </Link>
                      {/* <Link href="/element" className="block py-2 text-gray-700 hover:text-red-500 transition duration-300">
                        Element
                      </Link> */}
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link href="/contact" className="text-gray-700 hover:text-red-500 font-medium transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

      
          <div className="hidden md:block">
            <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg transition duration-300">
              <Link href="/order-online">
                Order Online
              </Link>
            </button>
          </div>

        
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-end px-2 pt-2 pb-3 space-y-1 sm:px-3 h-full overflow-y-auto">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 self-end"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200"
          >
            Menu
          </Link>
          
          <div ref={mobileDropdownRef} className="w-full">
            <button
              onClick={toggleMobileDropdown}
              className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200"
            >
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transform ${isMobileDropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            
            <div className={`pl-4 overflow-hidden transition-all duration-300 ${isMobileDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="/blog-details"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200"
              >
                Blog Details
              </Link>
              {/* <Link
                href="/element"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200"
              >
                Element
              </Link> */}
            </div>
          </div>
          
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors duration-200"
          >
            Contact
          </Link>
          
          <div className="mt-4 px-3 w-full">
            <button className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg transition-all duration-300">
              <Link href="/order-online"
              onClick={() => setIsMobileMenuOpen(false)}
              >
                Order Online
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;