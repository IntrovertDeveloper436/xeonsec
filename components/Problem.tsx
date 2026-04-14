"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Problem = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const chars = textRef.current?.querySelectorAll(".char");
      if (!chars) return;

      gsap.fromTo(
        chars,
        { opacity: 0.1, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const content = "Engineering excellence requires absolute strategic focus. We navigate the complexity of ML Intelligence, Cybersecurity, and Event-Driven systems so you don't have to. We don't scale overhead; we scale results with senior-level thinking and zero-compromise technical precision.";

  return (
    <section id="strategic-focus" ref={sectionRef} className="section-padding min-h-screen flex flex-col items-center justify-center bg-black relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="w-full max-w-5xl mx-auto z-10">
        <h2 className="text-xs uppercase tracking-[0.5em] text-[#00D4FF] mb-12 text-center font-bold">
          Strategic Focus
        </h2>
        
        <div 
          ref={textRef}
          className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white/90 text-center text-balance tracking-tight"
        >
          {content.split("").map((char, index) => (
            <span key={index} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <div className="w-[1px] h-32 bg-gradient-to-b from-[#00D4FF]/40 via-[#00D4FF]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Problem;
