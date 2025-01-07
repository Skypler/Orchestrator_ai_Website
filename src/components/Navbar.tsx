import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className=" shadow-md">
      <div className="container mx-auto flex justify-between items-center py-6 p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className=" jura-header">
            Orchestrator AI
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 jura-body">
          <li>
            <a href="#" className="hover:text-yellow-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-200">
              Get In Touch!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
