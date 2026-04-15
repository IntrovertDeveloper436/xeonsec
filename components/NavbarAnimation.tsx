"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const logoCircleRef  = useRef<HTMLDivElement>(null);
  const capsuleRef     = useRef<HTMLDivElement>(null);
  const textRef        = useRef<HTMLSpanElement>(null);
  const devsRef        = useRef<HTMLAnchorElement>(null);
  const hamburgerRef   = useRef<HTMLButtonElement>(null);
  const navLinksRef    = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.set([textRef.current, devsRef.current, hamburgerRef.current, ...navLinksRef.current], { opacity: 0 });
    tl.set(capsuleRef.current, {
      width: 44,
      borderRadius: 9999,
      paddingLeft: 0,
      paddingRight: 0,
      zIndex: 50,
      margin: "0 auto",
    });
    // Ensure it's opaque for the timeline
    tl.to(capsuleRef.current, { opacity: 1, duration: 0.1 });

    tl.fromTo(
      logoCircleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }
    )
      .to(
        capsuleRef.current,
        { scaleX: 1, width: "100%", paddingLeft: 3, paddingRight: 3, duration: 1, ease: "expo.inOut" },
        "+=0.1"
      )
      .to(textRef.current,    { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
      .to(navLinksRef.current, { opacity: 1, stagger: 0.08, duration: 0.3, ease: "power2.out" }, "-=0.2")
      .to([devsRef.current, hamburgerRef.current], { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }, "+=0.1");
  }, []);

  const navLinks = [
    { label: "About",     href: "#strategic-focus" },
    { label: "Expertise", href: "#services" },
    { label: "Work",      href: "#work" },
    { label: "Process",   href: "#how" },
  ];

  return (
    <nav
      className="w-full max-w-[1200px] px-6"
      style={{ position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)", zIndex: 50 }}
    >
      {/* ── Keyframes ───────────────────────────────────────────────────── */}
      <style>{`
        @keyframes nb-shimmer {
          0%   { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(500%)  skewX(-20deg); opacity: 0; }
        }
      `}</style>

      {/* ── Liquid-glass capsule ─────────────────────────────────────────── */}
      <div
        ref={capsuleRef}
        className="relative rounded-full flex items-center justify-between overflow-hidden"
        style={{
          height: 52,
          minHeight: 52,
          margin: "0 auto",
          width: 44,
          paddingLeft: 0,
          paddingRight: 0,
          /* Glass body */
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 40%, rgba(0,210,255,0.07) 100%)",
          backdropFilter:       "blur(28px) saturate(200%) brightness(1.06)",
          WebkitBackdropFilter: "blur(28px) saturate(200%) brightness(1.06)",
          /* Border */
          border:       "1px solid rgba(255,255,255,0.28)",
          borderBottom: "1px solid rgba(255,255,255,0.09)",
          /* Shadow stack */
          boxShadow: `
            inset 0 1.5px 0 rgba(255,255,255,0.55),
            inset 0 -1px  0 rgba(0,0,0,0.18),
            0 0 0 1px rgba(0,210,255,0.06),
            0 8px 40px rgba(0,0,0,0.55),
            0 2px 12px rgba(0,180,230,0.14)
          `,
          opacity: 0, // Hidden initially to prevent flicker
          transform: "scaleX(0)", // Closed initially
        }}
      >
        {/* Layer 1 — caustic light blob (upper-left) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 22% 0%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 45%, transparent 70%)",
          }}
        />
        {/* Layer 2 — top specular line */}
        <div
          className="absolute top-0 left-[6%] right-[6%] h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.95) 80%, transparent 100%)",
            filter: "blur(0.3px)",
          }}
        />
        {/* Layer 3 — bottom inner shadow */}
        <div
          className="absolute bottom-0 left-[12%] right-[12%] h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,0,0,0.22) 30%, rgba(0,0,0,0.22) 70%, transparent)",
          }}
        />
        {/* Layer 4 — slow shimmer sweep */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
          <div
            style={{
              position: "absolute",
              top: 0, bottom: 0, left: 0,
              width: "18%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.09) 50%, transparent)",
              animation: "nb-shimmer 6s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
        </div>

        {/* ── Logo ────────────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group relative z-10 order-1 pl-0.5 flex-shrink-0">
          <div
            ref={logoCircleRef}
            className="w-[38px] h-[38px] rounded-full overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            style={{
              boxShadow: "0 0 0 1.5px rgba(255,255,255,0.25), 0 0 18px rgba(0,212,255,0.35)",
              transform: "scale(0)",
            }}
          >
            <Image src="/xeonsec.jpg" alt="Logo" width={38} height={38} className="object-cover" />
          </div>
          <span
            ref={textRef}
            className="text-white font-bold text-base tracking-tight group-hover:text-[#00d4ff] transition-colors opacity-0 translate-x-4"
          >
            XeonSec
          </span>
        </Link>

        {/* ── Desktop nav links ────────────────────────────────────────── */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-1 relative z-10 order-2">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              ref={(el) => { if (el) navLinksRef.current[i] = el; }}
              className="relative px-4 py-1.5 text-sm font-normal rounded-full group/link transition-colors duration-200 text-white/70 hover:text-white opacity-0"
            >
              {/* Glass pill on hover */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-200"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.22)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
              />
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>

        {/* ── CTA "Devs" — tinted cyan glass ──────────────────────────── */}
        <Link
          href="/dev"
          ref={devsRef}
          className="hidden md:flex items-center justify-center rounded-full flex-shrink-0 mr-1 relative overflow-hidden group/cta transition-all duration-200 active:scale-95 text-white text-xs uppercase tracking-[0.18em] font-semibold px-5 py-2.5 opacity-0 scale-75 order-3"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.28) 0%, rgba(0,160,210,0.14) 60%, rgba(0,120,180,0.18) 100%)",
            backdropFilter:       "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border:       "1px solid rgba(0,212,255,0.5)",
            borderBottom: "1px solid rgba(0,150,200,0.2)",
            boxShadow: `
              inset 0 1.5px 0 rgba(255,255,255,0.55),
              inset 0 -1px  0 rgba(0,0,0,0.15),
              0 4px 20px rgba(0,212,255,0.25),
              0 1px 4px  rgba(0,0,0,0.35)
            `,
          }}
        >
          <span
            className="absolute top-0 left-[15%] right-[15%] h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }}
          />
          <span
            className="absolute top-0 left-0 w-3/5 bottom-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 20% 10%, rgba(255,255,255,0.2) 0%, transparent 65%)" }}
          />
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover/cta:opacity-100 transition-opacity duration-200"
            style={{ background: "rgba(0,212,255,0.12)" }}
          />
          <span className="relative z-10">Devs</span>
        </Link>

        {/* ── Mobile toggle ────────────────────────────────────────────── */}
        <button
          ref={hamburgerRef}
          className="md:hidden relative flex items-center justify-center text-white rounded-full w-9 h-9 flex-shrink-0 mr-1 overflow-hidden active:scale-95 transition-transform duration-150 opacity-0 scale-75 order-4"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%)",
            border: "1px solid rgba(255,255,255,0.24)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45), 0 2px 8px rgba(0,0,0,0.3)",
          }}
          aria-label="Toggle menu"
        >
          <span
            className="absolute top-0 left-[10%] right-[10%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)" }}
          />
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* ── Mobile dropdown ─────────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-6 right-6 mt-3 rounded-3xl p-5 space-y-1"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.04) 100%)",
            backdropFilter:       "blur(28px) saturate(180%) brightness(1.05)",
            WebkitBackdropFilter: "blur(28px) saturate(180%) brightness(1.05)",
            border:       "1px solid rgba(255,255,255,0.22)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            boxShadow: `
              inset 0 1.5px 0 rgba(255,255,255,0.45),
              0 24px 60px rgba(0,0,0,0.55),
              0 4px 16px rgba(0,180,230,0.1)
            `,
          }}
        >
          <div
            className="absolute top-0 left-[12%] right-[12%] h-px rounded-full pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.8) 70%, transparent)" }}
          />
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center text-white/80 hover:text-white text-base font-normal py-3 px-4 rounded-2xl transition-all duration-200 group/row relative"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/row:opacity-100 transition-opacity duration-200"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              />
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
          <Link
            href="/dev"
            className="relative mt-2 flex items-center justify-center w-full rounded-2xl py-3.5 text-white text-xs uppercase tracking-widest font-semibold overflow-hidden active:scale-[0.98] transition-transform duration-150"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.3) 0%, rgba(0,150,200,0.15) 100%)",
              border: "1px solid rgba(0,212,255,0.45)",
              boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.5), 0 4px 20px rgba(0,212,255,0.2)",
            }}
          >
            <span
              className="absolute top-0 left-[20%] right-[20%] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)" }}
            />
            <span className="relative z-10">Devs</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
