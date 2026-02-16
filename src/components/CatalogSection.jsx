import { useState } from "react";
import { guides, categoryLabels } from "../data/guides"; // Ruta corregida
import GuideCard from "./GuideCard";

const categories = ["todas", "cardio", "fuerza", "flexibilidad", "rutinas-rapidas"];

const CatalogSection = () => {
  const [activeCategory, setActiveCategory] = useState("todas");

  const filtered = activeCategory === "todas"
    ? guides
    : guides.filter((g) => g.category === activeCategory);

  return (
    <section id="catalogo" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Guías</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Elige la guía que se adapte a tu nivel y objetivo.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat === "todas" ? "Todas" : categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((guide, i) => (
            <GuideCard key={guide.id} guide={guide} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
