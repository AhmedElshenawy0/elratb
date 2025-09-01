import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import OrderPopup from "./OrderPopup";

export default function HomeSection() {
  const { setCartItems } = useContext(CartContext)!;
  const [selectedMeal, setSelectedMeal] = useState<any>(null);

  const categories = [
    {
      title: "الشاورما",
      meals: [
        {
          id: 1,
          image: "/images/shawrma1.png",
          title: "شاورما عربي",
          desc: "شاورما لحم أو فراخ + ثومية + بطاطس + عيش سوري",
          price: 99,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
        {
          id: 2,
          image: "/images/shawrma1.png",
          title: "شاورما عربي",
          desc: "شاورما لحم أو فراخ + ثومية + بطاطس + عيش سوري",
          price: 99,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
        {
          id: 3,
          image: "/images/shawrma1.png",
          title: "شاورما عربي",
          desc: "شاورما لحم أو فراخ + ثومية + بطاطس + عيش سوري",
          price: 99,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
      ],
    },
    {
      title: "البرجر",
      meals: [
        {
          id: 4,
          image: "/images/burger1.png",
          title: "برجر لحم مشوي",
          desc: "برجر لحم مشوي + جبنة شيدر + خس + طماطم + صوص خاص",
          price: 65,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
        {
          id: 5,
          image: "/images/burger1.png",
          title: "برجر لحم مشوي",
          desc: "برجر لحم مشوي + جبنة شيدر + خس + طماطم + صوص خاص",
          price: 65,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
        {
          id: 6,
          image: "/images/burger1.png",
          title: "برجر لحم مشوي",
          desc: "برجر لحم مشوي + جبنة شيدر + خس + طماطم + صوص خاص",
          price: 65,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
      ],
    },
    {
      title: "وجبات الفراخ",
      meals: [
        {
          id: 7,
          image: "/images/chickenmeal1.png",
          title: "وجبة فراخ",
          desc: "نص فرخة مشوية + سلطات + عيش بلدي + بطاطس",
          price: 255,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
        {
          id: 8,
          image: "/images/chickenmeal1.png",
          title: "وجبة فراخ",
          desc: "نص فرخة مشوية + سلطات + عيش بلدي + بطاطس",
          price: 255,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
        {
          id: 9,
          image: "/images/chickenmeal1.png",
          title: "وجبة فراخ",
          desc: "نص فرخة مشوية + سلطات + عيش بلدي + بطاطس",
          price: 255,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
      ],
    },
    {
      title: "وجبات عائلية",
      meals: [
        {
          id: 10,
          image: "/images/burger2.png",
          title: "وجبة عائلية",
          desc: "٤ سندوتش شاورما + بطاطس عائلية + ٢ لتر بيبسي",
          price: 150,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
        {
          id: 11,
          image: "/images/burger2.png",
          title: "وجبة عائلية",
          desc: "٤ سندوتش شاورما + بطاطس عائلية + ٢ لتر بيبسي",
          price: 150,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
        {
          id: 12,
          image: "/images/burger2.png",
          title: "وجبة عائلية",
          desc: "٤ سندوتش شاورما + بطاطس عائلية + ٢ لتر بيبسي",
          price: 150,
          options: {
            sizes: ["عادي", "كبير"],
            extras: ["زيادة ثومية", "إضافة جبنة", "بدون مخلل"],
          },
        },
      ],
    },
  ];

  const handleSelectMeal = (meal: any) => setSelectedMeal(meal);
  const handleClosePopup = () => setSelectedMeal(null);

  const handleAddToCart = (orderToAdd: any) => {
    setCartItems((prevCart) => {
      const orderId = `${orderToAdd.id}-${
        orderToAdd.selectedSize
      }-${orderToAdd.selectedExtras.sort().join("-")}`;
      const existingItem = prevCart.find((item) => item.orderId === orderId);

      if (existingItem) {
        return prevCart.map((item) =>
          item.orderId === orderId
            ? { ...item, quantity: item.quantity + orderToAdd.quantity }
            : item
        );
      } else {
        return [...prevCart, { ...orderToAdd, orderId }];
      }
    });
    handleClosePopup();
  };

  return (
    <section className="pt-14 px-6 pb-14 bg-gray-50 min-h-screen">
      {selectedMeal && (
        <OrderPopup
          meal={selectedMeal}
          onClose={handleClosePopup}
          onAddToCart={handleAddToCart}
        />
      )}

      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          الراتب الشامي
        </h1>
        <p className="text-md text-gray-600 mt-1">أكلات شرقية • مصرية</p>
        <div className="mt-2 text-[#F1C40F] text-lg font-semibold">
          ★★★★☆ <span className="text-gray-500 text-sm">(4.2)</span>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category.title} id={category.title} className="mb-14">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {category.title}
          </h2>
          <div className="flex flex-col gap-4">
            {category.meals.map((meal, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-row items-center p-4 gap-5"
              >
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="w-28 h-28 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex flex-col flex-grow h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800">
                      {meal.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{meal.desc}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[#C0392B] font-extrabold text-lg">
                      {meal.price} EGP
                    </p>
                    <button
                      onClick={() => handleSelectMeal(meal)}
                      aria-label={`Add ${meal.title} to cart`}
                      className="bg-[#C0392B] text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#a13024] active:scale-95 transition-all duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
