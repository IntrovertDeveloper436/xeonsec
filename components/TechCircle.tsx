"use client";

import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", invert: false },
  { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",        invert: false },
  { name: "Express",    icon: "https://cdn.simpleicons.org/express/white",                                                   invert: false },
  { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",        invert: true  },
  { name: "NestJS",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",        invert: false },
  { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",      invert: false },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",invert: false },
  { name: "Redis",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",          invert: false },
  { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",        invert: false },
  { name: "Go",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",                invert: false },
  { name: "Rust",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",            invert: false },
  { name: "Java",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",            invert: false },
  { name: "C",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",                  invert: false },
  { name: "C++",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",  invert: false },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",invert: false },
  { name: "Solidity",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",    invert: false },
  { name: "Solana",     icon: "https://cdn.simpleicons.org/solana/14F195",                                                   invert: false },
  { name: "PyTorch",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",      invert: false },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",invert: false },
  { name: "Pandas",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",        invert: false },
  { name: "GitHub",     icon: "https://cdn.simpleicons.org/github/white",                                                    invert: false },
  { name: "Jenkins",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",      invert: false },
  { name: "Terraform",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",  invert: false },
  { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",        invert: false },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",   invert: false },
  { name: "AWS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
  { name: "GCP",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", invert: false },
  { name: "Azure",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",          invert: false },
];

// Split into 4 rows of 7 icons each
const ROWS = [
  technologies.slice(0, 7),
  technologies.slice(7, 14),
  technologies.slice(14, 21),
  technologies.slice(21, 28),
];

// Alternating scroll speeds for natural feel
const DURATIONS = [38, 32, 42, 30];

function MarqueeRow({
  items,
  reverse,
  duration,
}: {
  items: typeof technologies;
  reverse: boolean;
  duration: number;
}) {
  // Duplicate items 4× so the loop never shows a gap at any viewport width
  const repeated = [...items, ...items, ...items, ...items];
  const dir = reverse ? "tc-marquee-right" : "tc-marquee-left";

  return (
    <div className="flex overflow-hidden w-full">
      <div
        className="flex flex-shrink-0 gap-3"
        style={{
          animation: `${dir} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {repeated.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.16] transition-colors duration-300 group cursor-default"
            style={{
              backdropFilter: "blur(6px)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <div className="relative flex-shrink-0" style={{ width: 22, height: 22 }}>
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                unoptimized
                className={`object-contain transition-transform duration-300 group-hover:scale-110 ${
                  tech.invert ? "invert opacity-90" : ""
                }`}
              />
            </div>
            <span className="text-xs font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechCircle() {
  return (
    <section className="bg-neutral-900 overflow-hidden flex flex-col items-center py-20 relative border-y border-neutral-800">
      <style>{`
        @keyframes tc-marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes tc-marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4  w-96 h-40 bg-cyan-500/5   rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-40 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="mb-10 text-center z-10 pointer-events-none px-6">
        <h2 className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">
          Expertise in Cutting-Edge Tech Stack
        </h2>
        <p className="text-xs text-neutral-500 mt-2">
          Full‑spectrum · from Systems to Cloud
        </p>
      </div>

      {/* 4 marquee rows — pure CSS, zero JS */}
      <div
        className="flex flex-col gap-3 w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {ROWS.map((row, idx) => (
          <MarqueeRow
            key={idx}
            items={row}
            reverse={idx % 2 !== 0}   // rows 1 & 3 go right, rows 0 & 2 go left
            duration={DURATIONS[idx]}
          />
        ))}
      </div>
    </section>
  );
}
