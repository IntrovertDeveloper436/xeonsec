"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const technologies = [
    "Python", "Go", "Rust", "TypeScript", "Kubernetes", "Docker",
    "PostgreSQL", "MongoDB", "Redis", "Terraform", "AWS", "GCP",
    "PyTorch", "TensorFlow", "Solidity", "Node.js"
  ];

  // Duplicate the array to create an infinite loop effect
  const marqueeItems = [...technologies, ...technologies];

  useGSAP(() => {
    if (!marqueeRef.current) return;
    
    // We get the total width of half the items to know when to loop
    // Using a simpler approach with GSAP horizontal translation
    const totalWidth = marqueeRef.current.scrollWidth / 2;

    gsap.to(marqueeRef.current, {
      x: -totalWidth,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="section-padding bg-neutral-900 overflow-hidden border-y border-neutral-800">
      <div className="mb-12 text-center">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">
          Expertise in Cutting-Edge Tech Stack
        </h2>
      </div>
      
      <div className="w-full max-w-7xl mx-auto relative flex overflow-hidden group">
        <div ref={marqueeRef} className="flex gap-16 md:gap-24 whitespace-nowrap pl-16 md:pl-24">
          {marqueeItems.map((tech, index) => (
            <div key={index} className="flex items-center justify-center">
              <span className="text-4xl md:text-6xl font-bold text-neutral-700 hover:text-white transition-colors duration-300">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
