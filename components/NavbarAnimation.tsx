"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const logoCircleRef = useRef<HTMLDivElement>(null);
  const capsuleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const devsRef = useRef<HTMLAnchorElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    // Hide all content initially
    tl.set([textRef.current, devsRef.current, hamburgerRef.current, ...navLinksRef.current], { opacity: 0 });
    // Capsule initial state: centered, scaleX(0), visible at top
    tl.set(capsuleRef.current, {
      width: 44,
      borderRadius: 9999,
      paddingLeft: 0,
      paddingRight: 0,
      transform: 'scaleX(0)',
      left: '50%',
      xPercent: -50,
      position: 'fixed',
      top: 24,
      zIndex: 50,
      margin: '0 auto',
    });
    // Animate logo circle in
    tl.fromTo(
      logoCircleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }
    )
      // Capsule expands from center
      .to(
        capsuleRef.current,
        {
          transform: 'scaleX(1)',
          width: '100%',
          paddingLeft: 3,
          paddingRight: 3,
          duration: 0.7,
          ease: 'power2.inOut',
        },
        "+=0.1"
      )
      // Text appears
      .to(
        textRef.current,
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      )
      // Nav links appear staggered
      .to(
        navLinksRef.current,
        { opacity: 1, stagger: 0.08, duration: 0.3, ease: "power2.out" },
        "-=0.2"
      )
      // CTA button and Hamburger appear
      .to(
        [devsRef.current, hamburgerRef.current],
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" },
        "+=0.1"
      );
  }, []);

  const navLinks = [
    { label: "About", href: "#strategic-focus" },
    { label: "Expertise", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#how" },
  ];

  return (
    <nav className="w-full max-w-7xl px-6" style={{ position: 'fixed', top: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 50 }}>
      <div
        ref={capsuleRef}
        className="bg-cyan-800 rounded-full flex items-center justify-between border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] overflow-hidden px-0"
        style={{ width: 44, paddingLeft: 0, paddingRight: 0, height: 48, minHeight: 48, margin: '0 auto', transition: 'all 0.7s' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-10 order-1 mr-4">
          <div
            ref={logoCircleRef}
            className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)] group-hover:scale-110 transition-transform"
            style={{ transform: "scale(0)" }}
          >
            <Image src="/xeonsec.jpg" alt="Logo" width={40} height={40} className="object-cover" />
          </div>
          <span
            ref={textRef}
            className="text-white font-bold text-lg tracking-tight group-hover:text-[#00d4ff] transition-colors opacity-0 translate-x-4"
          >
            XeonSec
          </span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-10 relative z-10 order-2">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              ref={el => {
                if (el) navLinksRef.current[i] = el;
              }}
              className="text-white font-normal hover:text-[#00d4ff] transition-all text-sm opacity-0"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* CTA Button */}
        <Link
          href="/dev"
          ref={devsRef}
          className="hidden md:inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 min-h-10 leading-none text-xs uppercase tracking-[0.2em] hover:bg-[#00d4ff] hover:text-black transition-all active:scale-95 shadow-lg opacity-0 scale-75 order-3 ml-4"
        >
          Devs
        </Link>
        {/* Mobile Menu Toggle */}
        <button
          ref={hamburgerRef}
          className="md:hidden text-white p-2 rounded-full glass relative z-10 opacity-0 scale-75"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-6 right-6 mt-4 glass backdrop-blur-2xl bg-black/80 rounded-3xl p-6 space-y-4 shadow-2xl border border-white/10">
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
          <Link 
            href="/dev" 
            onClick={() => setIsOpen(false)} 
            className="flex items-center justify-center w-full px-6 py-4 bg-[#00d4ff] text-black rounded-full font-black text-xs uppercase tracking-widest mt-4 hover:bg-white transition-colors"
          >
            Devs
          </Link>
        </div>
      )}
    </nav>
  );
}
