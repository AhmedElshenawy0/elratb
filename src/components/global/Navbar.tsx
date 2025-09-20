import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";
  return (
    <nav
      className={`w-full pr-6 md:pr-20 px-6 py-4 flex justify-between items-center absolute top-0 z-50 h-16 transition-colors duration-300 ${
        isCartPage ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {" "}
      {/* Logo */}
      <Link
        to="/"
        className={`font-bold text-xl text-[#ffffff] text-shadow-2xs uppercase flex items-center gap-4  ${
          isCartPage ? "text-black" : "text-[#ffffff]"
        }`}
      >
        <img
          src="/images/logo.jpg"
          alt=""
          className="rounded-full h-12 w-12 object-cover"
        />
        Elratb Elshamy
      </Link>
    </nav>
  );
}
