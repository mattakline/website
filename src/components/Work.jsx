import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dishes } from "../data/data";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.category === selectedCategory)
    : dishes;

  return (
    <section id="menu" className="py-6 bg-white-100">
      <div className="container py-[20px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:max-w-[1000px] md:max-w-[700px] sm:ml-[108px] md:ml-[182px]">
        {filteredDishes.map((dish) => (
                 <Link
                 key={dish.id}
                 // Convert dish.line2 to lowercase and replace spaces with dashes
                 to={`/portfolio/${dish.line2.toLowerCase().replace(/\s+/g, "-")}`}
                 className="bg-transparent hover:underline px-4"
               >
            <p className="font-tradegothic text-xs uppercase leading-[2.1]">
              {dish.line0}
            </p>
            <h2 className="font-tradegothicbd text-l uppercase leading-[1.1]">
              {dish.line1}
              <br />
              {dish.line2}
            </h2>
            <p className="font-tradegothic text-xs uppercase">
              {dish.line3}
            </p>
            <p className="font-tradegothic text-xs uppercase">
              {dish.line4}
            </p>
            <p className="font-tradegothic text-xs uppercase">
              {dish.line5}
            </p>
          </Link>
        ))}
      </div>
      <video
        className="fixed bottom-[140px] left-20 sm:left-40 md:left-80 w-[1100px] h-[600px] object-cover -z-10"
        autoPlay
        muted
        loop
      >
        <source src="/videos/website.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Work;