import Navigation from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import ModelMatrixCarousel from "@/components/ModelMatrixCarousel";
import ProductMatrixCarousel from "@/components/ProductMatrixCarousel";
import CompanyIntro from "@/components/CompanyIntro";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-[#050505] bg-white">
      <Navigation />
      <HeroCarousel />
      <ModelMatrixCarousel />
      <ProductMatrixCarousel />
      <CompanyIntro />
      <Footer />
    </main>
  );
}