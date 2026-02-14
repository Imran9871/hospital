import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import colors from "../../Styles/theme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll to toggle transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
    {/* Navbar */}
      <nav
        className={`fixed top-8 w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "py-2 shadow-xl backdrop-blur-md"
            : "py-6 bg-blur-smoke-lights"
        }`}
        style={{
          // At top, bg is transparent. On scroll, it takes the theme background with slight opacity
          backgroundColor: scrolled
            ? `${colors.neutral.background}F2`
            : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* --- LOGO SECTION --- */}
            <div className="flex-shrink-0 relative z-10">
              <Link to="/" className="flex items-center group">
                <div
                  className={`transition-all duration-500 transform ${
                    scrolled
                      ? "h-14 w-14 shadow-md"
                      : "h-20 w-20 lg:h-24 lg:w-24 shadow-2xl"
                  } bg-white rounded-2xl flex items-center justify-center p-1.5 group-hover:rotate-3`}
                >
                  <img
                    className="h-full w-full object-contain rounded-xl"
                    src="./mainLOGO.jpeg"
                    alt="Hospital Logo"
                  />
                </div>

                <div className="ml-4">
                  <span
                    className={`font-black tracking-tighter block transition-all duration-500 ${
                      scrolled ? "text-xl" : "text-2xl lg:text-3xl"
                    }`}
                    style={{
                      // Text changes color based on scroll if needed,
                      // but usually stays theme-consistent
                      color: scrolled ? colors.neutral.text : "#FFFFFF", // White text on transparent, theme text on scroll
                    }}
                  >
                    CM<span style={{ color: colors.primary.accent }}>DE</span>
                  </span>
                  {!scrolled && (
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">
                      Medical Excellence
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* --- DESKTOP LINKS --- */}
            <div className="hidden md:flex items-center space-x-10">
              <div className="flex space-x-8">
                {links.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="relative py-2 font-bold text-sm lg:text-base transition-all duration-300"
                      style={{
                        color: scrolled
                          ? isActive
                            ? colors.primary.accent
                            : colors.neutral.text
                          : "#FFFFFF", // All links white when transparent for readability
                      }}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-1 rounded-full transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                        style={{ backgroundColor: colors.primary.accent }}
                      />
                    </Link>
                  );
                })}
              </div>

              <Link
                to="/contact" // Change to actual appointment path if exists
                className="px-8 py-3 rounded-full text-white font-bold shadow-lg transition-all hover:scale-105 hover:brightness-110 active:scale-95"
                style={{ backgroundColor: colors.primary.accent }}
              >
                GET QUOTE
              </Link>
            </div>

            {/* --- MOBILE TOGGLE --- */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl"
                style={{ color: scrolled ? colors.primary.accent : "#FFFFFF" }}
              >
                <svg
                  className="h-9 w-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE DROPDOWN --- */}
        <div
          className={`md:hidden absolute top-0 left-0 w-full h-screen transition-all duration-500 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
          style={{ backgroundColor: colors.neutral.background }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-4xl"
              style={{ color: colors.primary.accent }}
            >
              &times;
            </button>
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-black"
                style={{
                  color:
                    location.pathname === link.path
                      ? colors.primary.accent
                      : colors.neutral.text,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* NOTE: No spacer div here because you want your Hero content to start at the top of the screen! */}
    </>
  );
};

export default Navbar;
