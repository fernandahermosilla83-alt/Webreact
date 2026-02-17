import React from "react";
import { Link } from "react-router-dom";
import { categoryLabels } from "../data/guides";

const GuideCard = ({ guide }) => {
  
  // Función para comprar por WhatsApp
  const handleBuy = (e) => {
    e.preventDefault(); // Evita que entre al detalle, solo abre WhatsApp
    const phone = "56931817476"; // Tu número configurado
    
    // El mensaje que te llegará
    const message = `Hola! Quiero comprar la guía *${guide.title}* de $${guide.price.toLocaleString("es-CL")}. ¿Me das los datos de transferencia?`;
    
    // Crear el link de WhatsApp
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    // Abrir en una nueva pestaña
    window.open(url, "_blank");
  };

  return (
    <Link to={`/guia/${guide.id}`} className="group block cursor-pointer relative">
      {/* --- IMAGEN Y ETIQUETA --- */}
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-gray-100">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Etiqueta de Categoría (Arriba Izquierda) */}
        <div className="absolute top-4 left-4 bg-[#003b4d]/90 backdrop-blur-md text-[#f2e144] text-[10px] font-bold px-3 py-1 rounded-full tracking-widest shadow-lg">
           {categoryLabels[guide.category] ? categoryLabels[guide.category].toUpperCase() : "GUÍA"}
        </div>
      </div>

      {/* --- INFO Y BOTÓN DE COMPRA --- */}
      <div className="px-2">
        <h3 className="text-lg font-bold text-[#003b4d] leading-tight group-hover:text-blue-600 transition-colors mb-3">
          {guide.title}
        </h3>
        
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Precio</span>
            <span className="text-xl font-black text-[#003b4d]">
              ${guide.price.toLocaleString("es-CL")}
            </span>
          </div>

          {/* Botón Amarillo de Acción */}
          <button 
            onClick={handleBuy}
            className="bg-[#f2e144] text-[#003b4d] text-[10px] font-black py-2 px-4 rounded-full shadow-md hover:bg-[#ffe600] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            COMPRAR
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default GuideCard;
