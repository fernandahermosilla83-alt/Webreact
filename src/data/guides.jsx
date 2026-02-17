export const categoryLabels = {
  cardio: "Cardio",
  fuerza: "Fuerza",
  flexibilidad: "Flexibilidad",
  "rutinas-rapidas": "Rutinas Rápidas",
};

export const levelLabels = {
  principiante: "Principiante",
  intermedio: "Intermedio",
  avanzado: "Avanzado",
};

export const guides = [
  {
    id: "cardio-30-min",
    title: "Cardio en 30 Minutos",
    description: "Rutinas intensas de cardio que puedes hacer en casa sin equipo.",
    price: 2990,
    category: "cardio",
    level: "principiante",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=800&fit=crop",
  },
  {
    id: "fuerza-total",
    title: "Fuerza Total",
    description: "Programa de fuerza completo con pesas y peso corporal.",
    price: 4990,
    category: "fuerza",
    level: "intermedio",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=800&fit=crop",
  },
  {
    id: "yoga-flexibilidad",
    title: "Yoga & Flexibilidad",
    description: "Mejora tu flexibilidad y reduce el estrés con yoga guiado.",
    price: 2990,
    category: "flexibilidad",
    level: "principiante",
    // ✅ IMAGEN ACTUALIZADA (Pexels - Mujer Perro Boca Abajo)
    image: "https://images.pexels.com/photos/6453430/pexels-photo-6453430.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "hiit-express",
    title: "HIIT Express",
    description: "Entrenamientos de alta intensidad en solo 15 minutos.",
    price: 4990,
    category: "rutinas-rapidas",
    level: "intermedio",
    // ✅ IMAGEN ACTUALIZADA (Pexels - Hombre Cuerda)
    image: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];
