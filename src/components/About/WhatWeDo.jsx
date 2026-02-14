// // src/components/WhatWeDo/WhatWeDo.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Emergency Ambulance",
//     description:
//       "Rapid response ambulances with fully equipped ICU and life support systems, reaching you anytime, anywhere.",
//     img: "/HeroIMG1.jpeg",
//   },
//   {
//     title: "Patient Transport",
//     description:
//       "Safe and comfortable patient transfers between hospitals, clinics, and homes with trained medical staff onboard.",
//     img: "/HeroIMG3.jpeg",
//   },
//   {
//     title: "Neonatal & Pediatric Care",
//     description:
//       "Specialized ambulances for newborns and children, providing critical care and safety during transport.",
//     img: "/HeroIMG2.jpeg",
//   },
//   {
//     title: "Medical Assistance & Life Support",
//     description:
//       "24/7 life support and medical assistance during emergencies, ensuring every second counts.",
//     img: "/SERVICE.jpeg",
//   },
// ];

// const WhatWeDo = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-20 space-y-20">
//       <h2 className="text-4xl font-bold text-center mb-12 text-red-600">
//         What We Do
//       </h2>

//       {services.map((service, index) => {
//         const isEven = index % 2 === 0;

//         return (
//           <motion.div
//             key={index}
//             className={`flex flex-col md:flex-row items-center gap-8 ${
//               isEven ? "" : "md:flex-row-reverse"
//             }`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.7 }}
//           >
//             {/* Text */}
//             <div className="md:w-1/2 space-y-4">
//               <h3 className="text-2xl font-bold text-red-600">{service.title}</h3>
//               <p className="text-gray-700 text-justify line-clamp-4">
//                 {service.description}
//               </p>
//             </div>

//             {/* Image */}
//             <div className="md:w-1/2">
//               <motion.img
//                 src={service.img}
//                 alt={service.title}
//                 className="rounded-lg shadow-lg w-full h-64 object-cover"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
//           </motion.div>
//         );
//       })}
//     </section>
//   );
// };

// export default WhatWeDo;











// import React from "react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "Emergency Ambulance",
//     description:
//       "Rapid response ambulances with ICU and life support systems, available anytime.",
//     img: "/HeroIMG1.jpeg",
//   },
//   {
//     title: "Patient Transport",
//     description:
//       "Safe and comfortable transfers between hospitals and homes.",
//     img: "/HeroIMG3.jpeg",
//   },
//   {
//     title: "Neonatal & Pediatric Care",
//     description:
//       "Special ambulances for newborns and children with critical care support.",
//     img: "/HeroIMG2.jpeg",
//   },
//   {
//     title: "Medical Assistance & Life Support",
//     description:
//       "24/7 life support and emergency medical assistance.",
//     img: "/SERVICE.jpeg",
//   },
// ];

// const WhatWeDo = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-20">

//       <h2 className="text-4xl font-bold text-center mb-16 text-red-600">
//         What We Do
//       </h2>

//       <div className="space-y-24">
//         {services.map((service, index) => {
//           const reverse = index % 2 !== 0;

//           return (
//             <motion.div
//               key={index}
//               className={`flex flex-col md:flex-row items-center gap-10 ${
//                 reverse ? "md:flex-row-reverse" : ""
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7 }}
//             >

//               {/* Text */}
//               <div className="md:w-1/2 space-y-4">
//                 <h3 className="text-2xl font-bold text-red-600">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-700 leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>

//               {/* Image */}
//               <div className="md:w-1/2">
//                 <motion.img
//                   src={service.img}
//                   alt={service.title}
//                   className="rounded-xl shadow-lg w-full h-72 object-cover"
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </div>

//             </motion.div>
//           );
//         })}
//       </div>

//     </section>
//   );
// };

// export default WhatWeDo;









import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Emergency Ambulance",
    description: "Rapid response ambulances with ICU and life support systems, available anytime.",
    img: "/HeroIMG1.jpeg",
  },
  {
    title: "Patient Transport",
    description: "Safe and comfortable transfers between hospitals and homes.",
    img: "/HeroIMG3.jpeg",
  },
  {
    title: "Neonatal & Pediatric Care",
    description: "Special ambulances for newborns and children with critical care support.",
    img: "/HeroIMG2.jpeg",
  },
  {
    title: "Medical Assistance & Life Support",
    description: "24/7 life support and emergency medical assistance.",
    img: "/SERVICE.jpeg",
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 px-6 md:py-24">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-red-600 mb-4">
            What We Do
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                {/* Text Content */}
                <motion.div 
                  className="w-full md:w-1/2 text-center md:text-left"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="text-red-500 font-bold text-sm uppercase tracking-widest mb-2 block">
                    Service 0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                    {service.description}
                  </p>
                  <button className="mt-6 px-6 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition-colors duration-300">
                    Learn More
                  </button>
                </motion.div>

                {/* Image Container */}
                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative group">
                    {/* Decorative colored box behind image */}
                    <div className={`absolute -inset-2 rounded-2xl bg-red-100 transition-transform group-hover:rotate-2 ${isEven ? 'rotate-3' : '-rotate-3'}`} />
                    
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="relative overflow-hidden rounded-xl shadow-2xl bg-white"
                    >
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;