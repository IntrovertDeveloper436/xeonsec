"use client";

import React from "react";

const steps = [
  {
    week: "Week 1",
    title: "Intelligence Sprint",
    items: ["Architecture alignment", "ML feasibility"],
    detail: "We define the event-driven backbone and validate the feasibility of ML/IOT integrations.",
  },
  {
    week: "Week 2–4",
    title: "Modern Prototype",
    items: ["System flows", "Edge/Cloud MVP"],
    detail: "We build interactive, connected prototypes that demonstrate core technical logic and data flows.",
  },
  {
    week: "Week 5–12",
    title: "Engineering Scale",
    items: ["Production Build", "Product Hardening"],
    detail: "We move into full-scale production, hardening the product architecture and scaling the event-driven infrastructure.",
  },
];

const Process = () => {
  return (
    <section id="how" className="section-padding bg-black overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#00d4ff] mb-4 font-bold">
            The Flow
          </h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Engineering in stages.
          </h3>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A precise, methodical approach to converting high-entropy technical requirements into scalable, enterprise-grade architecture.
          </p>
        </header>

        <div className="relative max-w-5xl mx-auto mt-16 md:mt-32">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#00d4ff]/20 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-center md:justify-between w-full">
                  
                  {/* Node Circle */}
                  <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#00d4ff] border-4 border-black z-10 shadow-[0_0_15px_rgba(0,212,255,0.8)]" />

                  {/* Content Box */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${isEven ? 'md:text-right md:pr-16 text-left' : 'md:text-left md:pl-16 md:order-last text-left'} `}>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm md:text-base text-neutral-400 mb-6 leading-relaxed">
                      {step.detail}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      {step.items.map((item, j) => (
                        <span key={j} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-white/10 text-white/50 bg-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Empty space for symmetric flex block on desktop */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
