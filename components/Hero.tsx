"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Pencil } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Heading animation
      tl.fromTo(
        ".hero-title-part",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", stagger: 0.1 }
      )
        .fromTo(
          circleRef.current,
          { scale: 0, opacity: 0, rotation: -180 },
          { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
          "-=0.8"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.6"
        );

      // Floating animation for the circle
      gsap.to(circleRef.current, {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative min-h-screen bg-[#050505] flex items-center justify-center px-6 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00d4ff]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00d4ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-6 font-bold tracking-tighter text-white w-full">
          
          <div ref={headingRef} className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 leading-[0.85]" style={{ fontSize: 'clamp(60px, 15vw, 200px)' }}>
            <span className="hero-title-part">Xeon</span>
            <div
              ref={circleRef}
              className="rounded-full bg-[#00d4ff] flex items-center justify-center flex-shrink-0 shadow-[0_0_50px_rgba(0,212,255,0.3)]"
              style={{
                width: 'clamp(50px, 12vw, 170px)',
                height: 'clamp(50px, 12vw, 170px)',
              }}
            >
              <Pencil
                className="text-black"
                style={{ width: 'clamp(24px, 5vw, 70px)', height: 'clamp(24px, 5vw, 70px)' }}
                strokeWidth={2.5}
              />
            </div>
            <span className="hero-title-part text-[#00d4ff]">Sec</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 mt-8">
            <h2 className="hero-title-part leading-[0.85] text-center" style={{ fontSize: 'clamp(40px, 10vw, 130px)' }}>
              Product Studio
            </h2>
            
            <div ref={subtitleRef} className="max-w-[500px] mb-2 md:mb-6 text-center">
              <p
                className="text-neutral-400 font-medium text-center"
                style={{
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  lineHeight: '1.6',
                }}
              >
                Engineering high-leverage digital products with strategic precision and machine learning intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}