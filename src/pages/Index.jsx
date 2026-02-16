import React from "react";
import HeroSection from "../components/HeroSection";
import CatalogSection from "../components/CatalogSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CatalogSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

