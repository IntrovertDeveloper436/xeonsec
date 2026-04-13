import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ProductsStack from "@/components/ProductsStack";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <ProductsStack />
      <TechStack />
      <Footer />
    </main>
  );
}
