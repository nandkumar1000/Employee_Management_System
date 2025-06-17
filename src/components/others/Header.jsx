import React from 'react';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex flex-col mb-5 sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-gradient-to-r from-[#eef2ff] via-[#e0e7ff] to-[#f0f4ff] shadow-lg rounded-2xl">
      <div>
        <p className="text-base sm:text-lg text-gray-600 font-medium">Welcome back,</p>
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent leading-tight">
          Nand Kumar Sahu
        </h1>
        <p className="text-sm text-gray-500 mt-1">Employee Management System</p>
      </div>

      <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-md hover:shadow-lg">
        <FiLogOut className="w-5 h-5" />
        Logout
      </button>
    </header>
  );
};

export default Header;
