import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import WorkGallery from "@/components/WorkGallery";
import Trust from "@/components/Trust";
import PostTestimonialsCTA from "@/components/PostTestimonialsCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-black relative overflow-x-clip">
      <Hero />
      <Problem />
      <Services />
      <Mission />
      <WorkGallery />
      <Trust />
      <PostTestimonialsCTA />
      <Footer />
    </main>
  );
}
