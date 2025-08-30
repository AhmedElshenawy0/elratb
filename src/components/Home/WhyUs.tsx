import { motion } from "framer-motion";
import { FaHamburger, FaLeaf, FaClock, FaSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaHamburger className="text-3xl text-yellow-400" />,
    title: "طعم لا يُنسى",
    desc: "نستخدم أفضل اللحوم والمكونات الطازجة لنقدم برغر لا يُقاوم.",
  },
  {
    icon: <FaLeaf className="text-3xl text-yellow-400" />,
    title: "مكونات طبيعية",
    desc: "كل وجبة تُحضر من مكونات طبيعية 100% بدون أي إضافات صناعية.",
  },
  {
    icon: <FaClock className="text-3xl text-yellow-400" />,
    title: "توصيل سريع",
    desc: "نوصلك في أقل من 30 دقيقة، ساخنة وجاهزة للأكل.",
  },
  {
    icon: <FaSmile className="text-3xl text-yellow-400" />,
    title: "رضا العملاء",
    desc: "خدمة عملاء ممتازة، وتجربة لا تُنسى لكل زائر.",
  },
];

const WhyUsSection = () => {
  return (
    <section
      id="why-us"
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
          لماذا تختارنا؟
        </h2>
        <p className="text-gray-300 text-lg">
          لأننا نُقدّم لك البرغر كما يجب أن يكون: لذيذ، نقي، وسريع.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-gray-900 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-bold text-yellow-300 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
