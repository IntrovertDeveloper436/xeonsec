"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import DirectorCard from "@/components/DirectorCard";

// Load PixelBlast client-side only (requires WebGL + browser APIs)
const PixelBlast = dynamic(() => import("@/components/PixelBlast"), { ssr: false });

const team = [
  {
    name: "Alex R.",
    role: "Lead Systems Director",
    bio: "architecting event-driven infrastructure and zero-latency systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    stats: { users: 284, projects: 42 },
  },
  {
    name: "Jordan K.",
    role: "Strategy & AI Director",
    bio: "designing predictive ML pipelines and strategic intelligence models.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
    stats: { users: 512, projects: 68 },
  },
  {
    name: "Taylor S.",
    role: "Technical Security Director",
    bio: "offensive security, system hardening, and structural integrity.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
    stats: { users: 195, projects: 31 },
  },
  {
    name: "Eli M.",
    role: "Creative Strategy Director",
    bio: "translating complex logic into intuitive and high-performance user experiences.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
    stats: { users: 312, projects: 48 },
  },
];

export default function DevsPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start px-6 pt-32 pb-20 relative overflow-hidden">

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

      {/* ── Hero copy ─────────────────────────────────────────────────────── */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10 mb-20 px-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-12 h-[1px] bg-[#00D4FF]/50" />
          <h2 className="text-[#00D4FF] tracking-[0.3em] uppercase text-xs font-black">The Executing Force</h2>
          <div className="w-12 h-[1px] bg-[#00D4FF]/50" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
          Senior <span className="text-[#00D4FF] italic pr-2">Engineers</span> Only
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
          We do not offshore. We do not use juniors. When you partner with us, you are buying the direct focus of these architects.
        </p>
      </div>

      {/* ── Team grid: 4 cards, 2x2 layout on desktop ───────────────────── */}
      <div className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 z-10">
        {team.map((member, idx) => (
          <DirectorCard
            key={idx}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
            stats={member.stats}
          />
        ))}
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <div className="w-full flex justify-center mt-20 z-10">
        <Link
          href="/contact"
          className="bg-[#00D4FF] text-black font-black uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,212,255,0.3)]"
        >
          Hire the Team
        </Link>
      </div>
    </main>
  );
}
