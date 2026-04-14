"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const allTestimonials = [
  {
    text: "This architecture overhaul has been a lifesaver! I used to worry about our system scaling during peak events, but now I'm always confident we can handle the load effortlessly.",
    name: "Sophie Moore",
    role: "Head of Engineering",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    text: "I love how robust this platform is! It's so easy to integrate complex ML pipelines, and it’s made my engineering life so much more organized.",
    name: "Adam Gwadyr",
    role: "CTO",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    text: "I've tried a lot of event-driven solutions, but this one is by far the best! It's so intuitive, scalable, and it has all the core capabilities I need. Game changer!",
    name: "Annie Deway",
    role: "Lead Architect",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    text: "I don't know how I ever lived without this infrastructure! It's made deploying and managing ML microservices a breeze, and I love how transparent the observability is.",
    name: "Michel O Neill",
    role: "VP of Engineering",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    text: "As someone with a busy tech roadmap, this is a lifesaver! It's helped me automate almost everything, and I couldn't be happier with the results.",
    name: "Bard De Costa",
    role: "Founder",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    text: "Highly recommend this team to all my peers! It's the best technical talent out there, and it's made scaling our product a complete breeze.",
    name: "Ella Moridin",
    role: "Product Director",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
];

const TestimonialCard = ({ data }: { data: any }) => (
  <div className="w-[280px] sm:w-[320px] md:w-[400px] shrink-0 bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.03] transition-colors shadow-lg">
    <div>
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <p className="text-neutral-300 text-sm leading-relaxed mb-8">
        "{data.text}"
      </p>
    </div>
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
      <div className="flex items-center gap-3 relative">
        <div className="w-10 h-10 rounded-full border border-white/10 relative overflow-hidden shrink-0">
          <Image src={data.avatar} alt={data.name} fill unoptimized className="object-cover" />
        </div>
        <span className="text-white font-medium text-sm">{data.name}</span>
      </div>
      <span className="text-neutral-500 text-xs">{data.role}</span>
    </div>
  </div>
);

const Trust = () => {
  const containerRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const row1Data = allTestimonials.slice(0, 3);
  const row2Data = allTestimonials.slice(3, 6);

  // Duplicate for seamless infinite scrolling
  const marquee1 = [...row1Data, ...row1Data, ...row1Data];
  const marquee2 = [...row2Data, ...row2Data, ...row2Data];

  useGSAP(() => {
    if (row1Ref.current) {
      // scrollWidth of 3 items (since we have 9 duplicated, divide by 3 to shift by 1 full set)
      const shiftW = row1Ref.current.scrollWidth / 3;
      gsap.to(row1Ref.current, {
        x: -shiftW,
        ease: "none",
        duration: 25,
        repeat: -1,
      });
    }
    
    if (row2Ref.current) {
      const shiftW = row2Ref.current.scrollWidth / 3;
      gsap.set(row2Ref.current, { x: -shiftW });
      gsap.to(row2Ref.current, {
        x: 0,
        ease: "none",
        duration: 30, // slightly different speed
        repeat: -1,
      });
    }
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="trust"
      className="w-full bg-[#030303] overflow-hidden relative border-t border-white/5 flex flex-col items-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-28 md:pb-32"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 mb-8">
          <span className="text-sm font-medium text-[#00d4ff]">They already love our products <span className="text-lg">😍</span></span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-balance">
          See what our Clients<br/>say about us
        </h2>

        <div className="h-8 sm:h-10 md:h-12" />
        
        <p className="text-neutral-400 max-w-2xl mx-auto text-base md:text-lg">
          We are proud to work with amazing clients who have seen real results using our platform.
        </p>

        <div className="h-12 sm:h-14 md:h-16" />
      </div>

      <div
        className="relative flex flex-col gap-10 sm:gap-12 w-full max-w-[2500px] mx-auto z-10 pointer-events-none"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {/* Row 1 */}
        <div ref={row1Ref} className="flex w-fit gap-8 sm:gap-10 md:gap-12 pl-4 sm:pl-6 md:pl-8 pointer-events-none">
          {marquee1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} data={t} />
          ))}
        </div>
        
        {/* Row 2 */}
        <div ref={row2Ref} className="flex w-fit gap-8 sm:gap-10 md:gap-12 pl-4 sm:pl-6 md:pl-8 pointer-events-none">
          {marquee2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} data={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
