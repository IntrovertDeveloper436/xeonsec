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
      className="section-padding min-h-screen flex items-center justify-center bg-neutral-950"
    >
      <div className="max-w-4xl mx-auto">
        <p
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-white flex flex-wrap gap-x-[0.3em] gap-y-2"
        >
          {words.map((word, i) => (
            <span key={i} className="mission-word text-white">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
