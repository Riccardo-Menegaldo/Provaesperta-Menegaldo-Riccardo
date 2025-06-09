"use client"
import React, { useState } from 'react';

export default function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdowns when closing the main menu
    if (isMobileMenuOpen) {
      setIsDropdown1Open(false);
      setIsDropdown2Open(false);
    }
  };

  const toggleDropdown1 = () => {
    setIsDropdown1Open(!isDropdown1Open);
    setIsDropdown2Open(false); // Close other dropdown
  };

  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
    setIsDropdown1Open(false); // Close other dropdown
  };

  return (
    <nav className="bg-gradient-to-r from-white via-gray-50 to-gray-200 shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="transition-transform hover:scale-105">
            <img
              src={props.img}
              alt="Logo"
              className="h-10 w-auto rounded-lg shadow-md border border-gray-100 bg-white p-1"
            />
          </a>
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-2">
          {/* Dropdown Menu 1 */}
          <div className="group relative">
            <button className="px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-red-50 hover:text-red-600 transition-all flex items-center gap-1">
              {props.titolo1}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
              <a href="pg1" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt}</a>
              <a href="pg2" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt1}</a>
              <a href="pg3" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt2}</a>
              <a href="pg4" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt3}</a>
              <a href="pg5" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt4}</a>
            </div>
          </div>

          {/* Dropdown Menu 2 */}
          <div className="group relative">
            <button className="px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-red-50 hover:text-red-600 transition-all flex items-center gap-1">
              {props.titolo2}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
              <a href="/doc/CdR_Statuto_2021.pdf" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt20}</a>
              <a href="pg7" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt25}</a>
            </div>
          </div>

          {/* Dropdown Menu 3 */}
          <div className="group relative">
            <button className="px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-red-50 hover:text-red-600 transition-all flex items-center gap-1">
              {props.titolo3}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
              <a href="#" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt50}</a>
              <a href="#" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt55}</a>
              <a href="#" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt60}</a>
              <a href="pg9" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt65}</a>
              <a href="pg10" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt70}</a>
              <a href="#" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt75}</a>
              <a href="#" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt80}</a>
              <a href="pg11" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt85}</a>
            </div>
          </div>

          {/* Dropdown Menu 4 */}
          <div className="group relative">
            <button className="px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-red-50 hover:text-red-600 transition-all flex items-center gap-1">
              {props.titolo4}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
              <a href="pg12" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt90}</a>
              <a href="#" className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition">{props.dt95}</a>
            </div>
          </div>

          {/* Social/Other Links */}
          <a href="pg13" className="px-3 py-2 text-gray-700 hover:text-red-600 font-semibold rounded-md transition">{props.soc1}</a>
          <a href="pg16" className="px-3 py-2 text-gray-700 hover:text-red-600 font-semibold rounded-md transition">{props.soc2}</a>
          <a href="pg14" className="px-3 py-2 text-gray-700 hover:text-red-600 font-semibold rounded-md transition">{props.soc4}</a>
          <a href="#" className="px-3 py-2 text-red-600 hover:text-white hover:bg-red-600 font-semibold rounded-md transition">{props.soc5}</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-red-600 focus:outline-none cursor-pointer rounded-md p-2 transition"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white p-5 space-y-4 absolute top-full left-0 right-0 shadow-xl border-b border-gray-100`}>
        {/* Mobile Dropdown Menu 1 */}
        <div className="relative">
          <button
            onClick={toggleDropdown1}
            className="w-full text-left text-gray-800 font-semibold rounded-md hover:bg-red-50 flex justify-between items-center px-4 py-2 transition"
            aria-expanded={isDropdown1Open}
          >
            {props.titolo1}
            <svg className={`h-4 w-4 ml-1 transform transition-transform duration-200 ${isDropdown1Open ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`mt-2 w-full bg-gray-50 rounded-lg shadow-inner py-2 ${isDropdown1Open ? 'block' : 'hidden'}`}>
            <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition">{props.dt}</a>
            <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition">{props.dt1}</a>
            <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition">{props.dt3}</a>
          </div>
        </div>

        {/* Mobile Dropdown Menu 2 */}
        <div className="relative">
          <button
            onClick={toggleDropdown2}
            className="w-full text-left text-gray-800 font-semibold rounded-md hover:bg-red-50 flex justify-between items-center px-4 py-2 transition"
            aria-expanded={isDropdown2Open}
          >
            {props.titolo2}
            <svg className={`h-4 w-4 ml-1 transform transition-transform duration-200 ${isDropdown2Open ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`mt-2 w-full bg-gray-50 rounded-lg shadow-inner py-2 ${isDropdown2Open ? 'block' : 'hidden'}`}>
            <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition">{props.dt4}</a>
            <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition">{props.dt5}</a>
            <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition">{props.dt6}</a>
          </div>
        </div>


        <a href="#" className="block text-gray-800 font-semibold hover:text-red-600 px-4 py-2 rounded-md transition">{props.soc1}</a>
        <a href="#" className="block text-gray-800 font-semibold hover:text-red-600 px-4 py-2 rounded-md transition">{props.soc2}</a>
        <a href="pg13" className="block text-gray-800 font-semibold hover:text-red-600 px-4 py-2 rounded-md transition">{props.soc3}</a>
        <a href="pg14" className="block text-gray-800 font-semibold hover:text-red-600 px-4 py-2 rounded-md transition">{props.soc4}</a>
  
      </div>
    </nav>
  );
}