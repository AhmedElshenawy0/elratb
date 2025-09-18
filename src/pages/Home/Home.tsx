import { useEffect, useRef, useState } from "react";
import HeroSection from "../../components/Home/Hero";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = ["الشاورما", "البرجر", "وجبات الفراخ", "وجبات عائلية"];
  const headerRef = useRef(null);

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
        duration: 0.8,
        ease: "power3.out",
      })
        .from(".header-subtitle", {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(".header-rating", {
          scale: 0.5,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        })
        .from(".header-list li", {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.15,
          ease: "power2.out",
        });
    }, headerRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F5F2]" dir="rtl">
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute bg-fixed inset-0 bg-cover bg-center "
          style={{ backgroundImage: "url('/images/burger1.png')" }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-6 pb-32 overflow-hidden"
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
        <div ref={headerRef} className="pt-12">
          {/* Header */}
          <div className="mb-8 text-center">
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

          {/* Categories List */}
          <div className="w-full pb-2 px-4 flex flex-col items-center">
            <ul className="header-list flex flex-wrap justify-center gap-3">
              {categories.map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    const el = document.getElementById(item);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                      setSidebarOpen(false);
                    }
                  }}
                  className="bg-[#268781] px-4 py-2 rounded-2xl text-sm text-white font-medium cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
