// // src/components/HeroService/HeroService.jsx
// import React, { useState, useEffect } from "react";

// const HeroService = () => {
//   const messages = [
//     "Emergency Ambulance Services",
//     "Medical Assistance On Time",
//     "24/7 Life Support"
//   ];
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messageIndex, setMessageIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const typingSpeed = 100; // ms per character

//     if (charIndex < messages[messageIndex].length) {
//       const timeout = setTimeout(() => {
//         setCurrentMessage((prev) => prev + messages[messageIndex][charIndex]);
//         setCharIndex(charIndex + 1);
//       }, typingSpeed);
//       return () => clearTimeout(timeout);
//     } else {
//       // Wait and then erase
//       const timeout = setTimeout(() => {
//         setCurrentMessage("");
//         setCharIndex(0);
//         setMessageIndex((prev) => (prev + 1) % messages.length);
//       }, 2000);
//       return () => clearTimeout(timeout);
//     }
//   }, [charIndex, messageIndex, messages]);

//   return (
//     <section
//       className="w-full flex items-center justify-center text-center text-white relative"
//       style={{
//         backgroundImage: `url("/SERVICE.jpeg")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "calc(100vh - 80px)",
//       }}
//     >
//       {/* Full section dark overlay */}
//       <div className="absolute inset-0 bg-black/60 z-0"></div>

//       {/* Text content */}
//       <div className="relative z-10 p-6 sm:p-12 rounded-md max-w-3xl mx-4">
//         <h1 className="text-3xl sm:text-5xl font-bold mb-4">{currentMessage}</h1>
//         <p className="text-md sm:text-xl">
//           We ensure fast and reliable medical services whenever you need them.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroService;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroService = () => {
  const messages = [
    "Emergency Ambulance Services",
    "Medical Assistance On Time",
    "24/7 Life Support",
  ];

  const [index, setIndex] = useState(0);

  // Cycle through messages every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center text-center text-white"
      style={{
        // Using min-h-screen with a fallback for mobile toolbars
        minHeight: "calc(100vh - 80px)",
      }}
    >
      {/* Optimized Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-1000 scale-105 hover:scale-100"
        style={{ backgroundImage: `url("/SERVICE.jpeg")` }}
      />

      {/* Modern Gradient Overlay (adds depth compared to flat black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-12 sm:px-12 max-w-4xl w-full">
        <div className="min-h-[120px] sm:min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={messages[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              {messages[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg sm:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed"
        >
          We ensure fast and reliable medical services{" "}
          <br className="hidden sm:block" />
          whenever you need them.
        </motion.p>

        {/* Optional Modern CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <button
            onClick={() => {
              window.location.href = "tel:+918910758266";
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
          >
            Call Emergency Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroService;
