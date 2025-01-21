import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-black font-jura shadow-md relative">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="Company Logo" className="w-10 h-auto mr-3" />
        <NavLink to="/">
          <span className="text-2xl font-bold">Orchestrator AI</span>
        </NavLink>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 md:flex space-y-4 md:space-y-0 space-x-0 md:space-x-6 z-10`}
      >
        <li>
          <NavLink
            to="/features"
            className="block md:inline hover:text-blue-500 transition-colors"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className="block md:inline hover:text-blue-500 transition-colors"
          >
            Pricing
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
