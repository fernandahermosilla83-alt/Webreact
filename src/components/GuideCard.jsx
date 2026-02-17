import React from "react";
import { Link } from "react-router-dom";
import { categoryLabels } from "../data/guides";

const GuideCard = ({ guide }) => {
  return (
    <Link to={`/guia/${guide.id}`} className="group block cursor-pointer">
      {/* Contenedor de Imagen */}
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* El círculo amarillo "Plus" */}
        <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#f2e144] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
           <span className="text-[#003b4d] font-bold text-xl">+</span>
        </div>
        {/* Badge de categoría */}
        <div className="absolute top-4 left-4 bg-[#003b4d]/80 backdrop-blur-sm text-[#f2e144] text-[9px] font-bold px-3 py-1 rounded-full tracking-widest">
           {categoryLabels[guide.category] ? categoryLabels[guide.category].toUpperCase() : "GUÍA"}
        </div>
      </div>

      {/* Información */}
      <div className="px-2">
        <h3 className="text-lg font-bold text-[#003b4d] leading-tight group-hover:text-blue-600 transition-colors">
          {guide.title}
        </h3>
        <div className="flex items-center mt-2 space-x-2">
          {/* Aquí está el truco para el formato de precio chileno */}
          <span className="text-xl font-black text-[#003b4d]">
            ${guide.price.toLocaleString("es-CL")}
          </span>
          <span className="text-[10px] font-bold text-gray-400 underline decoration-[#f2e144] decoration-2 underline-offset-4">
            VER DETALLE
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;
