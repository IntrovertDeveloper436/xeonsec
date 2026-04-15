"use client";

import React from "react";
import Image from "next/image";
import { Users, FolderCheck, BadgeCheck } from "lucide-react";

interface DirectorCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  stats: {
    users: number;
    projects: number;
  };
}

export default function DirectorCard({ name, role, bio, image, stats }: DirectorCardProps) {
  return (
    <div className="group relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#1a1a1a] border border-white/5 transition-all duration-500 hover:scale-[1.01]">
      
      {/* ── Portrait Background ────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* ── Unified Blur/Gradient Overlay ─────────────────────────────── */}
      {/* This layer provides the blur and the dark gradient transition exactly like the reference */}
      <div 
        className="absolute inset-x-0 bottom-0 h-3/5 sm:h-1/2 flex flex-col justify-end p-5 xs:p-8 pb-10"
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
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white tracking-tight">{name}</h3>
            <BadgeCheck className="text-white fill-white flex-shrink-0" size={20} />
          </div>
          
          <p className="text-white/90 text-sm xs:text-base sm:text-xl leading-snug mb-6 sm:mb-8 max-w-[98%] font-medium">
            A {role} focused on {bio}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 xs:gap-6">
              <div className="flex items-center gap-1 xs:gap-2 text-white">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                <span className="text-sm xs:text-base sm:text-lg font-semibold">{stats.users}</span>
              </div>
              <div className="flex items-center gap-1 xs:gap-2 text-white">
                <FolderCheck className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                <span className="text-sm xs:text-base sm:text-lg font-semibold">{stats.projects}</span>
              </div>
            </div>

            <button 
              className="px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-3.5 rounded-2xl sm:rounded-3xl text-xs xs:text-sm sm:text-lg font-bold transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
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
