// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart, ArrowRight } from "lucide-react";

// const Footer = () => {
//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <footer className="relative mt-20 bg-[#000b1a] text-slate-300 overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] -z-10" />

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto px-6 py-16 lg:px-8"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">

//           {/* Brand & Mission */}
//           <motion.div variants={itemVariants} className="md:col-span-5">
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]">
//                 <img src="Logo.jpeg" alt="Logo" className="h-10 w-10 object-contain" />
//               </div>
//               <span className="text-2xl font-bold tracking-tight text-white">
//                 Life<span className="text-red-500">Line</span> Care
//               </span>
//             </div>
//             <p className="text-slate-400 leading-relaxed text-lg mb-8 max-w-sm">
//               Advanced emergency response and clinical excellence. We bridge the gap between crisis and care, 24 hours a day.
//             </p>
//             <div className="flex gap-4">
//               {[Facebook, Twitter, Instagram].map((Icon, idx) => (
//                 <motion.a
//                   key={idx}
//                   href="#"
//                   whileHover={{ y: -5, scale: 1.1 }}
//                   className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 hover:border-red-500 hover:text-red-500 transition-all shadow-lg"
//                 >
//                   <Icon size={18} />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants} className="md:col-span-3">
//             <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
//               Quick Navigation
//               <span className="ml-2 w-8 h-[2px] bg-red-500" />
//             </h3>
//             <ul className="space-y-4">
//               {["Home", "About Us", "Services", "Contact", "Gallery"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to={`/${item.toLowerCase().replace(" ", "")}`}
//                     className="flex items-center group text-slate-400 hover:text-white transition-colors"
//                   >
//                     <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div variants={itemVariants} className="md:col-span-4">
//             <h3 className="text-white font-semibold text-lg mb-6">Contact Hub</h3>
//             <div className="space-y-5">
//               <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300">
//                 <div className="flex items-start space-x-3">
//                   <MapPin className="text-red-500 shrink-0" size={20} />
//                   <span className="text-sm">123 Ambulance Road, Medical Square, City Center</span>
//                 </div>
//               </div>

//               <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-red-500/50 transition-all group">
//                 <div className="flex items-center space-x-3">
//                   <Phone className="text-red-500 group-hover:animate-bounce" size={20} />
//                   <span className="text-xl font-bold text-white">+91 98765 43210</span>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3 px-4">
//                 <Mail className="text-red-500" size={18} />
//                 <span className="text-sm hover:text-red-400 cursor-pointer transition-colors">emergency@lifeline.com</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col md:row justify-between items-center gap-6">
//           <p className="text-slate-500 text-xs tracking-widest uppercase">
//             © {new Date().getFullYear()} LifeLine Medical Services — Emergency Response Unit
//           </p>

//           <div className="flex items-center px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
//             <Heart size={12} className="mr-2 fill-red-500" />
//             Committed to Saving Lives
//           </div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // <footer className="relative mt-20 bg-[#000b1a] text-slate-300 overflow-hidden">
    <footer className="relative bg-[#000b1a] text-slate-300 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[100px] -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Mission */}
          <motion.div variants={itemVariants} className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <img
                  src="mainLOGO.jpeg"
                  alt="Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                CM<span className="text-red-500">DE</span>
              </span>
            </div>
            <div className="text-slate-300 font-medium mb-4">
              Advanced Emergency Response & Clinical Excellence
            </div>
            <p className="text-slate-400 leading-relaxed text-lg mb-8 max-w-sm">
              At CMDE – LifeLine Medical Services, we bridge the gap between
              crisis and care with rapid response, expert medical teams, and
              life-saving support — 24 hours a day, 7 days a week. Your
              emergency is our priority.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.facebook.com/share/1Cc6vfhptS/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 hover:border-red-500 hover:text-red-500 transition-all shadow-lg"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/cmde_ambulance_service?igsh=MXU3aXY2YmlicDR6Nw=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 hover:border-red-500 hover:text-red-500 transition-all shadow-lg"
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center">
              Quick Navigation
              {/* <span className="ml-2 w-8 h-[2px] bg-red-500" /> */}
            </h3>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Services",
                "Contact",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    className="flex items-center group text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <h3 className="text-white font-semibold text-lg mb-6">
              Contact Hub
            </h3>
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-red-500 shrink-0" size={20} />
                  <span>📍 Head Office</span>
                  <span className="text-sm">
                    CK84, SALT LAKE, SEC-2, Street line-2, <br />
                    Kolkata, West Bengal - 700091
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-red-500/50 transition-all group">
                <a
                  href="tel:+9190993065446"
                  className="flex items-center space-x-3"
                >
                  <Phone
                    className="text-red-500 group-hover:animate-bounce"
                    size={20}
                  />
                  <span className="text-xl font-bold text-white">
                    +91 90993 065446
                  </span>
                </a>
              </div>

              <div className="flex items-center space-x-3 px-4">
                <Mail className="text-red-500" size={18} />
                <a
                  href="mailto:debarabidas@gmail.com"
                  className="text-sm hover:text-red-400 transition-colors"
                >
                  debarabidas@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs tracking-widest uppercase text-center md:text-left">
            © {new Date().getFullYear()} LifeLine Medical Services — Emergency
            Response Unit
          </p>

          <div className="flex items-center px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
            <Heart size={12} className="mr-2 fill-red-500" />
            Committed to Saving Lives
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
