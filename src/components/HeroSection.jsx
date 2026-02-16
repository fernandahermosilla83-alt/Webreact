import React from "react";

const HeroSection = () => {
  const scrollToCatalog = () => {
    const catalogElement = document.getElementById("catalogo");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 tracking-wide border border-blue-100">
          Guías digitales de ejercicio
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-gray-900">
          Entrena <span className="text-blue-600">fácil</span>
          <br />
          y sin excusas
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
          Guías descargables con rutinas claras y efectivas.
          Sin equipo, sin gimnasio, a tu ritmo.
        </p>

        <button
          onClick={scrollToCatalog}
          className="bg-gray-900 text-white rounded-full px-8 py-4 text-base font-semibold shadow-lg hover:bg-black hover:shadow-xl transition-all hover:-translate-y-1"
        >
          Ver guías disponibles ↓
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
