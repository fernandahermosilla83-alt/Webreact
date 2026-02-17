import React, { useState } from "react";
import { guides, categoryLabels } from "../data/guides";
import GuideCard from "./GuideCard";

const categories = ["todas", "cardio", "fuerza", "flexibilidad", "rutinas-rapidas"];

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState("todas");

  const filtered = activeCategory === "todas"
    ? guides
    : guides.filter((g) => g.category === activeCategory);

  return (
    /* Fondo blanco puro para el catálogo */
    <section id="catalogo" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-black text-[#003b4d] tracking-tighter italic">
            NUESTRAS GUÍAS
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Elige la guía que se adapte a tu nivel y objetivo.
          </p>
        </div>

        {/* Filtros minimalistas */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-[#003b4d] text-[#f2e144] shadow-lg"
                  : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
            >
              {cat === "todas" ? "TODAS" : categoryLabels[cat].toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grilla de guías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((guide, i) => (
            <GuideCard key={guide.id} guide={guide} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
