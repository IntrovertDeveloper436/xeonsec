"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // Reveal footer content when scrolling to bottom
      gsap.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%", // trigger when footer is 80% down the viewport
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white pt-32 pb-12 px-6 overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="overflow-hidden">
            <h2
              ref={textRef}
              className="text-6xl md:text-[8rem] font-bold leading-none tracking-tighter"
            >
              Let&apos;s Secure It.
            </h2>
          </div>
          
          <button className="flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-xl font-medium hover:bg-neutral-200 transition-colors group">
            Start a Project
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-neutral-800 text-neutral-400">
          <div className="md:col-span-2">
            <p className="text-xl font-semibold text-white mb-6">XeonSec</p>
            <p className="max-w-xs">
              Advanced cybersecurity, machine learning, and enterprise development solutions for the modern threat landscape.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Socials</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li><a href="mailto:hello@xeonsec.io" className="hover:text-white transition-colors">hello@xeonsec.io</a></li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} XeonSec. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
