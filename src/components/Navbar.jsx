import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Navbar = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Profile", to: "/profile" },
    { name: "Attendance", to: "/attendance" },
    { name: "Calendar", to: "/calendar" },
    { name: "Reports", to: "/reports" },
    { name: "Feedback", to: "/feedback" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg sticky top-0 z-50 mb-3">
      <div className="flex justify-between items-center px-6 py-3 max-w-full">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300">
          EMS Portal
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="hover:text-yellow-300 transition duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* User & Logout */}
        <div className="hidden md:flex items-center gap-4">
          <span className="flex items-center gap-1">
            <FaUserCircle className="text-xl" />
            <span className="capitalize">{user?.firstname || "User"}</span>
          </span>
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-blue-600 px-6 pb-4 space-y-2 animate-slide-down">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-2 border-b border-blue-400 hover:text-yellow-300"
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center justify-between pt-4">
            <span className="flex items-center gap-1">
              <FaUserCircle className="text-lg" />
              <span className="capitalize">{user?.firstname || "User"}</span>
            </span>
            <button
              onClick={() => {
                setOpen(false);
                onLogout();
              }}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
