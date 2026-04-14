"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Cpu, Shield, Zap, Network } from "lucide-react";

const services = [
  {
    title: "Intelligence & ML",
    icon: Cpu,
    description:
      "Building predictive systems and generative AI solutions that drive real business value.",
    points: [
      "Predictive Modeling",
      "Generative AI & LLMs",
      "Real-time Data Engineering",
    ],
  },
  {
    title: "Connected Systems",
    icon: Network,
    description:
      "Bridging the gap between hardware and software with robust IoT infrastructure.",
    points: [
      "Edge Computing Telemetry",
      "Hardware-Software Integration",
      "High-Availability Protocols",
    ],
  },
  {
    title: "Strategic Integrity",
    icon: Shield,
    description:
      "Ensuring your product architecture is secure, scalable, and compliant.",
    points: [
      "Secure Product Architecture",
      "Scalable Governance",
      "Zero-compromise Integrity",
    ],
  },
  {
    title: "Product Engineering",
    icon: Zap,
    description:
      "Developing cloud-native applications with high-performance event-driven logic.",
    points: [
      "Event-driven Architecture",
      "Full-stack Development",
      "Cloud-native Scalability",
    ],
  },
];

const ServiceCard = ({ title, description, points, icon: Icon }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bigIconRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    // entry animation
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(spotlightRef.current, {
        x: x - 120,
        y: y - 120,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const hoverIn = () => {
      if (isTouch) return;

      gsap.to(el, {
        scale: 1.03,
        boxShadow: "0 0 50px rgba(34,211,238,0.25)",
        duration: 0.4,
      });

      gsap.to(bgRef.current, { opacity: 1, duration: 0.4 });
      gsap.to(bigIconRef.current, {
        opacity: 0.12,
        scale: 1.2,
        duration: 0.5,
      });
      gsap.to(spotlightRef.current, { opacity: 1, duration: 0.3 });
    };

    const hoverOut = () => {
      if (isTouch) return;

      gsap.to(el, { scale: 1, boxShadow: "none", duration: 0.4 });
      gsap.to(bgRef.current, { opacity: 0, duration: 0.4 });
      gsap.to(bigIconRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.4,
      });
      gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3 });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseenter", hoverIn);
    el.addEventListener("mouseleave", hoverOut);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", hoverIn);
      el.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl border border-cyan-500/20 !p-6 sm:!p-7 md:!p-8 bg-black/40 backdrop-blur-md overflow-hidden"
    >
      {/* Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full opacity-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Neon Gradient */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent"
      />

      {/* Big Icon */}
      <div
        ref={bigIconRef}
        className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4 opacity-0 pointer-events-none"
      >
        <Icon className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 text-cyan-400" />
      </div>

      <div className="relative z-10 px-0 sm:px-1 md:px-2 py-0 sm:py-1">
        {/* Small Icon */}
        <div className="mb-4 sm:mb-5">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
          {title}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-2 sm:space-y-2.5">
          {points.map((point: string, idx: number) => (
            <li key={idx} className="text-xs sm:text-sm text-gray-300 flex gap-2 sm:gap-2.5">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 }
    );
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 sm:py-24 md:py-32 px-3 sm:px-5 md:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center justify-center">
        <div ref={headingRef} className="text-center w-full max-w-7xl">
          <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase mb-4 sm:mb-6">
            Our Expertise
          </p>
          <h2 className="text-[clamp(1.6rem,4.2vw,3.75rem)] font-bold leading-tight whitespace-nowrap">
            Multidomain technical mastery.
          </h2>
        </div>

        <div className="h-10 sm:h-12 md:h-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7 w-full max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;