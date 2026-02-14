// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import colors from "../../Styles/theme";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   // Inline CSS for the slide-down animation
//   const animationStyles = `
//     @keyframes fadeSlide {
//       from { opacity: 0; transform: translateY(-10px); }
//       to { opacity: 1; transform: translateY(0); }
//     }
//   `;

//   const renderLink = (link, isMobile = false, index = 0) => {
//     const isActive = location.pathname === link.path;

//     return (
//       <Link
//         key={link.name}
//         to={link.path}
//         onClick={() => isMobile && setIsOpen(false)}
//         className={`relative px-3 py-2 ${
//           isMobile ? "block w-full text-left text-lg font-medium" : "inline-block"
//         } group`}
//         style={{
//           // This ensures the text is actually visible against the background
//           color: isActive ? colors.primary.accent : colors.neutral.text,
//           transition: "color 0.3s ease",
//           ...(isMobile && {
//             opacity: 0,
//             animation: `fadeSlide 0.4s ease forwards`,
//             animationDelay: `${index * 0.1}s`,
//           }),
//         }}
//       >
//         <span className="relative z-10 transition-colors duration-300">
//           {link.name}
//         </span>

//         {/* Underline effect */}
//         <span
//           className="absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-out"
//           style={{
//             width: isActive ? "100%" : "0%",
//             backgroundColor: colors.primary.accent,
//           }}
//         ></span>
//       </Link>
//     );
//   };

//   return (
//     <>
//       <style>{animationStyles}</style>
//       <nav
//         className="fixed top-0 w-full z-50 shadow-md transition-colors duration-300"
//         style={{
//             backgroundColor: colors.neutral.background,
//             borderBottom: `1px solid ${colors.neutral.card}20` // Subtle border
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//           <div className="flex justify-between h-16 items-center">
//             {/* Logo */}
//             <div className="flex-shrink-0 flex items-center">
//               <Link to="/">
//                 <img
//                   className="h-12 w-auto rounded-md"
//                   src="./mainLOGO.jpeg"
//                   alt="Hospital Logo"
//                 />
//               </Link>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               {links.map((link) => renderLink(link, false))}
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="flex items-center md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="p-2 rounded-md transition-transform active:scale-90"
//                 style={{ color: colors.primary.accent }}
//               >
//                 <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   {isOpen ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         <div
//           className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
//             isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//           style={{
//             backgroundColor: colors.neutral.background, // Changed to background to ensure text contrast
//             borderTop: `1px solid ${colors.neutral.card}50`
//           }}
//         >
//           <div className="px-6 pt-4 pb-6 space-y-4">
//             {links.map((link, idx) => renderLink(link, true, idx))}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import colors from "../../Styles/theme";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <>
//       <style>{`
//         @keyframes fadeSlide {
//           from { opacity: 0; transform: translateX(-20px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//       `}</style>

//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//           scrolled ? "py-1 shadow-xl" : "py-4"
//         }`}
//         style={{
//           backgroundColor: scrolled ? `${colors.neutral.background}F2` : colors.neutral.background,
//           backdropFilter: "blur(12px)",
//           borderBottom: `1px solid ${colors.neutral.card}20`
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
//           <div className="flex justify-between items-center h-20"> {/* Increased container height */}

//             {/* --- BIGGER LOGO SECTION --- */}
//             <div className="flex-shrink-0 relative z-10">
//               <Link to="/" className="flex items-center group">
//                 <div
//                   className={`transition-all duration-500 ease-in-out transform ${
//                     scrolled ? "h-16 w-16" : "h-20 w-20 lg:h-24 lg:w-24"
//                   } bg-white rounded-xl shadow-lg border-2 border-white flex items-center justify-center p-1 group-hover:scale-105`}
//                 >
//                   <img
//                     className="h-full w-full object-contain rounded-lg"
//                     src="./mainLOGO.jpeg"
//                     alt="Hospital Logo"
//                   />
//                 </div>

//                 {/* Brand Text - Scaling with Logo */}
//                 <div className="ml-4 flex flex-col justify-center">
//                   <span
//                     className={`font-black tracking-tight leading-none transition-all duration-500 ${
//                       scrolled ? "text-xl" : "text-2xl lg:text-3xl"
//                     }`}
//                     style={{ color: colors.neutral.text }}
//                   >
//                     HEALTH<span style={{ color: colors.primary.accent }}>CARE</span>
//                   </span>
//                   {!scrolled && (
//                     <span className="text-[10px] uppercase tracking-[0.2em] font-bold mt-1 opacity-60">
//                       Medical Excellence
//                     </span>
//                   )}
//                 </div>
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-10">
//               <div className="flex space-x-8">
//                 {links.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className="relative py-2 font-bold text-sm lg:text-base transition-colors hover:opacity-70"
//                     style={{ color: location.pathname === link.path ? colors.primary.accent : colors.neutral.text }}
//                   >
//                     {link.name}
//                     {location.pathname === link.path && (
//                       <span className="absolute bottom-0 left-0 w-full h-1 rounded-full" style={{ backgroundColor: colors.primary.accent }} />
//                     )}
//                   </Link>
//                 ))}
//               </div>

//               <Link
//                 to="/appointments"
//                 className="px-8 py-3 rounded-xl text-white font-bold shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95"
//                 style={{ backgroundColor: colors.primary.accent }}
//               >
//                 APPOINTMENT
//               </Link>
//             </div>

//             {/* Mobile Toggle */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="p-3 rounded-xl shadow-sm"
//                 style={{ color: colors.primary.accent, backgroundColor: `${colors.primary.accent}10` }}
//               >
//                 <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   {isOpen ? (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
//                   ) : (
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         <div
//           className={`md:hidden absolute top-full left-0 w-full shadow-2xl transition-all duration-500 ${
//             isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//           }`}
//           style={{ backgroundColor: colors.neutral.background }}
//         >
//           <div className="p-8 space-y-6 flex flex-col items-center">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className="text-2xl font-bold"
//                 style={{ color: location.pathname === link.path ? colors.primary.accent : colors.neutral.text }}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Link
//               to="/appointments"
//               className="w-full py-4 rounded-2xl text-center text-white font-bold text-xl"
//               style={{ backgroundColor: colors.primary.accent }}
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>
//       </nav>
//       {/* Dynamic Spacer */}
//       <div className="h-24 lg:h-32"></div>
//     </>
//   );
// };

// export default Navbar;

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
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
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
