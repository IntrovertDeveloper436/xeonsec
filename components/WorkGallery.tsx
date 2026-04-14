"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    title: "Project 1 ",
    tag: "project tags ",
    impact: "Project impact statement goes here. This is a brief description of the project and its outcomes.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Project 2",
    tag: "project tags ",
    impact: "Project impact statement goes here. This is a brief description of the project and its outcomes.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Project 3",
    tag: "project tags ",
    impact: "Project impact statement goes here. This is a brief description of the project and its outcomes.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Project 4",
    tag: "project tags ",
    impact: "Project impact statement goes here. This is a brief description of the project and its outcomes.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop", // Updated image
  },
];

const WorkGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !containerRef.current) return;

      const totalWidth = sectionRef.current.scrollWidth;
      const amountToScroll = totalWidth - window.innerWidth;

      gsap.to(sectionRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${amountToScroll}`, // 1:1 mapping ensures the vertical scroll perfectly matches horizontal travel length
          scrub: 0.5, // Smoother follow
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-black">
      <section 
        id="work"
        ref={sectionRef} 
        className="relative h-screen flex w-fit items-center flex-nowrap py-20 gap-6 md:gap-16"
      >
        <div className="w-[100vw] h-full flex items-center justify-center shrink-0">
          <div className="w-full max-w-7xl px-4 md:px-6 flex flex-col items-start justify-center">
            <h2 className="text-sm md:text-base tracking-[0.4em] text-[#00d4ff] uppercase mb-8 font-bold">Featured Integrations</h2>
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black max-w-3xl leading-[1.05] tracking-tighter text-white">Event-driven infrastructure.</h3>
            <div className="mt-10 text-base md:text-xl text-neutral-400 max-w-xl leading-relaxed">
              We architect zero-compromise systems for high-stakes environments. Scroll to review active case studies.
            </div>
          </div>
        </div>

        {projects.map((project, i) => (
          <div 
            key={i} 
            className={`relative group w-[85vw] md:w-[45vw] h-[65vh] md:h-[75vh] shrink-0 flex items-center rounded-3xl overflow-hidden glass border-white/5 group-hover:border-white/20 transition-all duration-500
              ${i === projects.length - 1 ? 'mr-[10vw] md:mr-[27.5vw]' : ''}
            `}
          >
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              unoptimized
              className="absolute inset-0 object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 opacity-40 group-hover:opacity-60 z-0"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 md:p-12 flex flex-col justify-end z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#00d4ff] mb-4 font-bold block">
                {project.tag}
              </span>
              
              <h3 className="text-3xl md:text-5xl font-black mb-4 text-white leading-tight">
                {project.title}
              </h3>
              
              <p className="text-sm md:text-base text-neutral-300 max-w-md leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                {project.impact}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00d4ff] group-hover:text-black transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  View Project
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WorkGallery;
