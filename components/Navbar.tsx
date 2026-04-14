
"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#strategic-focus" },
    { label: "Expertise", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#how" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-6">
      <div className="bg-cyan-800 rounded-full px-0 py-3 flex items-center justify-between gap-12 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)] group-hover:scale-110 transition-transform">
            <Image src="/xeonsec.jpg" alt="Logo" width={40} height={40} className="object-cover" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight group-hover:text-[#00d4ff] transition-colors">XeonSec</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white font-normal hover:text-[#00d4ff] transition-all text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/dev" className="hidden md:block inline-flex items-center justify-center rounded-full bg-white text-black font-semibold !px-5 sm:!px-6 !py-2.5 sm:!py-3 min-h-10 leading-none text-xs uppercase tracking-[0.2em] hover:bg-[#00d4ff] hover:text-black transition-all active:scale-95 shadow-lg">
          Devs
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-full glass"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-6 space-y-4 shadow-2xl border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-[#00d4ff] transition-colors text-lg font-normal py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <Link href="/dev" className="w-full px-6 py-4 bg-[#00d4ff] text-black rounded-full font-black text-xs uppercase tracking-widest mt-4">
            Devs
          </Link>
        </div>
      )}
    </nav>
  );
}