import type {
  Bowl,
  Benefit,
  FAQItem,
  FloatingChip,
  HowItWorksStep,
  Ingredient,
  NavLink,
  Testimonial,
} from "@/types";

export const SITE_NAME = "Rey Poke";
export const SITE_URL = "https://reypoke.cl";
export const ORDER_URL = "#pedir";

export const NAV_LINKS: NavLink[] = [
  { label: "Historia", href: "#historia" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_FLOATING_CHIPS: FloatingChip[] = [
  {
    id: "salmon",
    label: "Salmón fresco",
    position: { top: "12%", right: "8%" },
    delay: 0,
  },
  {
    id: "mango",
    label: "Mango",
    position: { top: "45%", left: "4%" },
    delay: 0.5,
  },
  {
    id: "edamame",
    label: "Edamame",
    position: { bottom: "18%", right: "12%" },
    delay: 1,
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Elige tu bowl",
    description: "Explora nuestra carta o crea tu combinación ideal desde cero.",
    icon: "UtensilsCrossed",
  },
  {
    id: "step-2",
    number: "02",
    title: "Personaliza",
    description: "Ajusta proteína, base, toppings y salsas a tu gusto exacto.",
    icon: "SlidersHorizontal",
  },
  {
    id: "step-3",
    number: "03",
    title: "Recibe en minutos",
    description: "Preparamos tu pedido al momento y lo llevamos a tu puerta.",
    icon: "Bike",
  },
];

export const FEATURED_BOWLS: Bowl[] = [
  {
    id: "bowl-1",
    name: "Rey del Pacífico",
    description: "Salmón, arroz sushi, edamame, aguacate y salsa ponzu.",
    ingredients: ["Salmón", "Arroz sushi", "Edamame", "Aguacate", "Ponzu"],
    price: 12990,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    tags: ["Popular"],
  },
  {
    id: "bowl-2",
    name: "Atún Fire",
    description: "Atún aleta amarilla, arroz negro, mango y sriracha mayo.",
    ingredients: ["Atún", "Arroz negro", "Mango", "Sriracha mayo"],
    price: 13490,
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
    tags: ["Nuevo"],
  },
  {
    id: "bowl-3",
    name: "Ohana Verde",
    description: "Tofu marinado, quinoa, kale, pepino y dressing de sésamo.",
    ingredients: ["Tofu", "Quinoa", "Kale", "Pepino", "Sésamo"],
    price: 10990,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    tags: ["Vegano"],
  },
  {
    id: "bowl-4",
    name: "Sunset Bowl",
    description: "Salmón, arroz blanco, mango, algas wakame y salsa teriyaki.",
    ingredients: ["Salmón", "Arroz", "Mango", "Wakame", "Teriyaki"],
    price: 12490,
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525cd3e?w=800&q=80",
    tags: ["Popular"],
  },
  {
    id: "bowl-5",
    name: "Coral Crunch",
    description: "Camarones, arroz sushi, pepino, cebolla crujiente y spicy mayo.",
    ingredients: ["Camarones", "Arroz sushi", "Pepino", "Spicy mayo"],
    price: 11990,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    tags: ["Nuevo"],
  },
  {
    id: "bowl-6",
    name: "Teal Wave",
    description: "Atún, arroz negro, edamame, aguacate y salsa de soya cítrica.",
    ingredients: ["Atún", "Arroz negro", "Edamame", "Aguacate"],
    price: 13290,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    tags: ["Popular"],
  },
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: "ing-1",
    name: "Salmón",
    image:
      "https://images.unsplash.com/photo-1519708227411-cc683027dbaa?w=400&q=80",
    nutritionFact: "Rico en Omega-3",
  },
  {
    id: "ing-2",
    name: "Atún",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    nutritionFact: "Alta proteína magra",
  },
  {
    id: "ing-3",
    name: "Mango",
    image:
      "https://images.unsplash.com/photo-1559182783-c053765d2c04?w=400&q=80",
    nutritionFact: "Vitamina C natural",
  },
  {
    id: "ing-4",
    name: "Edamame",
    image:
      "https://images.unsplash.com/photo-1584270354949-c26b0d6462e5?w=400&q=80",
    nutritionFact: "Proteína vegetal",
  },
  {
    id: "ing-5",
    name: "Aguacate",
    image:
      "https://images.unsplash.com/photo-1523049673857-726bafc3a64f?w=400&q=80",
    nutritionFact: "Grasas saludables",
  },
  {
    id: "ing-6",
    name: "Algas Wakame",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1d08e?w=400&q=80",
    nutritionFact: "Minerales marinos",
  },
  {
    id: "ing-7",
    name: "Arroz Negro",
    image:
      "https://images.unsplash.com/photo-1536304997881-ff6e9e52645b?w=400&q=80",
    nutritionFact: "Antioxidantes naturales",
  },
  {
    id: "ing-8",
    name: "Quinoa",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80",
    nutritionFact: "Sin gluten, fibra",
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: "benefit-1",
    title: "100% fresco",
    description: "Cortamos el pescado cada mañana. Cero congelados, cero atajos.",
    icon: "Leaf",
    stat: { value: 100, suffix: "%" },
  },
  {
    id: "benefit-2",
    title: "Entrega express",
    description: "Tu bowl llega en menos de 30 minutos, caliente de frescura.",
    icon: "Clock",
    stat: { value: 30, suffix: " min" },
  },
  {
    id: "benefit-3",
    title: "Opciones para todos",
    description: "Bowls veganos, sin gluten y personalizables para alérgenos.",
    icon: "Heart",
  },
  {
    id: "benefit-4",
    title: "Balance nutricional",
    description: "Cada receta diseñada con nutricionistas certificados.",
    icon: "Award",
    stat: { value: 4.9, suffix: "★", decimals: 1 },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Camila R.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    quote:
      "El salmón se siente recién cortado. Llegó en 22 minutos y el bowl estaba impecable.",
    location: "Providencia",
  },
  {
    id: "test-2",
    name: "Tomás V.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    quote:
      "Probé tres marcas de poke y Rey Poke es otro nivel. La presentación y el sabor son premium.",
    location: "Las Condes",
  },
  {
    id: "test-3",
    name: "Valentina M.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    quote:
      "Soy vegana y el Ohana Verde es mi pedido fijo. Ingredientes frescos y porciones generosas.",
    location: "Ñuñoa",
  },
  {
    id: "test-4",
    name: "Diego A.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    quote:
      "Personalizo mi bowl cada semana. La app es rápida y la entrega siempre puntual.",
    location: "Vitacura",
  },
  {
    id: "test-5",
    name: "Isidora L.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
    quote:
      "Se nota el cuidado en cada detalle. Desde el empaque hasta el último topping.",
    location: "La Reina",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cuáles son los horarios de delivery?",
    answer:
      "Operamos de lunes a domingo, de 11:00 a 23:00 hrs. Los pedidos se preparan al momento para garantizar máxima frescura.",
  },
  {
    id: "faq-2",
    question: "¿En qué zonas entregan?",
    answer:
      "Cubrimos Providencia, Las Condes, Ñuñoa, Vitacura, La Reina, Lo Barnechea y sectores aledaños. Ingresa tu dirección al pedir para confirmar cobertura.",
  },
  {
    id: "faq-3",
    question: "¿Tienen opciones veganas y sin gluten?",
    answer:
      "Sí. Contamos con bowls 100% veganos, bases sin gluten como quinoa y arroz negro, y puedes personalizar cualquier bowl eliminando alérgenos.",
  },
  {
    id: "faq-4",
    question: "¿Cuánto demora la entrega?",
    answer:
      "El tiempo promedio es de 25–30 minutos según tu zona. Recibirás seguimiento en tiempo real desde que confirmas tu pedido.",
  },
  {
    id: "faq-5",
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Tarjetas de crédito y débito, Apple Pay, Google Pay y transferencia bancaria. Todos los pagos son procesados de forma segura.",
  },
  {
    id: "faq-6",
    question: "¿Puedo cancelar o modificar mi pedido?",
    answer:
      "Puedes modificar o cancelar sin costo dentro de los primeros 3 minutos después de confirmar. Pasado ese tiempo, el bowl ya está en preparación.",
  },
];

export const PROMO_CODE = "OHANA20";
export const PROMO_DISCOUNT = 20;
