import React from "react";

const GuideCard = ({ guide }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Círculo amarillo flotante estilo Raindoor */}
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#f2e144] rounded-full flex items-center justify-center shadow-lg">
           <span className="text-[#003b4d] font-bold">+</span>
        </div>
      </div>

      <div className="p-6">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {guide.category}
        </span>
        <h3 className="text-xl font-bold text-[#003b4d] mt-1 group-hover:text-blue-600 transition-colors">
          {guide.title}
        </h3>
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-black text-[#003b4d]">${guide.price}</span>
          <button className="text-xs font-bold underline hover:text-blue-600">
            VER DETALLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
