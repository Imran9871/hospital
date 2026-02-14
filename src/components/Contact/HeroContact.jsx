// // src/components/HeroContact/HeroContact.jsx
// import React, { useState, useEffect } from "react";

// const HeroContact = () => {
//   const messages = ["Get in Touch", "We Are Here For You", "24/7 Ambulance Support"];
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
//         backgroundImage: `url("/TRUST.jpeg")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "calc(100vh - 80px)", // adjust 80px as per your navbar height
//       }}
//     >
//       <div className="bg-black/40 p-6 sm:p-12 rounded-md max-w-3xl mx-4">
//         <h1 className="text-3xl sm:text-5xl font-bold mb-4">{currentMessage}</h1>
//         <p className="text-md sm:text-xl">We are ready to assist you anytime, anywhere.</p>
//       </div>
//     </section>
//   );
// };

// export default HeroContact;



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroContact = () => {
  const messages = ["Get in Touch", "We Are Here For You", "24/7 Ambulance Support"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      {/* 1. The Background Layer 
          We use bg-cover but ensure background-position is 'top' 
          to keep that "COMPASSION..." text visible.
      */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-top sm:bg-center transition-all duration-700"
        style={{ 
          backgroundImage: `url("/Gemini_Generated_Image_ch0hgoch0hgoch0h.png")`,
          // This ensures the image doesn't look squashed on ultra-wide monitors
          backgroundSize: 'cover' 
        }}
      />

      {/* 2. The Gradient Overlay 
          Added a stronger black gradient at the top to fix the Navbar clash 
      */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/70" />

      {/* 3. Content Container
          Added pt-24 (padding-top) to push your animated text down 
          so it doesn't cover the crew or the text in the image.
      */}
      <div className="relative z-20 flex-grow flex flex-col items-center justify-center text-center px-6">
        <div className="min-h-[100px] mt-20 sm:mt-0">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-2xl"
            >
              {messages[index]}
            </motion.h1>
          </AnimatePresence>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg sm:text-2xl text-gray-200 font-medium max-w-2xl mx-auto"
          >
            We are ready to assist you anytime, anywhere.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;