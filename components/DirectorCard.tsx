"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, Mail } from "lucide-react";

// Lucide 1.0+ removed brand icons. Implementing custom SVGs to match the aesthetic.
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface DirectorCardProps {
  name: string;
  role: string;
  experience: string;
  image: string;
  stats: {
    users: number;
    projects: number;
  };
  compact?: boolean;
  expertise?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    email?: string;
  };
  priority?: boolean;
}

export default function DirectorCard({ 
  name, 
  role, 
  experience, 
  image, 
  stats, 
  compact = false, 
  expertise,
  socials,
  priority = false
}: DirectorCardProps) {
  return (
    <div className={`group relative w-full ${compact ? 'aspect-[3/4.2]' : 'aspect-[4/5]'} rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-[#1a1a1a] border border-white/5 transition-all duration-500 hover:scale-[1.01]`}>
      
      {/* ── Portrait Background ────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* ── Unified Blur/Gradient Overlay ─────────────────────────────── */}
      <div 
        className={`absolute inset-x-0 bottom-0 h-3/5 sm:h-1/2 flex flex-col justify-end ${compact ? 'p-4 xs:p-5 pb-6' : 'p-5 xs:p-8 pb-10'}`}
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 100%)",
        }}
      >
        {/* Content sits inside the blurred area */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1 sm:mb-2">
            <h3 className={`font-bold text-white tracking-tight ${compact ? 'text-lg xs:text-xl sm:text-2xl' : 'text-xl xs:text-2xl sm:text-3xl'}`}>{name}</h3>
            <BadgeCheck className="text-white fill-white flex-shrink-0" size={compact ? 16 : 20} />
          </div>
          
          {/* ── Role & Expertise lines ── */}
          <div className={`flex flex-col mb-3 sm:mb-4 max-w-[98%] ${compact ? 'text-[11px] xs:text-xs sm:text-sm' : 'text-sm xs:text-base sm:text-lg'}`}>
            <div className="text-[#00D4FF] uppercase tracking-wider font-bold mb-0.5">{role}</div>
            
            {expertise && (
              <div className="text-white/90 font-semibold tracking-tight mb-0.5 leading-tight">
                {expertise}
              </div>
            )}

            {/* Optional Experience snippet */}
            {experience && (
              <div className="text-white/40 text-[10px] sm:text-xs italic mt-1 font-normal uppercase tracking-widest">
                {experience}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            {/* ── Social Links ── */}
            <div className={`flex items-center ${compact ? 'gap-3 xs:gap-4' : 'gap-4 xs:gap-6'}`}>
              {socials?.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#00D4FF] transition-all hover:scale-110">
                  <LinkedinIcon size={compact ? 18 : 22} />
                </a>
              )}
              {socials?.github && (
                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#00D4FF] transition-all hover:scale-110">
                  <GithubIcon size={compact ? 18 : 22} />
                </a>
              )}
              {socials?.email && (
                <a href={`mailto:${socials.email}`} className="text-white/50 hover:text-[#00D4FF] transition-all hover:scale-110">
                  <Mail size={compact ? 18 : 22} />
                </a>
              )}
            </div>

            <button 
              className={`rounded-2xl sm:rounded-3xl font-bold transition-all duration-300 hover:bg-white hover:text-black active:scale-95 ${compact ? 'px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-2.5 text-[10px] xs:text-xs sm:text-sm' : 'px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-3.5 text-xs xs:text-sm sm:text-lg'}`}
              style={{
                background: "rgba(255,255,255,0.92)",
                color: "#000",
                boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
              }}
            >
              Follow +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
