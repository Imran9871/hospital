import React from "react";
import { motion } from "framer-motion";

const OwnerSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/Gemini_Generated_Image_fhjbf6fhjbf6fhjb.png"
            alt="Founder"
            className="w-72 h-80 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <h2 className="text-3xl font-bold text-red-600">Meet Our Founder</h2>

          <h3 className="text-2xl font-semibold text-gray-800">
            {/* Mr. Deba rabidas(rabi) */}
            Mr. Deba rabidas
          </h3>

          <p className="text-gray-600 font-medium">
            Founder & Managing Director
          </p>

          <p className="text-gray-700 leading-relaxed">
            With years of experience in emergency healthcare services, Mr. Deba
            rabidas started this ambulance service with one goal — to save lives
            and serve people with dedication and honesty.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Today, under his leadership, our team provides 24/7 medical support
            with modern equipment and trained professionals.
          </p>

          <button
            className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
            onClick={() => (window.location.href = "tel:+918910758266")}
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OwnerSection;
