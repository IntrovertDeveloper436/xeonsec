"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-black border-t border-white/5 px-0 py-16 sm:py-20 relative overflow-x-clip">
      {/* Large brand name expanding full width at the very bottom */}
      <div className="pointer-events-none select-none absolute left-0 bottom-0 w-full overflow-hidden flex justify-center z-0">
        <span className="text-[25vw] leading-none font-serif font-bold text-white/10 whitespace-nowrap uppercase" style={{lineHeight:'0.75', letterSpacing:'-0.02em'}}>
          XeonSec
        </span>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-8 lg:gap-16 justify-items-center text-center w-full">
          {/* Brand/Logo */}
          <div className="flex flex-col gap-4 items-center md:col-span-1 mb-8 sm:mb-0">
            <img src="/xeonsec.jpg" alt="XeonSec Logo" className="w-14 h-14 rounded-full object-cover mb-2" />
            <span className="text-xl font-black uppercase tracking-tighter text-[#00D4FF]">XeonSec</span>
            <span className="text-xs text-neutral-400 font-medium">Make Things You Love</span>
          </div>
          {/* Navigation */}
          <div className="flex flex-col gap-3 mb-8 sm:mb-0 items-center">
            <h4 className="text-xs uppercase tracking-widest text-[#00D4FF] mb-3 font-bold">Features</h4>
            <Link href="/#why" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Strategic Focus</Link>
            <Link href="/#services" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Expertise</Link>
            <Link href="/#work" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Featured Work</Link>
            <Link href="/#how" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Process</Link>
            <Link href="/contact" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Contact</Link>
            <Link href="/blog" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Blog</Link>
            <Link href="/careers" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Careers</Link>
          </div>
          {/* Resources */}
          <div className="flex flex-col gap-3 mb-8 sm:mb-0 items-center">
            <h4 className="text-xs uppercase tracking-widest text-[#00D4FF] mb-3 font-bold">Resources</h4>
            <Link href="/resources/whitepapers" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Whitepapers</Link>
            <Link href="/resources/case-studies" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Case Studies</Link>
            <Link href="/resources/guides" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Guides</Link>
            <Link href="/#faq" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">FAQ</Link>
            <Link href="/contact" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Support</Link>
          </div>
          {/* Social */}
          <div className="flex flex-col gap-3 items-center">
            <h4 className="text-xs uppercase tracking-widest text-[#00D4FF] mb-3 font-bold">Social</h4>
            <a href="mailto:hello@xeonsec.studio" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">hello@xeonsec.studio</a>
            <a href="https://twitter.com/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Twitter (X)</a>
            <a href="https://www.linkedin.com/company/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">LinkedIn</a>
            <a href="https://github.com/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">GitHub</a>
            <a href="https://dribbble.com/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Dribbble</a>
            <a href="https://www.behance.net/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Behance</a>
            <a href="https://www.instagram.com/xeonsec" target="_blank" rel="noopener" className="text-sm text-neutral-400 hover:text-white hover:underline decoration-[#00D4FF] underline-offset-4 transition-all duration-300">Instagram</a>
          </div>
          {/* About/Info */}
          <div className="flex flex-col gap-2 max-w-xs mb-8 sm:mb-0 items-center">
            <h4 className="text-xs uppercase tracking-widest text-[#00D4FF] mb-3 font-bold">About</h4>
            <p className="text-xs text-neutral-400 leading-relaxed italic text-center">
              Engineering excellence requires absolute strategic focus. We navigate the complexity of ML Intelligence, Cybersecurity, and Event-Driven systems so you don't have to.<br />
              <span className="not-italic font-bold">XeonSec</span> scales results with senior-level thinking and zero-compromise technical precision.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center pt-12 border-t border-white/5 mt-12 text-[10px] uppercase tracking-widest text-neutral-500 gap-4 relative bg-transparent z-10 text-center">
          <p>© 2026 XeonSec Product Studio. All rights reserved.</p>
          <div className="flex gap-8 justify-center">
            <Link href="/privacy" className="hover:text-white hover:underline decoration-[#00D4FF] underline-offset-8 transition-all duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white hover:underline decoration-[#00D4FF] underline-offset-8 transition-all duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
