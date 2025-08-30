export default function HomeSection() {
  const categories = [
    {
      title: "الشاورما",
      meals: [
        {
          image: "/images/shawrma1.png",
          title: "شاورما عربي",
          desc: "شاورما لحم أو فراخ + ثومية + بطاطس + عيش سوري",
          price: 99,
        },
        {
          image: "/images/shawrma1.png",
          title: "شاورما عربي",
          desc: "شاورما لحم أو فراخ + ثومية + بطاطس + عيش سوري",
          price: 99,
        },
        {
          image: "/images/shawrma1.png",
          title: "شاورما عربي",
          desc: "شاورما لحم أو فراخ + ثومية + بطاطس + عيش سوري",
          price: 99,
        },
      ],
    },
    {
      title: "البرجر",
      meals: [
        {
          image: "/images/burger1.png",
          title: "برجر لحم مشوي",
          desc: "برجر لحم مشوي + جبنة شيدر + خس + طماطم + صوص خاص",
          price: 65,
        },
        {
          image: "/images/burger1.png",
          title: "برجر لحم مشوي",
          desc: "برجر لحم مشوي + جبنة شيدر + خس + طماطم + صوص خاص",
          price: 65,
        },
        {
          image: "/images/burger1.png",
          title: "برجر لحم مشوي",
          desc: "برجر لحم مشوي + جبنة شيدر + خس + طماطم + صوص خاص",
          price: 65,
        },
      ],
    },
    {
      title: "وجبات الفراخ",
      meals: [
        {
          image: "/images/chickenmeal1.png",
          title: "وجبة فراخ",
          desc: "نص فرخة مشوية + سلطات + عيش بلدي + بطاطس",
          price: 255,
        },
        {
          image: "/images/chickenmeal1.png",
          title: "وجبة فراخ",
          desc: "نص فرخة مشوية + سلطات + عيش بلدي + بطاطس",
          price: 255,
        },
        {
          image: "/images/chickenmeal1.png",
          title: "وجبة فراخ",
          desc: "نص فرخة مشوية + سلطات + عيش بلدي + بطاطس",
          price: 255,
        },
      ],
    },
    {
      title: "وجبات عائلية",
      meals: [
        {
          image: "/images/burger2.png",
          title: "وجبة عائلية",
          desc: "٤ سندوتش شاورما + بطاطس عائلية + ٢ لتر بيبسي",
          price: 150,
        },
        {
          image: "/images/burger2.png",
          title: "وجبة عائلية",
          desc: "٤ سندوتش شاورما + بطاطس عائلية + ٢ لتر بيبسي",
          price: 150,
        },
        {
          image: "/images/burger2.png",
          title: "وجبة عائلية",
          desc: "٤ سندوتش شاورما + بطاطس عائلية + ٢ لتر بيبسي",
          price: 150,
        },
      ],
    },
  ];

  return (
    <section className="pt-14 px-6 pb-14 bg-gray-50 min-h-screen">
      {/* Restaurant Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800">الراتب الشامي</h1>
        <p className="text-md text-gray-600 mt-1">أكلات شرقية • مصرية</p>
        <div className="mt-2 text-[#F1C40F] text-lg font-semibold">
          ★★★★☆ <span className="text-gray-500 text-sm">(4.2)</span>
        </div>
      </div>

      {/* Loop over categories */}
      {categories.map((category) => (
        <div key={category.title} id={category.title} className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {category.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.meals.map((meal, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer p-4"
              >
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-full h-44 object-cover rounded-xl mb-4"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-gray-800">
                    {meal.title}
                  </h3>
                  <p className="text-sm text-gray-600">{meal.desc}</p>
                  <p className="text-[#C0392B] font-extrabold text-lg mt-2">
                    {meal.price} EGP
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
