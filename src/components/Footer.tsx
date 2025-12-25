import Logo from "../assets/images/Logo.png";

function Footer() {
  const footerSections = [
    {
      title: "Connect",
      links: ["X / Twitter", "Instagram", "LinkedIn", "YouTube"],
    },
    {
      title: "Resources",
      links: ["Help Center", "Pricing", "Blogs", "Community"],
    },
    {
      title: "Company",
      links: ["About us", "Careers", "Terms and Conditions", "Your Privacy Rights"],
    },
  ];

  return (
    <footer className="border-t border-black/10 px-12 py-16 text-[13px] bg-[#F8EAE0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
        
        {/* Logo Column */}
        <div className="md:col-span-1">
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-32 mb-4 cursor-pointer hover:opacity-70 transition-opacity" 
          />
        </div>

        {/* Dynamic Sections with Underline Interaction */}
        {footerSections.map((section) => (
          <div key={section.title} className="flex flex-col space-y-3">
            <h4 className="font-bold text-black mb-1">{section.title}</h4>
            {section.links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative text-gray-600 hover:text-black hover:translate-x-1 transition-all duration-300 ease-in-out w-fit"
              >
                {link}
                {/* The Sliding Underline */}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        ))}

        {/* Contact Details */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold text-black mb-1">Contact Details</h4>
          <p className="text-gray-600">Anna University, Chennai</p>
          
          {/* Email with interaction */}
          <a 
            href="mailto:sriram@skypler.in" 
            className="group relative text-gray-600 hover:text-black w-fit transition-all duration-300"
          >
            sriram@skypler.in
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Phone with interaction */}
          <a 
            href="tel:+919596959214" 
            className="group relative text-gray-600 hover:text-black w-fit transition-all duration-300"
          >
            +91 9596959214
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/5 text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 Orchestrator AI. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-black cursor-pointer transition-colors">Global</span>
          <span className="hover:text-black cursor-pointer transition-colors">English (US)</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;