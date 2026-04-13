"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Pencil } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Heading animation
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" }
      )
        .fromTo(
          circleRef.current,
          { scale: 0, opacity: 0, rotation: -180 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.5)" },
          "-=0.5"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        );

      // Floating animation for the circle
      gsap.to(circleRef.current, {
        y: 12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-8 py-16">
      <div className="w-full max-w-[1200px]">
        <div className="leading-none font-black uppercase text-white" style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}>

          <div className="flex items-center" style={{ fontSize: 'clamp(80px, 14vw, 180px)' }}>
            <span>XE</span>
            <div
              className="rounded-full bg-[#00d4ff] flex items-center justify-center flex-shrink-0 mx-1"
              style={{
                width: 'clamp(70px, 12vw, 160px)',
                height: 'clamp(70px, 12vw, 160px)',
              }}
            >
              <Pencil
                style={{ width: 'clamp(28px, 5vw, 64px)', height: 'clamp(28px, 5vw, 64px)' }}
                className="text-gray-900"
                strokeWidth={2.5}
              />
            </div>
            <span>NSEC</span>
          </div>

          <div className="flex items-end justify-between gap-12" style={{ marginTop: '1em' }}>
            <span style={{ fontSize: 'clamp(50px, 9vw, 110px)' }}>SECURITY</span>
            <p
              className="text-white font-normal text-left max-w-[280px] mb-4"
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: 'clamp(11px, 1.1vw, 14px)',
                lineHeight: '1.65',
                fontWeight: '400',
                textTransform: 'none',
              }}
            >
              Cutting-edge security solutions, ML intelligence, and enterprise-grade development for the modern tech stack.
            </p>
          </div>

          <div className="text-right" style={{ fontSize: 'clamp(80px, 14vw, 180px)', marginTop: '-0.05em' }}>
            AGENCY
          </div>

        </div>
      </div>
    </div>
  );
}
