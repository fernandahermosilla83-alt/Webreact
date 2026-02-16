import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      q: "¿En qué formato están las guías?",
      a: "Todas las guías están en formato PDF de alta calidad, optimizadas para leer en cualquier dispositivo: móvil, tablet u ordenador.",
    },
    {
      q: "¿Cómo recibo mi guía después de comprar?",
      a: "Recibirás un enlace de descarga instantáneo en tu correo electrónico. También puedes acceder a tu guía desde tu cuenta en cualquier momento.",
    },
    {
      q: "¿Son aptas para principiantes?",
      a: "¡Sí! Tenemos guías para todos los niveles. Cada una indica claramente si es para principiantes, intermedios o avanzados.",
    },
    {
      q: "¿Puedo obtener un reembolso?",
      a: "Ofrecemos garantía de satisfacción de 30 días. Si la guía no cumple tus expectativas, te devolvemos tu dinero sin preguntas.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Preguntas Frecuentes</h2>
          <p className="text-gray-600">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer">
              <summary className="flex justify-between items-center font-semibold p-6 list-none text-gray-900 hover:bg-gray-50 transition-colors">
                <span>{faq.q}</span>
                <span className="transition-transform group-open:rotate-180">
                  <svg fill="none" height="24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </summary>
              <div className="text-gray-600 px-6 pb-6 leading-relaxed border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
