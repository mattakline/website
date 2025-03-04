import React from "react";
import { Link } from "react-router-dom";
import { live, video } from "../data/data";

const Work = () => {
  return (
    <section id="menu" className="py-6 bg-white-100 text-xs font-nunito">
      <div className="container max-w-[1200px]"> {/* Increased max width */}
      
        {/* Live Items */}
        <h2 className="uppercase mb-4 px-2 ml-[15px] sm:ml-[176px] md:ml-[196px] mt-[24px] inline-block border-l-2 border-black">
          Live
        </h2>
        <div className="container py-[24px] mx-auto grid grid-cols-2 gap-8 max-w-[1000px] ml-0 sm:ml-[160px] md:ml-[182px]">
          {live.map((item) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.line2.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative bg-transparent px-4 flex flex-col group transition-all duration-200"
            >
              {/* Thumbnail (Always Visible) */}
              <img src={item.thumb} alt={item.line2} className="w-full max-w-[440px] mb-4 rounded-sm" />
              
              {/* Text Content - Always visible on mobile, fades in on hover for larger screens */}
              <h2 className="font-nunito font-semibold text-l uppercase leading-[1.1] text-left opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                {item.line1}
                <br />
                {item.line2}
              </h2>
              <p className="font-nunito text-xs uppercase py-2 text-left opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                {item.line3}
              </p>
            </Link>
          ))}
        </div>

        {/* Video Items */}
        <h2 className="uppercase mb-4 px-2 ml-[15px] sm:ml-[176px] md:ml-[196px] mt-[24px] inline-block border-l-2 border-black">
          Produced
        </h2>
        <div className="container py-[24px] mx-auto grid grid-cols-2 gap-8 max-w-[1000px] ml-0 sm:ml-[160px] md:ml-[182px]">
          {video.map((item) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.line2.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative bg-transparent px-4 flex flex-col group transition-all duration-200"
            >
              {/* Thumbnail (Always Visible) */}
              <img src={item.thumb} alt={item.line2} className="w-full max-w-[500px] mb-4 rounded-sm" />
              
              {/* Text Content - Always visible on mobile, fades in on hover for larger screens */}
              <h2 className="font-nunito font-semibold text-l uppercase leading-[1.1] text-left opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                {item.line1}
                <br />
                {item.line2}
              </h2>
              <p className="font-nunito text-xs uppercase py-2 text-left opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                {item.line3}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;