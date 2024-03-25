import React, { useState } from 'react';
import logo1 from "../assets/2nd.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 right-0 h-screen w-screen bg-white opacity-100 z-50"
          onClick={toggleMenu}
        >
          <div className="right-[-3rem] top-[7rem] absolute  transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 opacity-100">
            <ul className='text-black'>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SAVANNAH REGION</li>
              <li>PROJECTS</li>
              <li>VOLUNTEER</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      )}

      <div className="flex flex-row items-center justify-between py-[12px] bg-white px-4">
        {/* Logo */}
        <div>
          <img src={logo1} alt="Logo" className="w-32" />
        </div>

        {/* Hamburger Menu Icon (visible on mobile) */}
        <div className="block md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links (visible on desktop) */}
        <div className="hidden md:block">
          <ul className="flex flex-row items-center space-x-4 text-black text-sm font-[400] cursor-pointer">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SAVANNAH REGION</li>
            <li>PROJECTS</li>
            <li>VOLUNTEER</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
