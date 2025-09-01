import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

export default function Navbar() {
  const { cartItems } = useContext(CartContext)!;

  return (
    <nav className="w-full pr-6 md:pr-20 px-6 py-4 flex justify-between items-center shadow-md fixed top-0 bg-white z-50 h-16">
      {/* Logo */}
      <Link to="/" className="font-bold text-xl text-[#C0392B] uppercase">
        Elratb Elshamy
      </Link>

      {/* Search */}
      {/* <input
        type="text"
        placeholder="Search for restaurants or meals"
        className="w-1/2 hidden md:block px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
      /> */}
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
