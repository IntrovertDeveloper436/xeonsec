"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".mission-word");

      gsap.fromTo(
        words,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            end: "bottom center-=100",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const text =
    "We deliver enterprise-grade solutions in cybersecurity, machine learning, blockchain, DevOps, and MLOps—securing and scaling your infrastructure with precision and innovation.";
  const words = text.split(" ");

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
            Our Vision
          </span>
        </div>
        <p
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white flex flex-wrap gap-x-[0.3em] gap-y-2 justify-center"
        >
          {words.map((word, i) => {
            const highlightWords = ["enterprise-grade", "cybersecurity", "precision", "innovation"];
            const shouldHighlight = highlightWords.includes(word.toLowerCase().replace(/[.,;:!?—]/g, ''));
            return (
              <span 
                key={i} 
                className={`mission-word ${
                  shouldHighlight 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0099cc]" 
                    : "text-white"
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
