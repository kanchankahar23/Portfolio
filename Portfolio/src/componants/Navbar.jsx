import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-10 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif text-pink-400">KK</h1>

        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="text-3xl">☰</span>
        </div>

        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">Home</li>
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">About Me</li>
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">Services</li>
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">Portfolio</li>
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">Contact</li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300">
            Connect with Me
          </button>
        </div>
      </div>

  
      {menuOpen && (
        <ul className="flex flex-col items-center mt-4 gap-4 text-lg md:hidden">
          <li className="hover:text-pink-400 cursor-pointer">Home</li>
          <li className="hover:text-pink-400 cursor-pointer">About Me</li>
          <li className="hover:text-pink-400 cursor-pointer">Skills</li>
          <li className="hover:text-pink-400 cursor-pointer">Projects</li>
          <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-semibold">
            Connect with Me
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
