import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabContent = {
    mission:
      "At CMDE, our mission is to deliver rapid, reliable, and clinically advanced emergency medical response whenever and wherever it is needed. Our highly trained paramedics and medical professionals operate 24/7 to ensure every patient receives immediate, life-saving care with compassion, precision, and professionalism.",
    vision:
      "Our vision is to become the global benchmark for rapid-response healthcare. We aim to integrate advanced AI-driven logistics with compassionate clinical care to minimize response times and maximize survival rates in every community we serve.",
    history:
      "Founded in 2017, CMDE Ambulance Services began with a clear vision — to provide fast, reliable, and advanced emergency medical response to those in critical need. What started as a dedicated emergency unit has steadily grown into a trusted ambulance service equipped with modern life-support systems and a highly trained medical team. Since our inception, we have focused on clinical excellence, rapid response, and compassionate patient care. Through continuous improvement, advanced equipment upgrades, and professional training, CMDE has strengthened its presence in emergency medical transport and critical care services. Today, we stand committed to expanding our reach, enhancing our capabilities, and serving our community with the same dedication that inspired our journey in 2017.",
  };

  const features = [
    "Medical Equipment",
    "Patient-Centered Approach",
    "Comprehensive Care",
    "Community Engagement",
    "24/7 Availability",
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12 font-sans bg-white overflow-hidden">
      {/* Left Side: Image Content with Slide-In */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full md:w-1/2"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            src="HeroIMG1.jpeg"
            alt="Ambulance Equipment"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Floating 30 Years Badge with Pulse */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="absolute -bottom-6 -right-6 md:-right-10 bg-white p-2 rounded-full shadow-2xl w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border-8 border-[#003462]"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-red-600 font-bold flex justify-center mb-1"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-red-600 rounded-lg flex items-center justify-center">
                <span className="text-xl md:text-2xl">+</span>
              </div>
            </motion.div>
            <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-gray-800 leading-tight">
              30 Years <br /> Experience
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block text-red-600 font-semibold border border-red-200 px-4 py-1 rounded-full text-sm uppercase tracking-wider"
        >
          Who We Are
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-[#003462] leading-tight"
        >
          Excellence in <br />
          <span className="text-[#003462]">Emergency Medical Services</span>
        </motion.h2>

        {/* --- INTERACTIVE BUTTONS --- */}
        <div className="flex flex-wrap gap-2 md:gap-4 border-b border-gray-100 pb-4">
          {["mission", "vision", "history"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${activeTab === tab ? "text-white" : "text-gray-500 hover:bg-gray-100"}`}
            >
              <span className="relative z-10 capitalize">Our {tab}</span>
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-red-600 rounded-lg shadow-md"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC TEXT CONTENT WITH ANIMATE PRESENCE --- */}
        <div className="min-h-[120px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 text-lg leading-relaxed"
            >
              {tabContent[activeTab]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Features Grid with Staggered Children */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                show: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-3 group"
            >
              <div className="bg-red-600 rounded-full p-1 group-hover:rotate-12 transition-transform">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-800 font-semibold">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Red Chat Button with Hover Effect */}
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          const phoneNumber = "919093065446"; // without +
          const message = "I need an ambulance urgently.";
          const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(url, "_blank");
        }}
        className="fixed bottom-8 right-8 bg-red-600 p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all z-50"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </motion.button> */}
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (window.location.href = "tel:+919093065446")}
        // className="fixed bottom-8 right-30 bg-red-600 p-4 rounded-full shadow-2xl hover:bg-red-700 transition-all z-50"
        className="fixed 
    bottom-8 
    left-4 md:left-auto 
    md:right-8 
    bg-red-600 
    p-4 
    rounded-full 
    shadow-2xl 
    hover:bg-red-700 
    transition-all 
    z-50"
      >
        <FaPhoneAlt className="w-8 h-8 text-white" />
      </motion.button> */}

      {/* Floating Action Buttons */}
      <div
        className="fixed bottom-8 z-50 
                left-4 md:left-auto 
                md:right-8 
                flex gap-4"
      >
       {/* Phone Button */}
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => (window.location.href = "tel:+919093065446")}
  className="
    fixed bottom-8 z-50
    left-4 md:left-auto
    md:right-30
    bg-red-600 p-4 rounded-full
    shadow-2xl hover:bg-red-700
    transition-all
  "
>
  <FaPhoneAlt className="w-7 h-7 text-white" />
</motion.button>

{/* WhatsApp Button */}
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => {
    const phoneNumber = "919093065446";
    const message = "I need an ambulance urgently.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }}
  className="
    fixed bottom-8 z-50
    right-4 md:right-8
    bg-green-500 p-4 rounded-full
    shadow-2xl hover:bg-green-600
    transition-all
  "
>
  <FaWhatsapp className="w-7 h-7 text-white" />
</motion.button>
      </div>
    </section>
  );
};

export default AboutSection;
