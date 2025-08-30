import { useEffect } from "react";

export default function Sidebar({
  open,
  onClose,
}: {
  open: any;
  onClose: any;
}) {
  // Updated categories based on your meals
  const categories = ["الشاورما", "البرجر", "وجبات الفراخ", "وجبات عائلية"];

  // Close sidebar on outside click
  useEffect(() => {
    const handleClick = (e: any) => {
      if (
        open &&
        !e.target.closest("#sidebar") &&
        !e.target.closest("#toggle-btn")
      ) {
        onClose();
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [open, onClose]);

  return (
    <aside
      id="sidebar"
      className={`
        w-72 p-5 bg-white border-l shadow-md overflow-y-auto z-40
        h-[calc(100vh-80px)]
        fixed top-20 right-0 transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        md:sticky md:top-20 md:translate-x-0 md:block
      `}
    >
      {/* Restaurant Image */}
      <img
        src="https://images.zyda.co/cdn-cgi/image/width=640,quality=75,f=auto,metadata=none/photos/restaurants/photo_urls/5346/original/IMG_9879.jpeg"
        alt="Restaurant"
        className="w-full h-44 object-cover rounded-xl mb-4"
      />

      {/* Info */}
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-gray-800">
          {" "}
          الراتب الشامي
        </h2>
        <p className="text-sm text-gray-500 mt-1">أكلات شرقية • مصرية</p>
        <div className="text-[#F1C40F] mt-2 text-sm">★★★★☆ (4.2)</div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">المنيو</h3>
        <ul className="space-y-3">
          {categories.map((item) => (
            <li
              key={item}
              className="text-gray-600 hover:text-[#C0392B] transition font-medium cursor-pointer"
              // Optional: Add anchor link if needed
              onClick={() => {
                const el = document.getElementById(item);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  onClose(); // Close sidebar on mobile after click
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
