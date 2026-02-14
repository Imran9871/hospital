// // src/components/ImageSlider/ImageSlider.jsx
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     image: "HeroIMG1.jpeg",
//     title: "Fast Emergency Response",
//     subtitle: "24/7 Ambulance & Hospital Services",
//   },
//   {
//     image: "HeroIMG2.jpeg",
//     title: "Advanced Medical Care",
//     subtitle: "Trust & Safety in Every Ride",
//   },
//   {
//     image: "HeroIMG3.jpeg",
//     title: "Nationwide Coverage",
//     subtitle: "Connecting Cities & Emergencies",
//   },
//   {
//     image: "HeroIMG4.jpeg",
//     title: "Safe & Secure Ambulances",
//     subtitle: "Your Health, Our Responsibility",
//   },
// ];

// const ImageSlider = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden">
//       <AnimatePresence>
//         {slides.map((slide, index) =>
//           index === current ? (
//             <motion.div
//               key={index}
//               className="absolute w-full h-full top-0 left-0"
//               initial={{ opacity: 0, scale: 1.05 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1.05 }}
//               transition={{ duration: 2 }}
//             >
//               {/* Image */}
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/30 flex items-center">
//                 {/* Container with left/right margins */}
//                 <div className="container mx-auto px-6 md:px-16">
//                   {current === 0 ? (
//                     <motion.div
//                       className="text-white max-w-xl space-y-6"
//                       initial={{ x: -50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       exit={{ x: -50, opacity: 0 }}
//                       transition={{ duration: 1 }}
//                     >
//                       <motion.h2
//                         className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
//                         initial={{ x: -50, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.2, duration: 1 }}
//                       >
//                         {slide.title}
//                       </motion.h2>

//                       <motion.p
//                         className="text-xl sm:text-2xl md:text-3xl opacity-90"
//                         initial={{ x: -50, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.5, duration: 1 }}
//                       >
//                         {slide.subtitle}
//                       </motion.p>

//                       <motion.button
//                         style={{ backgroundColor: colors.primary.accent }}
//                         className="px-8 py-4 rounded-md text-xl font-bold hover:scale-110 transition-transform duration-300"
//                         initial={{ x: -50, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.8, duration: 1 }}
//                       >
//                         Contact Us
//                       </motion.button>
//                     </motion.div>
//                   ) : (
//                     <div className="text-white max-w-xl space-y-6">
//                       <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
//                         {slide.title}
//                       </h2>
//                       <p className="text-xl sm:text-2xl md:text-3xl opacity-90">
//                         {slide.subtitle}
//                       </p>
//                       <button
//                         style={{ backgroundColor: colors.primary.accent }}
//                         className="px-8 py-4 rounded-md text-xl font-bold hover:scale-110 transition-transform duration-300"
//                       >
//                         Contact Us
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ) : null
//         )}
//       </AnimatePresence>

//       {/* Left-side Vertical Indicators */}
//       <div className="hidden md:flex flex-col absolute left-4 top-1/2 -translate-y-1/2 gap-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={`w-2 h-6 rounded-md transition-all duration-500`}
//             style={{
//               backgroundColor: current === index ? colors.primary.accent : "rgba(255,255,255,0.5)",
//               transform: current === index ? "scaleY(1.5)" : "scaleY(1)",
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import colors from "../../Styles/theme";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "HeroIMG1.jpeg",
    title: "Fast Emergency Response",
    subtitle: "24/7 Ambulance & Hospital Services",
  },
  {
    image: "HeroIMG2.jpeg",
    title: "Advanced Medical Care",
    subtitle: "Trust & Safety in Every Ride",
  },
  {
    image: "HeroIMG3.jpeg",
    title: "Nationwide Coverage",
    subtitle: "Connecting Cities & Emergencies",
  },
  {
    image: "HeroIMG4.jpeg",
    title: "Safe & Secure Ambulances",
    subtitle: "Your Health, Our Responsibility",
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* --- Image Handling --- */}
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            // initial/animate adds a subtle "Ken Burns" zoom effect for a premium feel
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="w-full h-full object-cover object-center md:object-[center_30%]"
          />

          {/* --- Gradient Overlay (Better than just a flat color) --- */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:bg-black/40" />

          {/* --- Responsive Content --- */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 sm:px-12 lg:px-20 pt-20">
              <motion.div
                className="max-w-4xl text-left"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {/* Title: Responsive sizes from mobile to desktop */}
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] mb-6 drop-shadow-lg">
                  {slides[current].title.split(" ").map((word, i) => (
                    <span key={i}>
                      {i === 1 ? (
                        <span style={{ color: colors.primary.accent }}>
                          {word}{" "}
                        </span>
                      ) : (
                        word + " "
                      )}
                    </span>
                  ))}
                </h1>

                <p className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl mb-8 font-medium leading-relaxed">
                  {slides[current].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    style={{ backgroundColor: colors.primary.accent }}
                    className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl hover:brightness-110 hover:scale-105 transition-all"
                  >
                    <a href="tel:+919093065446" className="block">
                      Contact Us Now
                    </a>
                  </button>
                  <button
                    className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all"
                    onClick={() => navigate("/services")}
                  >
                    View Services
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* --- Responsive Bottom Indicators --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:right-10 md:translate-x-0 flex md:flex-col gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 rounded-full ${
              current === index ? "w-12 md:h-12" : "w-3 md:h-3"
            } h-3 md:w-3`}
            style={{
              backgroundColor:
                current === index
                  ? colors.primary.accent
                  : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
