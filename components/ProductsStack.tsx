"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const products = [
  {
    id: 1,
    title: "Passman",
    description: "Enterprise-grade password management and identity security platform with zero-knowledge encryption.",
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Fitvora",
    description: "AI-powered fitness and wellness analytics platform for personal and organizational health intelligence.",
    color: "bg-purple-600",
  },
  {
    id: 3,
    title: "Oscope",
    description: "Advanced OSINT intelligence prompt framework for reconnaissance, threat intel, and security research.",
    color: "bg-cyan-600",
  },
  {
    id: 4,
    title: "DevOps Suite",
    description: "Integrated CI/CD, infrastructure automation, and MLOps orchestration for scalable deployments.",
    color: "bg-emerald-600",
  },
];

export default function ProductsStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".product-card");

      cards.forEach((card, index) => {
        // Skip the last card
        if (index === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top 10%", // When the card hits the sticky top position
            endTrigger: cards[index + 1],
            end: "top 15%", // When the next card comes up
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-24 px-6 bg-neutral-950 relative" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Products
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Industry-leading solutions in security, intelligence, fitness, and infrastructure automation.
          </p>
        </div>

        <div className="flex flex-col gap-12 relative pb-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card sticky top-24 w-full h-[60vh] min-h-[400px] rounded-3xl overflow-hidden shadow-2xl origin-top"
              style={{ top: `calc(10vh + ${index * 20}px)` }}
            >
              <div className={`absolute inset-0 ${product.color} opacity-20`} />
              <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {product.title}
                  </h3>
                  <p className="text-lg md:text-xl text-neutral-300 max-w-lg">
                    {product.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
                    <span className="text-white font-mono text-xl">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">
                    Explore <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
