import Logo from "../assets/images/Logo.png";

function Navbar() {
  const navLinks = ["Products", "Research", "Blogs", "About"];

  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-[#F8EAE0]">
      {/* Logo Section */}
      <div className="cursor-pointer hover:opacity-80 transition-opacity">
        <a href={`/`}><img src={Logo} alt="Logo" className="w-32" /></a>
        
      </div>

      {/* Navigation Links */}
      <div className="flex gap-10 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`${link.toLowerCase()}`}
            className="relative text-gray-700 hover:text-black transition-colors duration-200 group"
          >
            {link}
            {/* Animated Underline Effect */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-sm">
        Try Orchestrator
      </button>
    </nav>
  );
}

export default Navbar;