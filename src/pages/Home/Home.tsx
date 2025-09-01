import { useEffect, useState } from "react";
import Sidebar from "../../components/global/Sidebar";
import HeroSection from "../../components/Home/Hero";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex min-h-screen flex-col" dir="rtl">
      <div className="w-full">
        {/* Background Image */}
        <div className="h-80 md:h-72 lg:h-105 2xl:h-150 bg-center relative">
          <img
            src="/images/cover1.jpg"
            alt=""
            className="w-full h-full object-fill"
          />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/30" /> */}
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative pt-3 px-4 md:px-10 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          {/* Logo */}
          <img
            src="/images/logo.jpg"
            alt="Restaurant Logo"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md relative -top-14"
          />

          {/* Info */}
          <div className="flex-1 relative -top-10 md:-top-0">
            <h2 className="text-2xl font-bold text-gray-800 uppercase mb-2">
              Elratb Elshamy
            </h2>
            <p className="text-sm text-gray-600">
              Grill · Made in Egypt ·{" "}
              <span className="text-green-600 font-medium">Support Gaza</span> ·
              <span className="text-[#F1C40F]"> ★★★★★</span>{" "}
              <span className="text-sm text-gray-700">(4.7 | 136073)</span>
            </p>
            <p className="text-sm text-gray-600">
              📍 38 New Club St, in Front of The Satellite{" "}
              <a href="#" className="text-[#C0392B] underline">
                Taqseem Laselky, Maadi
              </a>
            </p>
          </div>

          {/* Phone Icon */}
          <div className="p-3 hidden md:block bg-red-100 rounded-full shadow-md cursor-pointer">
            <Phone className="text-[#C0392B]" />
          </div>
        </motion.div>

        <hr className="" />
      </div>
      {/* Sidebar */}
      <div className="flex min-h-screen ">
        {/* Toggle Button (Mobile Only) */}
        <button
          id="toggle-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 right-12 z-50 p-1 bg-white rounded-md shadow-md md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="w-5 h-5 text-[#C0392B]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex-1 ">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
