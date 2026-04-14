"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20">
      <h1 className="text-4xl font-bold text-[#00D4FF] mb-6">Contact Us</h1>
      <p className="text-neutral-400 mb-10 text-center max-w-xl">
        Have a project in mind or want to learn more? Fill out the form below and our team will get back to you soon.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-neutral-900 rounded-2xl p-8 shadow-lg flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#00D4FF]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#00D4FF]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#00D4FF]"
        />
        <button
          type="submit"
          className="bg-[#00D4FF] text-black font-bold rounded-lg py-3 px-6 uppercase tracking-widest hover:bg-[#00b4cc] transition-colors"
        >
          Send Message
        </button>
        {submitted && (
          <p className="text-green-400 text-center mt-2">Thank you! We'll be in touch soon.</p>
        )}
      </form>
    </main>
  );
}
