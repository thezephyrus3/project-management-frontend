import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-slate-800 text-white shadow-lg">
        <div className="text-xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          <Link to="/login" className="hover:text-blue-400 transition">
            Login
          </Link>

          <Link to="/register" className="hover:text-blue-400 transition">
            Register
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-700 text-white">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              to="/"
              className="hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/login"
              className="hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/login"
              className="hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </nav>
        </div>
      )}

      <Outlet />
    </>
  );
}

export default Navigation;
