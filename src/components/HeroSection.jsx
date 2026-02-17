import React from "react";

const HeroSection = () => {
  const scrollToCatalog = () => {
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center bg-[#003b4d] overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#f2e144] rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-4">
            BREAK <br /> <span className="text-[#f2e144]">YOUR LIMIT</span>
          </h1>
          <p className="text-blue-100 text-lg mb-8 max-w-sm">
            Guías digitales diseñadas para transformar tu entrenamiento.
          </p>
          <button
            onClick={scrollToCatalog}
            className="bg-[#f2e144] text-[#003b4d] font-bold py-3 px-10 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Ver guías
          </button>
        </div>
        
        {/* Espacio para una imagen de acción */}
        <div className="hidden md:block relative">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800" 
            alt="Fitness" 
            className="rounded-3xl shadow-2xl border-4 border-[#f2e144]/30"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
