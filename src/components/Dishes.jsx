import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Brand Strategy",
    description:
      "We create tailored brand strategies to help your business stand out and connect with your target audience.",
    details: "Includes positioning, messaging, and market analysis.",
  },
  {
    id: 2,
    title: "Content Creation",
    description:
      "Our team produces high-quality, engaging content for all platforms to tell your story effectively.",
    details: "Includes photography, video production, and copywriting.",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "Expand your reach and grow your audience with our targeted social media campaigns.",
    details: "Focus on paid ads, organic growth, and community engagement.",
  },
  {
    id: 4,
    title: "Web Design & Development",
    description:
      "Create a stunning and user-friendly online presence with our custom web design and development services.",
    details: "Responsive designs optimized for mobile and desktop.",
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredServices = selectedCategory
    ? services.filter((service) => service.category === selectedCategory)
    : services;

  return (
    <section id="services" className="py-12 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-blue-500 font-bold">{service.details}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;