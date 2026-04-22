import Navigation from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import ModelMatrixCarousel from "@/components/ModelMatrixCarousel";
import ProductMatrixCarousel from "@/components/ProductMatrixCarousel";
import CompanyIntro from "@/components/CompanyIntro";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navigation />
      <HeroCarousel />
      <ModelMatrixCarousel />
      <ProductMatrixCarousel />
      <CompanyIntro />
      <Footer />
    </main>
  );
}