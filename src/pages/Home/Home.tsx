import { useContext, useEffect, useRef, useState } from "react";
import HeroSection from "../../components/Home/Hero";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../components/CartContext";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const { cartItems } = useContext(CartContext)!;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const refs: any = {
    " العروض": useRef(null),
    "قسم الأكثر مبيعا": useRef(null),
    "قسم البيتزا": useRef(null),
    "قسم شاورما الحمة": useRef(null),
    "قسم شاورما الدجاج": useRef(null),
    "قسم دجاج الشواية": useRef(null),
    "قسم ع الفحم": useRef(null),
    "قسم البروست": useRef(null),
    "قسم العربي": useRef(null),
    "قسم السندوتشات": useRef(null),
    "قسم البرجر": useRef(null),
    "قسم الوجبات": useRef(null),
    "قسم المكرونات": useRef(null),
    "قسم الشوربة": useRef(null),
    "قسم الريزو": useRef(null),
    "قسم الماريا": useRef(null),
    "قسم المناقيش": useRef(null),
    "قسم البرك": useRef(null),
    "قسم السلطات والمقبلات": useRef(null),
    "قسم الإضافات": useRef(null),
  };

  const scrollToSection = (key: string) => {
    refs[key].current?.scrollIntoView({ behavior: "smooth" });
    // تعديل بسيط لتفادي تغطية الـ section بالبار الثابت
    setTimeout(() => {
      window.scrollBy({ top: -60, behavior: "smooth" });
    }, 300);
  };

  const headerRef = useRef(null);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      tl.from(".header-title", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(".header-subtitle", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(".header-rating", {
          scale: 0.5,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // مراقبة الاسكرول
  useEffect(() => {
    const onScroll = () => {
      const header = headerRef.current as HTMLElement | null;
      if (!header) return;
      const threshold = (header.offsetTop || 0) + (header.offsetHeight || 0);
      setShowBar(window.scrollY >= threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F5F2]" dir="rtl">
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute bg-fixed inset-0 bg-cover bg-center "
          style={{ backgroundImage: "url('/images/logo00.jpg')" }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-6 pb-52 overflow-hidden"
        >
          {/* Logo with Animation */}
          <motion.img
            src="/images/logo.jpg"
            alt="Restaurant Logo"
            initial={{ x: "100vw", rotate: 1080, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewport={{ once: false }}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg mb-6"
          />

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            مرحباً بكم في مطعمنا
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-2xl">
            تجربة فريدة من الأطباق الشرقية والعالمية مع أجواء مميزة.
          </p>
        </motion.div>
      </div>

      <div className="pt-12">
        {/* Header */}
        <div ref={headerRef}>
          <div className=" text-center">
            <h1 className="header-title text-4xl md:text-5xl font-extrabold text-[#2C3E50] drop-shadow-sm">
              الراتب الشامي
            </h1>
            <p className="header-subtitle text-lg text-[#7F8C8D] mt-2">
              أكلات شرقية • مصرية
            </p>
            <div className="header-rating mt-3 text-[#f28a02] text-xl font-semibold">
              ★★★★☆ <span className="text-[#7F8C8D] text-sm">(4.2)</span>
            </div>
          </div>

          {/* Sticky Categories List (تختفي لما البار الثابت يبان) */}
          <div
            className={`w-full pb-2 px-4 mt-2 sticky top-0 pt-6 z-40 ${
              showBar ? "invisible" : ""
            }`}
          >
            <ul className="flex gap-3 flex-wrap justify-center">
              {Object.keys(refs).map((item) => (
                <li
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="flex-shrink-0 bg-[#268781] px-4 py-2 rounded-2xl text-sm text-white font-medium cursor-pointer "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Fixed Bar */}
        <div
          className={`fixed left-0 right-0 top-0 z-50 bg-white shadow-md transition-transform duration-300 ${
            showBar ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex gap-3 overflow-x-auto no-scrollbar px-4 py-2 snap-x snap-mandatory">
            {Object.keys(refs).map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="snap-center flex-shrink-0 bg-[#268781] px-4 py-2 rounded-2xl text-sm text-white font-medium cursor-pointer transition-transform duration-200 hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 relative">
          <Link
            to="/cart"
            className="bottom-4 right-4 z-50 fixed bg-[#f28a02] p-5 rounded-full"
          >
            <BsCart4 size={28} color="white" />
            {cartItems.length >= 1 ? (
              <span className="absolute h-4 w-4 top-2 flex justify-center items-center left-7 text-[10px] rounded-full bg-red-500 text-white">
                {cartItems.length}
              </span>
            ) : (
              ""
            )}
          </Link>
          <HeroSection refs={refs} />
        </div>
      </div>
    </div>
  );
};

export default Home;
