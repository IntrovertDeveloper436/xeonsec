"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-black border-t border-white/5 px-0 py-16 sm:py-20 relative overflow-x-clip">
      {/* Large, half-visible brand name absolutely at the very bottom, behind all content */}
      <span className="pointer-events-none select-none hidden md:block absolute left-0 bottom-0 text-[16vw] leading-none font-serif font-bold text-white/10 whitespace-nowrap z-0" style={{lineHeight:'0.8',letterSpacing:'-0.05em'}}>XeonSec</span>
      <span className="pointer-events-none select-none block md:hidden absolute left-0 bottom-0 text-[32vw] leading-none font-serif font-bold text-white/10 whitespace-nowrap z-0" style={{lineHeight:'0.8',letterSpacing:'-0.05em'}}>XeonSec</span>
      <div className="w-full px-4 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-8 lg:gap-16 items-start">
          {/* Brand/Logo */}
          <div className="flex flex-col gap-4 items-start md:col-span-1 mb-8 sm:mb-0">
            <img src="/xeonsec-logo.svg" alt="XeonSec Logo" className="w-14 h-14 mb-2" />
            <span className="text-xl font-black uppercase tracking-tighter text-[#00D4FF]">XeonSec</span>
            <span className="text-xs text-neutral-400 font-medium">Make Things You Love</span>
          </div>
          {/* Navigation */}
          <div className="flex flex-col gap-2 mb-8 sm:mb-0">
            <h4 className="text-xs uppercase tracking-widest text-[#00D4FF] mb-3 font-bold">Features</h4>
            <Link href="#why" className="text-sm text-neutral-400 hover:text-white transition-colors">Strategic Focus</Link>
            <Link href="#services" className="text-sm text-neutral-400 hover:text-white transition-colors">Expertise</Link>
            <Link href="#work" className="text-sm text-neutral-400 hover:text-white transition-colors">Featured Work</Link>
            <Link href="#how" className="text-sm text-neutral-400 hover:text-white transition-colors">Process</Link>
            <Link href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link>
            <a href="/blog" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</a>
            <a href="/careers" className="text-sm text-neutral-400 hover:text-white transition-colors">Careers</a>
          </div>
          {/* Resources */}
          <div className="flex flex-col gap-2 mb-8 sm:mb-0">
            <h4 className="text-xs uppercase tracking-widest text-[#00D4FF] mb-3 font-bold">Resources</h4>
            <a href="/resources/whitepapers" className="text-sm text-neutral-400 hover:text-white transition-colors">Whitepapers</a>
            <a href="/resources/case-studies" className="text-sm text-neutral-400 hover:text-white transition-colors">Case Studies</a>
            <a href="/resources/guides" className="text-sm text-neutral-400 hover:text-white transition-colors">Guides</a>
            <a href="/resources/faq" className="text-sm text-neutral-400 hover:text-white transition-colors">FAQ</a>
            <a href="/resources/support" className="text-sm text-neutral-400 hover:text-white transition-colors">Support</a>
          </div>
          {/* Social */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs uppercase tracking-widest text-[#00D4FF] mb-3 font-bold">Social</h4>
            <a href="mailto:hello@xeonsec.studio" className="text-sm text-neutral-400 hover:text-white transition-colors">hello@xeonsec.studio</a>
            <a href="https://twitter.com/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white transition-colors">Twitter (X)</a>
            <a href="https://www.linkedin.com/company/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white transition-colors">GitHub</a>
            <a href="https://dribbble.com/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white transition-colors">Dribbble</a>
            <a href="https://www.behance.net/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white transition-colors">Behance</a>
            <a href="https://www.instagram.com/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white transition-colors">Instagram</a>
          </div>
          {/* About/Info */}
          <div className="flex flex-col gap-2 max-w-xs mb-8 sm:mb-0">
            <h4 className="text-xs uppercase tracking-widest text-[#00D4FF] mb-3 font-bold">About</h4>
            <p className="text-xs text-neutral-400 leading-relaxed italic">
              Engineering excellence requires absolute strategic focus. We navigate the complexity of ML Intelligence, Cybersecurity, and Event-Driven systems so you don't have to.<br />
              <span className="not-italic font-bold">XeonSec</span> scales results with senior-level thinking and zero-compromise technical precision.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between pt-12 border-t border-white/5 mt-12 text-[10px] uppercase tracking-widest text-neutral-500 gap-4 relative bg-transparent z-10">
          <p>© 2026 XeonSec Product Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
