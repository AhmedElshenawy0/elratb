import { motion } from "framer-motion";

const meals = [
  {
    id: 1,
    title: "برغر كلاسيك",
    desc: "لحم بقري طازج مع جبنة شيدر وخس وصلصة خاصة.",
    price: "35 ريال",
    image: "/images/classic-burger.jpg",
  },
  {
    id: 2,
    title: "برغر الدجاج المقرمش",
    desc: "صدر دجاج مقرمش مع صوص العسل والخردل.",
    price: "32 ريال",
    image: "/images/crispy-chicken.jpg",
  },
  {
    id: 3,
    title: "برغر مشوي بالجبنة",
    desc: "برغر مشوي مع طبقة مزدوجة من الجبنة الذائبة.",
    price: "38 ريال",
    image: "/images/cheesy-grilled.jpg",
  },
];

const BestSellersSection = () => {
  return (
    <section
      id="best-sellers"
      className="bg-black text-white py-20 px-6 md:px-16"
      dir="rtl"
      lang="ar"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          الأصناف المميزة
        </h2>
        <p className="text-gray-300 text-lg">
          أكثر الوجبات المحبوبة من زبائننا الكرام.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {meals.map((meal, index) => (
          <motion.div
            key={meal.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition"
          >
            <img
              src={meal.image}
              alt={meal.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 text-right">
              <h3 className="text-xl font-bold text-yellow-300 mb-2">
                {meal.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{meal.desc}</p>
              <span className="text-yellow-400 font-semibold">
                {meal.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestSellersSection;
