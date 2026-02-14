// import React from 'react';
// import { ShieldAlert, BriefcaseMedical, Activity } from 'lucide-react';

// const WhyChooseUs = () => {
//   const features = [
//     {
//       title: "Secure Transport",
//       icon: <ShieldAlert className="w-12 h-12 text-white" />,
//       description: "Amcare secure transport services play a critical role in healthcare system, providing safe and reliable"
//     },
//     {
//       title: "On Demand Service",
//       icon: <BriefcaseMedical className="w-12 h-12 text-white" />,
//       description: "Amcare secure transport services play a critical role in healthcare system, providing safe and reliable"
//     },
//     {
//       title: "Emergency Transport",
//       icon: <Activity className="w-12 h-12 text-white" />,
//       description: "Amcare secure transport services play a critical role in healthcare system, providing safe and reliable"
//     }
//   ];

//   return (
//     <section 
//       className="relative pt-24 pb-20 px-4 bg-cover bg-center bg-fixed" 
//       style={{ 
//         // Using a high-quality ambulance background image
//         backgroundImage: "url('https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1600&auto=format&fit=crop')" 
//       }}
//     >
//       {/* Red Overlay: Matches the exact red tint in your image */}
//       <div className="absolute inset-0 bg-[#00245380] z-0" />
      
//       <div className="relative z-10 max-w-7xl mx-auto text-center">
//         {/* Top Tag */}
//         <div className="flex justify-center mb-4">
//           <span className="text-white font-bold border border-white/40 px-6 py-1 rounded-full text-xs uppercase tracking-[0.2em] bg-white/10 backdrop-blur-sm">
//             Features
//           </span>
//         </div>
        
//         {/* Main Title */}
//         <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-16 tracking-tight">
//           Why Choose Us
//         </h2>
        
//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((item, idx) => (
//             <div 
//               key={idx} 
//               className="bg-white rounded-[40px] p-10 flex flex-col items-center shadow-2xl transition-all duration-300 hover:-translate-y-3 group"
//             >
//               {/* Icon Container */}
//               <div className="bg-red-600 p-6 rounded-full mb-8 shadow-lg shadow-red-100 group-hover:scale-110 transition-transform duration-300">
//                 {item.icon}
//               </div>
              
//               {/* Card Text */}
//               <h4 className="text-2xl font-bold text-gray-900 mb-4">
//                 {item.title}
//               </h4>
              
//               <p className="text-gray-500 text-center leading-relaxed text-base">
//                 {item.description}
//               </p>
              
//               {/* Outline Button */}
//               <button className="mt-8 border-2 border-red-600 text-red-600 px-8 py-2.5 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-colors duration-300">
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;









// import React from 'react';
// import { ShieldAlert, BriefcaseMedical, Activity, ArrowRight } from 'lucide-react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const WhyChooseUs = () => {
//   const { scrollYProgress } = useScroll();
  
//   // Create a parallax effect for the background image
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

//   const features = [
//     {
//       title: "Secure Transport",
//       icon: <ShieldAlert className="w-10 h-10 text-white" />,
//       description: "Amcare secure transport services play a critical role in healthcare system, providing safe and reliable patient care."
//     },
//     {
//       title: "On Demand Service",
//       icon: <BriefcaseMedical className="w-10 h-10 text-white" />,
//       description: "Our fleet is ready 24/7 to provide immediate medical assistance at your doorstep with a single click."
//     },
//     {
//       title: "Emergency Transport",
//       icon: <Activity className="w-10 h-10 text-white" />,
//       description: "Rapid response mobile ICU units equipped for critical care during the most time-sensitive emergencies."
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: { type: "spring", stiffness: 100, damping: 15 }
//     }
//   };

//   return (
//     <section className="relative min-h-[900px] flex items-center py-24 overflow-hidden">
//       {/* Parallax Background */}
//       <motion.div 
//         style={{ y: backgroundY }}
//         className="absolute inset-0 z-0"
//       >
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ 
//             backgroundImage: "url('https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1600&auto=format&fit=crop')",
//             transform: 'scale(1.2)' // Scale up slightly to prevent edges showing during parallax
//           }}
//         />
//         {/* Modern Multi-layered Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#002453e6] via-[#002453cc] to-[#002453f2]" />
//       </motion.div>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
//         {/* Animated Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <span className="inline-block text-white font-black px-6 py-2 rounded-full text-xs uppercase tracking-[0.4em] bg-white/10 border border-white/20 backdrop-blur-md mb-6">
//             Key Features
//           </span>
//           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
//             Why Choose <span className="text-red-500">Amcare?</span>
//           </h2>
//         </motion.div>
        
//         {/* Features Grid */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-10"
//         >
//           {features.map((item, idx) => (
//             <motion.div 
//               key={idx} 
//               variants={cardVariants}
//               whileHover={{ y: -15, scale: 1.02 }}
//               className="relative group bg-white rounded-[3rem] p-10 flex flex-col items-center shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all"
//             >
//               {/* Floating Icon Decoration */}
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
//                 <motion.div 
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.8 }}
//                   className="bg-red-600 p-6 rounded-3xl shadow-[0_15px_30px_rgba(220,38,38,0.4)]"
//                 >
//                   {item.icon}
//                 </motion.div>
//               </div>
              
//               <div className="mt-10 flex-grow">
//                 <h4 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">
//                   {item.title}
//                 </h4>
//                 <p className="text-gray-500 text-center leading-relaxed text-lg px-2">
//                   {item.description}
//                 </p>
//               </div>
              
//               {/* Interactive Button */}
//               <motion.button 
//                 whileHover={{ gap: '15px' }}
//                 className="mt-10 flex items-center gap-2 text-red-600 font-black text-sm uppercase tracking-widest group"
//               >
//                 Learn More 
//                 <div className="bg-red-50 p-2 rounded-full group-hover:bg-red-600 group-hover:text-white transition-all">
//                   <ArrowRight className="w-4 h-4" />
//                 </div>
//               </motion.button>

//               {/* Decorative Subtle Numbering */}
//               <span className="absolute bottom-6 right-10 text-gray-100 text-6xl font-black select-none z-0">
//                 0{idx + 1}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
      
//       {/* Bottom Glow Effect */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#002453] to-transparent z-10" />
//     </section>
//   );
// };

// export default WhyChooseUs;




















































import React, { useState } from 'react';
import { ShieldAlert, BriefcaseMedical, Activity, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: "01",
      title: "Secure Transport",
      icon: <ShieldAlert className="w-10 h-10 text-white" />,
      description: "Amcare secure transport services play a critical role in healthcare system, providing safe and reliable patient care.",
      longDescription: "Our secure transport goes beyond standard ambulance rides. We use GPS-tracked vehicles and rigorous safety protocols to ensure that high-risk patients are moved with zero compromise on stability. Our team is trained in specialized handling for various medical conditions."
    },
    {
      id: "02",
      title: "On Demand Service",
      icon: <BriefcaseMedical className="w-10 h-10 text-white" />,
      description: "Our fleet is ready 24/7 to provide immediate medical assistance at your doorstep with a single click.",
      longDescription: "With our proprietary AI-dispatch system, we identify the nearest available unit to your location. This reduces wait times by up to 40% compared to traditional dispatch methods, ensuring help arrives when every second counts."
    },
    {
      id: "03",
      title: "Emergency Transport",
      icon: <Activity className="w-10 h-10 text-white" />,
      description: "Rapid response mobile ICU units equipped for critical care during the most time-sensitive emergencies.",
      longDescription: "Our Mobile ICU units are 'hospitals on wheels.' Equipped with ventilators, cardiac monitors, and emergency medications, they allow our advanced paramedics to begin life-saving treatment before the patient even reaches the hospital gates."
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-[#001a3d]">
      {/* BACKGROUND IMAGE FIX: Lower opacity overlay to make image visible */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=1600&auto=format&fit=crop')" 
        }}
      />
      {/* Gradient for text readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#00245380] via-[#001a3dCC] to-[#001a3d] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-white font-bold px-6 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            Key Features
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Why Choose <span className="text-red-500">CMDE?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-[2.5rem] p-10 pt-16 flex flex-col items-center shadow-2xl my-5 md:my-0 transition-all group hover:-translate-y-2"
            >
              {/* Icon - Perfectly Centered on top border */}
              <div className="absolute -top-8 bg-red-600 p-5 rounded-2xl shadow-[0_10px_25px_rgba(220,38,38,0.4)]">
                {item.icon}
              </div>
              
              <h4 className="text-2xl font-black text-gray-900 mb-4 text-center">
                {item.title}
              </h4>
              <p className="text-gray-500 text-center leading-relaxed font-medium mb-8">
                {item.description}
              </p>
              
              <button 
                onClick={() => setSelectedFeature(item)}
                className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-widest group hover:text-red-700 transition-colors"
              >
                Learn More 
                <div className="bg-red-50 p-1.5 rounded-full group-hover:bg-red-600 group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              {/* Numbering Label (matches image) */}
              <span className="absolute bottom-6 right-10 text-gray-100 text-7xl font-black select-none -z-10 opacity-60">
                {item.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL (The "Learn More" Detail) --- */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="bg-red-600 p-4 rounded-2xl mb-6 shadow-lg">
                  {selectedFeature.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{selectedFeature.title}</h3>
                <div className="w-16 h-1 bg-red-600 rounded-full mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedFeature.longDescription}
                </p>
                <button 
                  onClick={() => setSelectedFeature(null)}
                  className="mt-10 bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all"
                >
                  Close Detail
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyChooseUs;