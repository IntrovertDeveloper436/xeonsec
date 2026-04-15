"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import DirectorCard from "@/components/DirectorCard";

// Load PixelBlast client-side only (requires WebGL + browser APIs)
const PixelBlast = dynamic(() => import("@/components/PixelBlast"), { ssr: false });

const team = [
  {
    name: "Swayam Sopnic Nayak",
    role: "CEO & Founder",
    experience: "4+ Years Industry Experience",
    expertise: "DFIR , OSINT , Malware Analysis",
    image: "/swayam.webp",
    stats: { users: 284, projects: 42 },
    socials: {
      linkedin: "https://www.linkedin.com/in/swayamsopnic/",
      github: "https://github.com/swayamsopnic",
      email: "tech145boy@gmail.com"
    }
  },
  {
    name: "Ashish Kumar Jena",
    role: "CTO & Co-Founder",
    experience: "2+ Years Industry Experience",
    expertise: "Full StackDevelopment , Devops , System Design",
    image: "/ashish.webp",
    stats: { users: 512, projects: 68 },
    socials: {
      linkedin: "https://www.linkedin.com/in/ashish-kumar-jena/",
      github: "https://github.com/Ashishkumar448",
      email: "ashishkumar48.connect@gmail.com"
    }
  },
  {
    name: "Taylor S.",
    role: "Technical Security Director",
    experience: "5+ Years Offensive Security",
    expertise: "Offensive Security, Penetration Testing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
    stats: { users: 195, projects: 31 },
    socials: {
      linkedin: "#",
      github: "#",
      email: "taylor@xeonsec.com"
    }
  },
  {
    name: "Eli M.",
    role: "Creative Strategy Director",
    experience: "8+ Years Product Strategy",
    expertise: "User Experience, Product Design",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
    stats: { users: 312, projects: 48 },
    socials: {
      linkedin: "#",
      github: "#",
      email: "eli@xeonsec.com"
    }
  },
];

export default function DevsPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start px-6 md:px-16 lg:px-24 pt-32 pb-20 relative">

      {/* ── PixelBlast full-page background ──────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#00d4ff"
          patternScale={2}
          patternDensity={0.92}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.4}
          edgeFade={0.22}
          transparent
        />
      </div>

      {/* Gradient overlay so content sits comfortably on the pixel bg */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* ── Main Layout Container ────────────────────────────────────────── */}
      <div className="w-full max-w-[1600px] flex flex-col md:flex-row items-start gap-10 lg:gap-20 z-10">

        {/* ── Left Section (30%): Hero copy - Sticky Center ─────────────── */}
        <div className="w-full md:w-[30%] md:h-screen md:sticky md:top-0 flex flex-col items-start justify-center text-left shrink-0">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-[#00D4FF]/50" />
            <h2 className="text-[#00D4FF] tracking-[0.3em] uppercase text-[10px] sm:text-xs font-black">The Team Behind The XeonSec</h2>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 uppercase tracking-tighter leading-none">
            Meet Our <span className="text-[#00D4FF] italic block">Directors</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base lg:text-lg mb-8 max-w-sm">
            We do not offshore. You are buying the direct focus of these architects.
          </p>

          <Link
            href="/contact"
            className="bg-[#00D4FF] text-black font-black uppercase tracking-[0.2em] text-xs px-6 py-3.5 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            Contact Us
          </Link>
        </div>

        {/* ── Right Section (70%): Team grid - Scrolling ────────────────── */}
        <div className="w-full md:w-[70%] grid grid-cols-2 gap-4 lg:gap-6 items-center pt-32 pb-20">
          {team.map((member, idx) => (
            <DirectorCard
              key={idx}
              name={member.name}
              role={member.role}
              experience={member.experience}
              expertise={member.expertise}
              image={member.image}
              stats={member.stats}
              compact={true}
              socials={member.socials}
              priority={idx < 2}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
