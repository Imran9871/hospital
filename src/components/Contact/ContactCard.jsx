// import React from 'react';
// import { PhoneCall } from 'lucide-react';

// const ContactCard = ({ number, borderColor }) => {
//   return (
//     <div className={`bg-white rounded-3xl p-8 shadow-lg border-t-4 ${borderColor} flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300 w-full max-w-sm`}>
//       <div className="bg-gray-50 p-3 rounded-full mb-4">
//         <PhoneCall className={`w-6 h-6 ${borderColor.replace('border-', 'text-')}`} />
//       </div>
//       <p className="text-gray-600 font-semibold mb-2 text-lg">Emergency Booking:</p>
//       <h3 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
//         {number}
//       </h3>
//     </div>
//   );
// };

// const ContactSection = () => {
//   const contactData = [
//     { number: "+91 (234) 5431", color: "border-orange-500" },
//     { number: "+91 (234) 5432", color: "border-green-500" },
//     { number: "+91 (234) 5433", color: "border-blue-500" },
//   ];

//   return (
//     <section className="py-16 px-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto flex flex-col items-center">

//         {/* Top Badge */}
//         <div className="mb-6">
//           <span className="px-6 py-2 border border-red-500 text-red-500 rounded-full text-sm font-bold uppercase tracking-widest">
//             Contact Us
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
//           Contact Informations
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center">
//           {contactData.map((contact, index) => (
//             <ContactCard
//               key={index}
//               number={contact.number}
//               borderColor={contact.color}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* Card Component */
const ContactCard = ({ value, type, borderColor, delay }) => {
  const isPhone = type === "phone";
  const isEmail = type === "email";

  const formattedPhone = value.replace(/\D/g, "");

  const link = isPhone
    ? `tel:+${formattedPhone}`
    : `mailto:${value}?subject=Ambulance Service Inquiry&body=Hello,%0D%0AI need assistance.`;
  return (
    <a
      href={link}
      target={!isPhone ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="w-full max-w-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className={`relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border-t-4 ${borderColor}
      flex flex-col items-center justify-center 
      w-full max-w-sm overflow-hidden group`}
      >
        {/* Ripple Effect */}
        <span className="absolute inset-0 overflow-hidden rounded-3xl">
          <span
            className="absolute top-1/2 left-1/2 w-0 h-0 bg-gray-200/40 rounded-full 
        group-hover:w-[400px] group-hover:h-[400px]
        -translate-x-1/2 -translate-y-1/2
        transition-all duration-700 ease-out"
          />
        </span>

        {/* Icon */}
        <div className="relative bg-gray-100 p-4 rounded-full mb-5 group-hover:scale-110 transition">
          {/* <PhoneCall
            className={`w-7 h-7 ${borderColor.replace("border-", "text-")}`}
          /> */}
          {isPhone ? (
            <PhoneCall
              className={`w-7 h-7 ${borderColor.replace("border-", "text-")}`}
            />
          ) : (
            <Mail
              className={`w-7 h-7 ${borderColor.replace("border-", "text-")}`}
            />
          )}
        </div>

        {/* Text */}
        {/* <p className="relative text-gray-600 font-semibold mb-2 text-lg text-center"> */}
        <p className="relative text-gray-600 font-semibold mb-2 text-sm text-center uppercase tracking-wide">
          {/* Emergency Booking */}
          {isPhone ? "Emergency Booking" : "Email Address"}
        </p>

        {/* <h3 className="relative text-2xl md:text-3xl font-bold text-gray-800 tracking-tight text-center"> */}
        <h3 className="relative text-lg md:text-xl font-bold text-gray-800 text-center break-all">
          {value}
        </h3>

        {/* Bottom Indicator */}
        <div
          className={`relative mt-6 h-1 w-12 rounded-full ${borderColor.replace(
            "border-",
            "bg-",
          )}`}
        />
      </motion.div>
    </a>
  );
};

/* Main Section */
const ContactSection = () => {
  const contactData = [
    { value: "+91 909 930 6544", color: "border-orange-500", type: "phone" },
    { value: "+91 861 767 0860", color: "border-green-500", type: "phone" },
    { value: "debarabidas@gmail.com", color: "border-blue-500", type: "email" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-200 to-gray-500 to-blue-300">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 px-6 py-2 border border-red-500 text-red-500 rounded-full text-sm font-bold uppercase tracking-widest bg-white/70 backdrop-blur-md shadow"
        >
          Contact Us
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 text-center"
        >
          Contact Informations
        </motion.h2>

        {/* Centered Cards */}
        {/* <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {contactData.map((contact, index) => (
            <ContactCard
              key={index}
              value={contact.value}
              type={contact.type}
              borderColor={contact.color}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
