// src/components/ContactSection/ContactSection.jsx
import React, { useState } from 'react';
import { Mail, User, MessageSquare, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Update form data on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // add credentials for now
    emailjs
      .send(
        "YOUR_SERVICE_ID",      // ← Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",     // ← Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"       // ← Replace with your EmailJS Public Key
      )
      .then(
        (res) => {
          setLoading(false);
          setFormData({ name: "", email: "", message: "" });
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        },
        (err) => {
          setLoading(false);
          console.error("EmailJS Error:", err);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center relative">

      {/* TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500">
          <div className="bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Message sent successfully!</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

          {/* LEFT SIDE: MAP */}
          <div className="relative w-full min-h-[300px] sm:min-h-[400px] rounded-2xl overflow-hidden shadow-inner bg-gray-200">
            <iframe
              title="Kolkata Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.362574059377!2d88.36389591542041!3d22.57264648522169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e9b3e4f55d%3A0x56f7f65024f3a93b!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen
              loading="lazy"
            ></iframe>

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-gray-800">Kolkata, India</span>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <span className="inline-block px-4 py-1 rounded-full border border-red-600 text-red-600 text-xs font-bold tracking-widest mb-4">
                GET IN TOUCH
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Send a Message
              </h2>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                {/* Email Input */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-5 text-gray-400 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type message"
                  required
                  rows="6"
                  className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-2 w-full md:w-auto px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{loading ? "Sending..." : "Send Message"}</span>
                {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
