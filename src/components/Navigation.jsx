import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="flex items-center justify-between p-3.5 bg-slate-800 text-white shadow-lg">
        <div className="text-xl font-bold">Logo</div>

        <nav className="flex gap-6">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition hover:cursor-pointer">
          Click me
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
