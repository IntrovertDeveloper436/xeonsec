import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import dynamic from "next/dynamic";

const TechStack = dynamic(() => import("@/components/TechStack"));
const Mission = dynamic(() => import("@/components/Mission"));
const Process = dynamic(() => import("@/components/Process"));
const WorkGallery = dynamic(() => import("@/components/WorkGallery"));
const Trust = dynamic(() => import("@/components/Trust"));
const PostTestimonialsCTA = dynamic(() => import("@/components/PostTestimonialsCTA"));
const FAQGrid = dynamic(() => import("@/components/FAQGrid"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="w-full bg-black relative overflow-x-clip">
      <Hero />
      <Problem />
      <Services />
      <TechStack />
      <Mission />
      <Process />
      <WorkGallery />
      <Trust />
      <PostTestimonialsCTA />
      {/* FAQ Section */}
      <section id="faq" className="w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#00D4FF]">Frequently Asked Questions</h2>
        <FAQGrid />
      </section>
      <Footer />
    </main>
  );
}
