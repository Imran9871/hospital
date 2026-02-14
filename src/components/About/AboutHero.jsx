import React, { useState, useEffect } from "react";

const AboutHero = () => {
  const messages = ["Who We Are", "What We Do", "Our Mission", "Why Choose Us"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const speed = 100;
    if (char < messages[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + messages[index][char]);
        setChar(char + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setChar(0);
        setIndex((prev) => (prev + 1) % messages.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [char, index]);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* 1. BACKGROUND IMAGE - Using object-cover to fill the space without gaps */}
      <img
        src="/Logo-1.jpeg"
        alt="Ambulance Service"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* 2. GRADIENT OVERLAY - Better than a solid color; makes text pop while keeping image clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10"></div>

      {/* 3. CONTENT - Centered and spaced properly */}
      <div className="relative z-20 max-w-5xl px-6 text-center text-white flex flex-col items-center">
        {/* Title Area */}
        <div className="mb-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase drop-shadow-2xl">
            {text}
            <span className="animate-pulse ml-1 text-red-600">|</span>
          </h1>
        </div>

        {/* Description - Added bg-black/30 for readability over the busy image */}
        <p className="max-w-3xl text-lg sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed backdrop-blur-sm bg-black/20 p-4 rounded-xl">
          We are dedicated healthcare professionals providing fast, reliable,
          and compassionate ambulance services 24/7. Our mission is to save
          lives and deliver quality care.
        </p>

        {/* Button */}
        <button
          className="mt-8 px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)]"
          onClick={() => window.location.href = "tel:+919093065446"}
        >
          Contact Us Now
        </button>
      </div>
    </section>
  );
};

export default AboutHero;
