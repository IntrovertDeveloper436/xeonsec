
"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 pt-4">
      <div className="bg-[#e7eed5] rounded-full px-8 py-3 shadow-lg flex items-center justify-between gap-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#00d4ff] flex items-center justify-center">
              <span className="text-gray-900 font-black text-sm">X</span>
            </div>
            <span className="text-gray-900 font-bold text-lg">XeonSec</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#00d4ff] transition-colors text-sm font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2 bg-[#00d4ff] text-gray-900 rounded-full font-semibold text-sm hover:bg-[#00b8d4] transition-colors">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-6 right-6 mt-2 bg-[#e7eed5] rounded-2xl p-4 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-700 hover:text-[#2db84b] transition-colors text-sm font-semibold py-2"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full px-4 py-2 bg-[#00d4ff] text-gray-900 rounded-full font-semibold text-sm hover:bg-[#00b8d4] transition-colors mt-3">
              Get Started
            </button>
          </div>
        )}
    </nav>
  );
}
