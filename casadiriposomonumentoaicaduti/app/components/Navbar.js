"use client"
import React, { useState } from 'react';

export default function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Chiude il menu mobile e tutti i dropdown
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Toggle menu mobile
  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  // Toggle dropdown mobile
  const handleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  // Link per i dropdown (desktop e mobile)
  const dropdowns = [
    {
      title: props.titolo1,
      items: [
        { href: "pg1", label: props.dt },
        { href: "pg2", label: props.dt1 },
        { href: "pg3", label: props.dt2 },
        { href: "pg4", label: props.dt3 },
        { href: "pg5", label: props.dt4 },
      ],
    },
    {
      title: props.titolo2,
      items: [
        { href: "/doc/CdR_Statuto_2021.pdf", label: props.dt20 },
        { href: "pg7", label: props.dt25 },
      ],
    },
    {
      title: props.titolo3,
      items: [
        { href: "/", label: props.dt50 },
        { href: "/", label: props.dt55 },
        { href: "/", label: props.dt60 },
        { href: "pg9", label: props.dt65 },
        { href: "pg10", label: props.dt70 },
        { href: "/", label: props.dt75 },
        { href: "/", label: props.dt80 },
        { href: "pg11", label: props.dt85 },
      ],
    },
    {
      title: props.titolo4,
      items: [
        { href: "/", label: props.dt90 },
        { href: "pg12", label: props.dt95 },
      ],
    },
  ];

  // Social/other links
  const socialLinks = [
    { href: "pg13", label: props.soc1 },
    { href: "pg16", label: props.soc2 },
    // { href: "pg13", label: props.soc3 }, // soc3 non usato in desktop
    { href: "pg14", label: props.soc4 },
  ];

  return (
    <nav className="bg-gradient-to-r from-white via-gray-50 to-gray-200 shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="transition-transform hover:scale-105">
            <img
              src={props.img}
              alt="Logo"
              // Cambiato da h-10 a h-16 per rendere l'immagine più grande
              className="h-16 w-auto rounded-lg shadow-md border border-gray-100 bg-white p-1"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2">
          {/* Dropdowns */}
          {dropdowns.map((dropdown, idx) => (
            <div className="group relative" key={idx}>
              <button className="px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-red-50 hover:text-red-600 transition-all flex items-center gap-1">
                {dropdown.title}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-50">
                {dropdown.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="block px-5 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md transition"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          {/* Social/Other Links */}
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="px-3 py-2 text-gray-700 hover:text-red-600 font-semibold rounded-md transition"
            >
              {link.label}
            </a>
          ))}
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
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white p-5 space-y-2 absolute top-full left-0 right-0 shadow-xl border-b border-gray-100 z-40 animate-fade-in">
          {/* Dropdowns Mobile */}
          {dropdowns.map((dropdown, idx) => (
            <div className="relative" key={idx}>
              <button
                onClick={() => handleDropdown(idx)}
                className="w-full text-left text-gray-800 font-semibold rounded-md hover:bg-red-50 flex justify-between items-center px-4 py-2 transition"
                aria-expanded={openDropdown === idx}
              >
                {dropdown.title}
                <svg
                  className={`h-4 w-4 ml-1 transform transition-transform duration-200 ${openDropdown === idx ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === idx && (
                <div className="mt-2 w-full bg-gray-50 rounded-lg shadow-inner py-2">
                  {dropdown.items.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Social/Other Links Mobile */}
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="block text-gray-800 font-semibold hover:text-red-600 px-4 py-2 rounded-md transition"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}