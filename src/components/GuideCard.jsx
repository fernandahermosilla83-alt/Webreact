import React from "react";
import { Link } from "react-router-dom";
import { categoryLabels } from "../data/guides";

const GuideCard = ({ guide }) => {
  return (
    <div className="group block border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Imagen */}
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full uppercase font-bold">
            {categoryLabels[guide.category]}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-1.5 text-gray-900 group-hover:text-blue-600 transition-colors">
          {guide.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {guide.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900">${guide.price}</span>
          <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
