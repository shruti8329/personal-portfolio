import { useState } from "react";
// import logo from "../assets/logo"; // Uncomment and fix the path if you have a logo file
import { NAVIGATION_LINKS } from "../constants";

// const NAVIGATION_LINKS = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Contact", href: "#contact" },
// ];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        <div className="mx-auto hidden max-w-xl items-center justify-center rounded-lg border border-stone-50/30 bg-black bg-opacity-70 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="#">
                {/* Uncomment the next line if using a logo */}
                {/* <img src={logo} width={150} alt="Logo" /> */}
                <span className="text-yellow-400 text-xl font-bold h-12 w-12">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-programming-company-logo-template_23-2148807613.jpg?semt=ais_hybrid"
                    height={140}
                    width={140}
                    alt=""
                  />
                </span>
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-yellow-400"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile menu (if needed) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white bg-yellow-400 rounded-md"
          >
            Menu
          </button>
          {isMobileMenuOpen && (
            <div className=" ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md ">
              <ul className="flex flex-col gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="block w-full text-lg"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
