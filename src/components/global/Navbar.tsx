import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext)!;

  return (
    <nav className="w-full pr-6 md:pr-20 px-6 py-4 flex justify-between items-center shadow-md fixed top-0 bg-transparent z-50 h-16">
      {/* Logo */}
      <Link
        to="/"
        className="font-bold text-xl text-[#ffffff] text-shadow-2xs uppercase flex items-center gap-4"
      >
        <img
          src="/images/logo.jpg"
          alt=""
          className="rounded-full h-12 w-12 object-cover"
        />
        Elratb Elshamy
      </Link>

      <Link to="/cart" className="relative top-0 -right-2 z-50">
        <BsCart4 size={25} color="green" />
        {cartItems.length >= 1 ? (
          <span className="absolute h-4 w-4 -top-3 flex justify-center items-center left-1 text-[10px] rounded-full bg-red-500 text-white">
            {cartItems.length}
          </span>
        ) : (
          ""
        )}
      </Link>
    </nav>
  );
}
