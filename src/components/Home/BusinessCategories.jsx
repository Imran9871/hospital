import React from "react";

const categories = [
  {
    title: "Online Ambulance Booking Services",
    description:
      "Book emergency ambulances instantly through our fast and secure online platform.",
  },
  {
    title: "Dead Body Freezer Box Ambulance Services",
    description:
      "Safe and hygienic freezer box ambulance services for dignified transportation.",
  },
  {
    title: "Oxygen System Ambulance Services",
    description:
      "Equipped with advanced oxygen support systems for respiratory emergencies.",
  },
  {
    title: "Cardiac Care Ambulance Services",
    description:
      "Specialized cardiac ambulances with defibrillators and trained paramedics.",
  },
  {
    title: "Ventilator Ambulance Services",
    description:
      "Fully ventilator-supported ambulances for critical patient transport.",
  },
  {
    title: "Critical Care Ambulance Services",
    description:
      "Advanced life-support ambulances designed for high-risk patient transfers.",
  },
  {
    title: "ICU Ambulance Services",
    description:
      "Mobile ICU units with complete monitoring systems and medical staff.",
  },
  {
    title: "Domestic Ambulance Services",
    description:
      "Reliable intercity and local ambulance transportation services.",
  },
  {
    title: "AC Ambulance Services",
    description:
      "Comfortable air-conditioned ambulances ensuring patient safety and comfort.",
  },
  {
    title: "Ambulance Services",
    description:
      "24/7 emergency ambulance support with rapid response time.",
  },
  {
    title: "24 Hours Ambulance Services",
    description:
      "Round-the-clock ambulance availability for all emergency situations.",
  },
];

const BusinessCategories = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-gray-900">
            Our <span className="text-red-600">Service Categories</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Complete emergency and critical care solutions available 24/7.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BusinessCategories;
