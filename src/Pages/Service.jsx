import React from "react";
import HeroService from "../components/Service/HeroService";
import ServicesSection from "../components/Home/ServicesSection";
import BusinessCategories from "../components/Home/BusinessCategories";

const Service = () => {
  return (
    <div>
      <HeroService />
      <BusinessCategories />
      <ServicesSection />
    </div>
  );
};

export default Service;
