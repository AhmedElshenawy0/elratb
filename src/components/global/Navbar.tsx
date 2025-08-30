export default function Navbar() {
  return (
    <nav className="w-full pr-6 md:pr-20 px-6 py-4 flex justify-between items-center shadow-md fixed top-0 bg-white z-50 h-16">
      {/* Logo */}
      <div className="font-bold text-xl text-[#C0392B] uppercase">
        Elratb Elshamy
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search for restaurants or meals"
        className="w-1/2 hidden md:block px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C0392B]"
      />
    </nav>
  );
}
