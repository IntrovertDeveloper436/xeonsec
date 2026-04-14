"use client";

import React from "react";
import Link from "next/link";
import { Code2, Server, Shield, BrainCircuit, Terminal, Cpu } from "lucide-react";

const team = [
  {
    name: "Alex R.",
    role: "Lead Systems Architect",
    specialty: "Event-Driven & Distributed Systems",
    icon: <Server className="text-[#00D4FF] mb-4" size={40} />,
    bio: "Ex-FAANG backend specialist obsessed with Kafka, latency minimization, and zero-downtime deployments.",
  },
  {
    name: "Jordan K.",
    role: "ML Intelligence Director",
    specialty: "Predictive Modeling & RAG",
    icon: <BrainCircuit className="text-[#00D4FF] mb-4" size={40} />,
    bio: "Designed scalable LLM pipelines and embedding strategies for enterprise fintech and healthcare.",
  },
  {
    name: "Taylor S.",
    role: "Principal Security Engineer",
    specialty: "Offensive Security & Hardening",
    icon: <Shield className="text-[#00D4FF] mb-4" size={40} />,
    bio: "Red-team veteran who ensures every shipped product has zero-compromise encryption and structural integrity.",
  },
  {
    name: "Eli M.",
    role: "Senior Full-Stack Engineer",
    specialty: "Next.js & Frontend Architecture",
    icon: <Code2 className="text-[#00D4FF] mb-4" size={40} />,
    bio: "Pixel-perfect executor who translates brutal backend logic into gorgeous, accessible, and high-performance UIs.",
  },
  {
    name: "Nico V.",
    role: "DevOps Lead",
    specialty: "Kubernetes & Infrastructure",
    icon: <Terminal className="text-[#00D4FF] mb-4" size={40} />,
    bio: "Automates everything. Ensures code ships from staging to production in under 5 minutes securely.",
  },
  {
    name: "Sam T.",
    role: "Data Engineering",
    specialty: "Pipeline Architecture",
    icon: <Cpu className="text-[#00D4FF] mb-4" size={40} />,
    bio: "Builds massive, reliable data pipelines ensuring ML models have clean, real-time ingestion streams.",
  },
];

export default function DevsPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start px-6 pt-32 pb-20 relative">
      <div className="absolute top-0 w-full h-[600px] bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10 mb-20">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-12 h-[1px] bg-[#00D4FF]/50" />
          <h2 className="text-[#00D4FF] tracking-[0.3em] uppercase text-xs font-black">The Executing Force</h2>
          <div className="w-12 h-[1px] bg-[#00D4FF]/50" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
          Senior <span className="text-[#00D4FF] italic pr-2">Engineers</span> Only
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl">
          We do not offshore. We do not use juniors. When you partner with us, you are buying the direct focus of these architects.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {team.map((dev, idx) => (
          <div 
            key={idx} 
            className="group relative bg-[#09090b] rounded-3xl p-8 border border-white/10 hover:border-[#00D4FF]/40 transition-colors overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-start">
              {dev.icon}
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">{dev.name}</h3>
              <p className="text-[#00D4FF] font-mono text-sm tracking-widest mb-4">{dev.role}</p>
              
              <div className="w-full h-[1px] bg-white/10 mb-4 group-hover:bg-[#00D4FF]/20 transition-colors" />
              
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-neutral-500 block mb-1">Domain</span>
                <span className="text-white text-sm font-semibold">{dev.specialty}</span>
              </div>
              
              <p className="text-neutral-400 text-sm leading-relaxed">
                {dev.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

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
