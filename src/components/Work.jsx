import React, { useState } from "react";
import { dishes } from "../data/data";
import { motion } from "framer-motion";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.category === selectedCategory)
    : dishes;

  return (
    <section id="menu" className="py-12 bg-white-100">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[75%]" style={{ marginLeft: "188px" }}>
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="bg-white px-4">
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

export default Work;