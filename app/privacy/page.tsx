"use client";

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-start px-6 py-32 relative">
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-[#00D4FF]/10 to-transparent pointer-events-none" />
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center z-10">
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
          Privacy <span className="text-[#00D4FF]">Policy</span>
        </h1>
        <p className="text-neutral-400 text-lg mb-12 max-w-2xl">
          We take your privacy seriously. Here is how we handle your data.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-neutral-900/50 border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl z-10 text-neutral-300 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Information Collection</h2>
          <p className="leading-relaxed">
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or otherwise when you contact us. This includes names, emails, and project details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Use of Information</h2>
          <p className="leading-relaxed">
            We use personal information collected to fulfill and manage your orders, respond to inquiries, and build tailored technical solutions based on the requirements you provide us. We do not sell your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
          <p className="leading-relaxed">
            As a firm specializing in cybersecurity, we implement strict organizational and technical security measures designed to protect your personal information against accidental, unlawful, or unauthorized destruction, loss, alteration, access, disclosure, or use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Your Privacy Rights</h2>
          <p className="leading-relaxed">
            You may review, change, or terminate your data at any time. If you wish to have your data completely scrubbed from our active project management queues, please contact us at hello@xeonsec.studio.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10 mt-12 flex justify-center pb-8">
          <Link href="/" className="text-[#00D4FF] hover:text-white transition-all duration-300 p-4 rounded-full bg-neutral-900 border border-white/5 hover:border-[#00D4FF]/30 shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:-translate-y-1">
            <Home size={24} />
          </Link>
        </div>
      </div>
    </main>
  );
}
