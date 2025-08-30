import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "سارة محمد",
    comment: "أفضل برغر ذقته في حياتي! المذاق رائع والخدمة ممتازة.",
    image: "/images/customer1.jpg",
  },
  {
    id: 2,
    name: "علي القحطاني",
    comment: "الديكور عصري والجو العام مريح جداً. أنصح الجميع بالتجربة.",
    image: "/images/customer2.jpg",
  },
  {
    id: 3,
    name: "منى خالد",
    comment: "الطلب وصلني بسرعة وكان ساخن ولذيذ! شكراً لكم.",
    image: "/images/customer3.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
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
          آراء العملاء
        </h2>
        <p className="text-gray-300 text-lg">
          ماذا يقول زبائننا عن تجربة الطعام لدينا؟
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl shadow-xl relative"
          >
            <FaQuoteRight className="text-yellow-400 text-3xl absolute top-4 left-4" />

            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
              />
              <div className="text-right">
                <h4 className="text-lg font-semibold text-yellow-300">
                  {testimonial.name}
                </h4>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {testimonial.comment}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
