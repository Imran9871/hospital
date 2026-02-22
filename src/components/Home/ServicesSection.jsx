import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, MessageCircle } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

// --- ANIMATED COUNTER COMPONENT ---
const CounterItem = ({ target, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2; // seconds
      const totalFrames = duration * 60;
      const increment = target / totalFrames;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-6 relative group border-r border-white/10 last:border-0"
    >
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <motion.h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
        {count.toLocaleString()}+
      </motion.h4>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "40%" }}
        className="h-1 bg-white/30 rounded-full mt-2"
      />

      <p className="text-white/70 text-xs md:text-sm font-bold mt-4 uppercase tracking-[0.2em] text-center">
        {label}
      </p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("ICU Ambulance");
  const containerRef = useRef(null);

  // Parallax effect for the counter bar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const services = {
    "Ambulance Service": {
      title: "Standard Ambulance",
      description:
        "Reliable patient transport for safe and timely hospital transfers, equipped with essential life support systems.",
      image1: "/HeroIMG2.jpeg",
      image2: "/HeroIMG6.jpeg",
      features: [
        "24/7 Rapid Response",
        "Basic Life Support",
        "Certified Paramedics",
        "Safe Hospital Transfer",
      ],
      buttonText: "Book Ambulance",
      whatsappMessage: "I need an ambulance urgently.",
    },
    "ICU Ambulance": {
      title: "Mobile ICU Unit",
      description:
        "Advanced critical care on wheels. Equipped with ventilators, monitors, and specialized paramedics for high-risk transport.",
      image1: "/SERVICE.jpeg",
      image2: "HeroIMG5.jpeg",
      features: [
        "Ventilator Support",
        "ICU Setup",
        "Critical Care Team",
        "Emergency Ready",
      ],
      buttonText: "Book ICU Ambulance",
      whatsappMessage: "I need ICU ambulance urgently.",
    },
    "Medical Support": {
      title: "Event Support",
      description:
        "On-site medical standby for corporate events, sports, and construction sites to ensure immediate emergency response.",
      image1:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
      image2: "TRUST.jpeg",
      features: [
        "On-Site Ambulance",
        "Certified Medical Staff",
        "Emergency Response Ready",
        "Suitable for All Events",
      ],
      buttonText: "Book Medical Support",
      whatsappMessage: "I need medical support for an event.",
    },
    "Patient Transfer": {
      title: "Safe Transfer",
      description:
        "Bed-to-bed transfer services focusing on patient comfort and stability during inter-city or inter-hospital moves.",
      image1: "/Hero.jpg",
      image2: "/unnamed.jpg",
      features: [
        "Bed to Bed Transfer",
        "Comfortable Journey",
        "Experienced Staff",
        "Available 24/7",
      ],
      buttonText: "Book Transfer",
      whatsappMessage: "I need patient transfer service.",
    },
    "Dead Body Freezer": {
      title: "Dead Body Freezer Box (Home Service)",
      description:
        "We provide dead body freezer box on rent with home delivery. Maintains proper cooling to preserve the body safely for last rites. Available 24/7 with quick setup and support.",
      image1: "/freezer1.jpeg", // upload your first image in public folder
      image2: "/freezer2.jpeg", // upload second image
      features: [
        "24/7 Home Delivery",
        "Temperature Control",
        "Hygienic & Sanitized",
        "Quick Installation",
      ],
      buttonText: "Book Freezer",
      whatsappMessage: "I need dead body freezer box on rent.",
    },
  };

  return (
    <div
      ref={containerRef}
      className="bg-white min-h-screen relative font-sans overflow-x-hidden"
    >
      {/* --- BACKGROUND BLOBS (Liquid Animation) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-red-50 rounded-full blur-[100px] opacity-60"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-40 right-10 w-80 h-80 bg-blue-50 rounded-full blur-[100px] opacity-50"
        />
      </div>
      <div className="bg-gray-50/50 pt-20 pb-40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-red-50 text-red-600 font-black px-6 py-2 rounded-full text-xs uppercase tracking-[0.3em] border border-red-100">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mt-6 tracking-tight">
              Premium Medical <span className="text-red-600">Solutions</span>
            </h2>
          </motion.div>

          {/* Modern Tabs */}
          <div className="max-w-4xl mx-auto mb-20 p-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl flex overflow-x-auto no-scrollbar">
            {Object.keys(services).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 min-w-[140px] py-4 md:py-6 text-sm md:text-base font-bold transition-all duration-500 rounded-xl z-10 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-500 hover:text-red-600"
                }`}
              >
                <span className="relative z-20">{tab}</span>
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-glow"
                    className="absolute inset-0 bg-red-600 shadow-[0_10px_30px_rgba(220,38,38,0.4)] rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Side */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="space-y-8"
            >
              <h3 className="text-5xl font-black text-gray-900 leading-tight">
                {services[activeTab].title}
              </h3>
              <p className="text-gray-500 text-xl leading-relaxed">
                {services[activeTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* {[
                  "24/7 Rapid Response",
                  "ICU Equipment",
                  "Certified Paramedics",
                  "Global Standards",
                ].map((item, i) => ( */}
                {services[activeTab].features.map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="bg-red-50 p-1 rounded-full">
                      <CheckCircle className="text-red-600 w-5 h-5" />
                    </div>
                    <span className="text-gray-800 font-bold text-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(220,38,38,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const phoneNumber = "918910758266"; // without +
                  // const message = "I need an ambulance urgently.";
                  const message = services[activeTab].whatsappMessage;
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
                className="bg-red-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-red-700 transition-all flex items-center gap-3 shadow-xl"
              >
                {/* Book Ambulance <MessageCircle className="w-5 h-5" /> */}
                {services[activeTab].buttonText} <MessageCircle className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Image Side with 3D Tilt Effect */}
            <div className="relative perspective-1000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -20, scale: 0.9 }}
                  transition={{ duration: 0.7, type: "spring" }}
                  className="relative"
                >
                  <div className="rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-[12px] border-white">
                    <img
                      src={services[activeTab].image2}
                      className="w-full h-[500px] object-cover"
                      alt="Main"
                    />
                  </div>

                  {/* Floating Small Image */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -left-12 -bottom-10 w-2/3 aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white hidden sm:block"
                  >
                    <img
                      src={services[activeTab].image1}
                      className="w-full h-full object-cover"
                      alt="Detail"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* --- 3D PERSPECTIVE COUNTER SECTION --- */}
      <motion.div
        style={{ y: yParallax }}
        className="max-w-6xl mx-auto px-6 -mt-24 relative z-20"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 100, rotateX: 25 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                type: "spring",
                staggerChildren: 0.15,
                duration: 1.2,
              },
            },
          }}
          className="bg-gradient-to-br from-red-600 to-red-800 rounded-[3rem] shadow-[0_30px_80px_rgba(220,38,38,0.35)] overflow-hidden grid grid-cols-2 lg:grid-cols-4 py-10 md:py-16 border border-white/20 backdrop-blur-lg"
        >
          <CounterItem index={0} target={1500} label="Lives Impacted" />
          <CounterItem index={1} target={30} label="Strategic Hubs" />
          <CounterItem index={2} target={100} label="Advanced Fleet" />
          <CounterItem index={3} target={300} label="Expert Doctors" />
        </motion.div>
      </motion.div>
      <div className="h-20" /> {/* Spacer */}
    </div>
  );
};

export default ServicesSection;
