// src/components/DashboardLayout.jsx
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiCheckSquare,
  FiFolder,
  FiLogOut,
  FiMenu,
  FiChevronDown,
  FiBell,
  FiX,
} from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(
    () => window.innerWidth >= 768,
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: "/dashboard", icon: <FiHome size={20} />, label: "Dashboard" },
    { to: "/projects", icon: <FiFolder size={20} />, label: "Projects" },
    { to: "/tasks", icon: <FiCheckSquare size={20} />, label: "Tasks" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-30
          bg-slate-800 text-white flex flex-col
          transition-all duration-300 overflow-hidden
          ${sidebarOpen ? "w-64" : "w-0 md:w-20"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-slate-700 min-w-max">
          <span className="text-xl font-bold">
            {sidebarOpen ? (
              <>
                Project<span className="text-blue-400">Flow</span>
              </>
            ) : (
              <span className="text-blue-400">PF</span>
            )}
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-slate-400 hover:text-white ml-4"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {!sidebarOpen ? null : (
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-3 mb-3">
              Main Menu
            </p>
          )}

          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }
                ${!sidebarOpen ? "justify-center" : ""}`
              }
            >
              {item.icon}
              {sidebarOpen && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
          {/* Left: Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg transition"
            >
              <FiMenu size={22} />
            </button>
            <h2 className="text-lg font-bold text-gray-800 hidden sm:block">
              Project Management App
            </h2>
          </div>

          {/* Right: Notifications + User */}
          <div className="flex items-center gap-2">
            {/* Notification Bell */}
            <button className="relative p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition">
              <FiBell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100 transition"
              >
                <img
                  src="https://i.pravatar.cc/40"
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border-2 border-gray-200"
                />
                <span className="hidden md:flex items-center text-gray-700 font-medium gap-1 text-sm">
                  John Doe
                  <FiChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100 mb-1">
                    <p className="text-sm font-semibold text-gray-800">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-500">john@example.com</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2 transition"
                  >
                    <FiLogOut size={15} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
