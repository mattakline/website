
// const services = [
//   {
//     id: 1,
//     title: "Brand Strategy",
//     description:
//       "We create tailored brand strategies to help your business stand out and connect with your target audience.",
//     details: "Includes positioning, messaging, and market analysis.",
//   },
//   {
//     id: 2,
//     title: "Content Creation",
//     description:
//       "Our team produces high-quality, engaging content for all platforms to tell your story effectively.",
//     details: "Includes photography, video production, and copywriting.",
//   },
//   {
//     id: 3,
//     title: "Social Media Marketing",
//     description:
//       "Expand your reach and grow your audience with our targeted social media campaigns.",
//     details: "Focus on paid ads, organic growth, and community engagement.",
//   },
//   {
//     id: 4,
//     title: "Web Design & Development",
//     description:
//       "Create a stunning and user-friendly online presence with our custom web design and development services.",
//     details: "Responsive designs optimized for mobile and desktop.",
//   },
// ];





import React, { useState } from "react";
import { dishes } from "../data/data";
import { motion } from "framer-motion";

const Dishes = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.category === selectedCategory)
    : dishes;

  return (
    <section id="menu" className="py-12 bg-white-100">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[75%]">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="bg-white p-4">
            <p className="font-tradegothic text-xs uppercase hover:underline leading-[2.1]">
              {dish.line0}
            </p>
            <h2 className="font-tradegothicbd text-l uppercase hover:underline leading-[1.1]">
              {dish.line1}
              <br />
              {dish.line2}
            </h2>
            <p className="font-tradegothic text-xs uppercase hover:underline">
              {dish.line3}
            </p>
            <p className="font-tradegothic text-xs uppercase hover:underline">
              {dish.line4}
            </p>
            <p className="font-tradegothic text-xs uppercase hover:underline">
              {dish.line5}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dishes;

