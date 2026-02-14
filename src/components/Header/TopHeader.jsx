import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="w-full bg-red-600 text-white text-sm fixed top-0 z-50">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2 flex flex-col md:flex-row justify-between items-center gap-2"> */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 py-1 md:py-2 flex flex-col md:flex-row justify-between items-center gap-1 md:gap-2">
        {/* Left Side */}
        {/* <div className="flex flex-col md:flex-row items-center gap-4"> */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
          <div className="flex flex-row gap-4">
            <a
              href="tel:9093065446"
              className="flex items-center gap-2 hover:underline"
            >
              <FaPhoneAlt className="text-s" />
              9093065446
            </a>

            <a
              href="tel:8617670860"
              className="flex items-center gap-2 hover:underline"
            >
              <FaPhoneAlt className="text-s" />
              8617670860
            </a>
          </div>

          <a
            href="mailto:debarabidas@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <FaEnvelope className="text-s" />
            debarabidas@gmail.com
          </a>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/share/1Cc6vfhptS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/cmde_ambulance_service?igsh=MXU3aXY2YmlicDR6Nw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
