import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Beranda", to: "/" },
    { name: "Data", to: "/data" },
    { name: "Kelembagaan", to: "/kl" },
    { name: "Capaian", to: "/capaian" },
    { name: "Berita & Artikel", to: "/berita" },
    { name: "Kontak", to: "/kontak" },
  ];

  return (
    <header className="w-full bg-[#FFF6EC] shadow">
      <div className="container mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-12 rounded-md" />
          <span className="text-xl font-extrabold tracking-wide text-gray-800">
            PAUD–HI
          </span>
        </Link>

        {/* Toggle Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="hover:text-orange-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Login */}
        <div className="hidden md:flex space-x-3">
          <Link
            to="/login"
            className="px-4 py-1.5 rounded-full bg-white text-gray-800 font-semibold text-sm shadow hover:shadow-md transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1.5 rounded-full bg-orange-500 text-white font-semibold text-sm shadow hover:bg-orange-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden px-6 pb-4 bg-[#FFF6EC] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
        }`}
      >
        <div className="space-y-2 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="block text-gray-800 hover:text-orange-600 font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-4 flex flex-col space-y-2">
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-white text-gray-800 font-semibold text-sm shadow hover:shadow-md transition text-center"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded bg-orange-500 text-white font-semibold text-sm shadow hover:bg-orange-600 transition text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
