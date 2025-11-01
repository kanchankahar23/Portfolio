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

        <ul className="hidden md:flex gap-12 text-lg">
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">Home</li>
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">About Me</li>
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">Skills</li>
          <li className="hover:text-pink-400 transition-all duration-300 cursor-pointer">Projects</li>
        
        </ul>

        <div className="hidden md:block">
       <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
   
        </div>
      </div>

  
      {menuOpen && (
        <ul className="flex flex-col items-center mt-4 gap-4 text-lg md:hidden">
          <li className="hover:text-pink-400 cursor-pointer">Home</li>
          <li className="hover:text-pink-400 cursor-pointer">About Me</li>
          <li className="hover:text-pink-400 cursor-pointer">Skills</li>
          <li className="hover:text-pink-400 cursor-pointer">Projects</li>
            <li className="hover:text-pink-400 cursor-pointer">Contact us</li>
         
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
