import { useState, useContext, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../CartContext";
import OrderPopup from "./OrderPopup";
import toast from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    toast.success("تم إضافة الطلب إلي السلة.");
  };

  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>(".category-section")
        .forEach((section) => {
          const title = section.querySelector(".header-title");
          const cards = section.querySelectorAll(".header-list-dev");

          if (!title || !cards.length) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reset",
            },
          });

          // title animation
          tl.fromTo(
            title,
            { y: 50, opacity: 0, skewY: 5 },
            { y: 0, opacity: 1, skewY: 0, duration: 0.8, ease: "expo.out" }
          );

          // cards animation
          tl.fromTo(
            cards,
            {
              y: (i) => (i % 2 === 0 ? 30 : -30),
              x: 0,
              opacity: 0,
              scale: 0.95,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              stagger: 0.2,
              ease: "back.out(1.7)",
            },
            "-=0.4"
          );
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-24 px-6 pb-20  min-h-screen">
      {selectedMeal && (
        <OrderPopup
          meal={selectedMeal}
          onClose={handleClosePopup}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Categories */}
      {categories.map((category, categoryIndex) => (
        <div
          key={category.title}
          id={category.title}
          className="mb-14 category-section"
        >
          <button className="header-title bg-black w-32 h-10 border mb-4 relative right-[50%] z-10 translate-x-[50%]">
            <span className="absolute w-full h-full bg-white -top-1 -left-1 hover:top-0 hover:left-0 transition-all duration-200 flex justify-center items-center -z-10 border">
              {category.title}
            </span>
          </button>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.meals.map((meal, i) => (
              <div
                key={i}
                className="header-list-dev bg-white p-2 lg:p-6 xl:p-8 backdrop-blur-md rounded-lg relative shadow-md hover:shadow-xl transition-all duration-300 flex flex-row-reverse gap-2 overflow-hidden"
              >
                <div className="relative w-[45%] lg:w-[50%] aspect-[10/9] h-full flex-grow rounded-t-2xl rounded-br-2xl">
                  <img
                    src={meal.image}
                    alt={meal.title}
                    className="w-full h-full object-cover rounded-t-2xl rounded-bl-2xl"
                  />
                  <motion.button
                    onClick={() => handleSelectMeal(meal)}
                    aria-label={`Add ${meal.title} to cart`}
                    className="bg-gray-50/90 absolute bottom-0 z-50 right-0 pt-1 pl-1 text-[#f28a02] w-[60px] h-[60px] lg:w-[70px] lg:h-[65px] rounded-tl-4xl flex items-center justify-center shadow-md active:scale-90 transition"
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="bg-black p-1 rounded-full">
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
                    </span>
                  </motion.button>
                </div>

                <div className="py-2 pr-3 pl-1 xl:pl-2 flex flex-col justify-between flex-grow w-[55%] lg:w-[40%]">
                  <div>
                    <h3 className="font-bold text-[#2C3E50] mb-2">
                      {meal.title}
                    </h3>
                    <p className="text-sm text-[#7F8C8D] leading-snug">
                      {meal.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-[#f28a02] font-extrabold text-lg">
                      {meal.price} EGP
                    </p>
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

// useEffect(() => {
//   const ctx = gsap.context(() => {
//     gsap.utils
//       .toArray<HTMLElement>(".category-section")
//       .forEach((section) => {
//         const title = section.querySelector(".header-title");
//         const cards = section.querySelectorAll(".header-list-dev");

//         if (!title || !cards.length) return;

//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//             toggleActions: "play none none reset",
//           },
//         });

//         // أنيميشن العنوان
//         tl.fromTo(
//           title,
//           { y: 50, opacity: 0, skewY: 5 },
//           { y: 0, opacity: 1, skewY: 0, duration: 0.8, ease: "expo.out" }
//         );

//         // أنيميشن الكروت
//         tl.fromTo(
//           cards,
//           { y: 60, opacity: 0, scale: 0.95, rotateX: 10 },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             rotateX: 0,
//             duration: 0.6,
//             stagger: { each: 0.2, from: "start" },
//             ease: "back.out(1.7)",
//           },
//           "-=0.4" // يخلي الكروت تبدأ قبل ما العنوان يخلص بشوية
//         );
//       });
//   });

//   return () => ctx.revert();
// }, []);
