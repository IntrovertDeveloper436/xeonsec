"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "What services does XeonSec offer?",
    a: "We specialize in product strategy, ML intelligence, cybersecurity, and event-driven systems, delivering senior-level execution for high-leverage tech projects.",
  },
  {
    q: "How do I start a project?",
    a: "Contact us via the form on our contact page or email hello@xeonsec.studio. We'll schedule a discovery call to understand your needs and propose a tailored solution.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Most projects are delivered in 4-12 weeks, depending on complexity and scope. We focus on rapid, high-quality execution with clear milestones.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we provide ongoing support and maintenance packages to ensure your product remains secure, scalable, and up-to-date.",
  },
  {
    q: "What industries do you serve?",
    a: "We work with startups, enterprises, and organizations in tech, finance, healthcare, and more, focusing on high-impact, innovative projects.",
  },
  {
    q: "Can you help with legacy system modernization?",
    a: "Absolutely. We have deep experience modernizing legacy systems, migrating to cloud, and integrating new technologies for better performance and security.",
  },
  {
    q: "How do you ensure project security?",
    a: "Security is built into every stage of our process, from architecture to deployment. We follow best practices and conduct regular audits.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer flexible pricing based on project scope and requirements. After an initial consultation, we provide a transparent, tailored quote.",
  },
];

export default function FAQGrid() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto items-start">
      {faqs.map((item, idx) => (
        <div key={idx} className="bg-neutral-900 rounded-xl shadow-lg p-6 flex flex-col justify-start h-fit">
          <button
            className="w-full text-left text-lg font-semibold text-white focus:outline-none flex items-center justify-between"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            <span>{item.q}</span>
            <span className={`ml-4 transition-transform ${open === idx ? "rotate-45" : "rotate-0"}`}>+</span>
          </button>
          <div
            id={`faq-panel-${idx}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${open === idx ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
            aria-hidden={open !== idx}
          >
            <p className="text-neutral-400 text-base text-left">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}