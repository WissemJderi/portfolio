// Navbar.tsx
"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">My Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("My Projects")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              My Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <button
              onClick={() => scrollToSection("My Projects")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Example sections for your page.tsx
// Add these to your main page component:

/*
<div id="home" className="min-h-screen pt-16 flex items-center justify-center bg-blue-50">
  <h1 className="text-4xl font-bold">Home Section</h1>
</div>

<div id="about" className="min-h-screen pt-16 flex items-center justify-center bg-gray-50">
  <h1 className="text-4xl font-bold">About Section</h1>
</div>

<div id="projects" className="min-h-screen pt-16 flex items-center justify-center bg-white">
  <h1 className="text-4xl font-bold">Projects Section</h1>
</div>

<div id="contact" className="min-h-screen pt-16 flex items-center justify-center bg-blue-50">
  <h1 className="text-4xl font-bold">Contact Section</h1>
</div>
*/
