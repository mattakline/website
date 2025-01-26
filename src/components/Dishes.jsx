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
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6"
      >
        <h2 className="font-tradegothic uppercase text-xs text-left mb-8">
          Featured Dishes
        </h2>
        <div className="flex justify-center gap-x-4 gap-y-2 mb-8 flex-wrap">
          <button
            onClick={() => handleCategoryChange("")}
            className="px-4 py-2 font-tradegothic text-xs uppercase hover:underline"
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange("Seafood")}
            className="px-4 py-2 font-tradegothic text-xs uppercase hover:underline"
          >
            Seafood
          </button>
          <button
            onClick={() => handleCategoryChange("Pizza")}
            className="px-4 py-2 font-tradegothic text-xs uppercase hover:underline"
          >
            Pizza
          </button>
          <button
            onClick={() => handleCategoryChange("Salad")}
            className="px-4 py-2 font-tradegothic text-xs uppercase hover:underline"
          >
            Salad
          </button>
          <button
            onClick={() => handleCategoryChange("Pasta")}
            className="px-4 py-2 font-tradegothic text-xs uppercase hover:underline"
          >
            Pasta
          </button>
          <button
            onClick={() => handleCategoryChange("Burger")}
            className="px-4 py-2 font-tradegothic text-xs uppercase hover:underline"
          >
            Burger
          </button>
          <button
            onClick={() => handleCategoryChange("Vegetarian")}
            className="px-4 py-2 font-tradegothic text-xs uppercase hover:underline"
          >
            Vegetarian
          </button>
        </div>
      </motion.div> */}
      {/* Dishes */}
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