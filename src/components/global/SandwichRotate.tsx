import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SandwichAnimation = () => {
  const sandwichRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sandwichRef.current,
      {
        x: "120vw", // أبعده أكتر عشان يبان وهو داخل
        rotateY: 0,
        opacity: 1,
      },
      {
        x: "-120vw", // يخرج من الشمال
        rotateY: 720, // يلف أفقياً
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current, // السيكشن نفسه هو التريجر
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "restart none none reset", // يعيد الأنيميشن كل مرة
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px] flex items-center justify-center overflow-hidden bg-gray-100"
    >
      <img
        ref={sandwichRef}
        src="/images/pexels-valeriya-1639557-removebg-preview.png"
        alt="Sandwich"
        className="w-32 h-32"
      />
    </div>
  );
};

export default SandwichAnimation;
