'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-[10%] z-50 flex flex-col items-center">
      {/* Dropdown Content Panel */}
      <div
        className={`bg-[#FFFCE8] border-2 border-[#8CA8AB] rounded-b-2xl shadow-xl transition-all duration-300 ease-in-out overflow-hidden w-64 ${
          isOpen ? 'max-h-96 opacity-100 p-6' : 'max-h-0 opacity-0 p-0 border-none'
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 text-slate-800 font-mono text-center">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-teal-600 transition font-medium"
          >
            -Home-
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-teal-600 transition font-medium"
          >
            -About me-
          </button>
          <button
            onClick={() => scrollToSection('works')}
            className="hover:text-teal-600 transition font-medium"
          >
            -Creative works-
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-teal-600 transition font-medium"
          >
            -Contact-
          </button>

          {/* Download CV PDF link */}
          <a
            href="/pdfs/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block w-full py-2 px-4 bg-[#3E4545] text-white rounded-xl hover:bg-slate-700 transition font-mono text-sm"
          >
            -Download CV-
          </a>
        </nav>
      </div>

      {/* Pull Tab Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#8CA8AB] text-slate-100 px-6 py-1.5 rounded-b-xl text-xs font-mono tracking-widest hover:bg-[#79999D] transition shadow-md cursor-pointer flex items-center gap-1"
        aria-label="Toggle navigation menu"
      >
        -------more-------
      </button>
    </div>
  );
}