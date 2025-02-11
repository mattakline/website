// src/Work.jsx
import React from "react";
import { Link } from "react-router-dom";
import { live, video } from "../data/data";

const Work = () => {
  return (
    <section id="menu" className="py-6 bg-white-100">
      {/* Live Items */}
      <h2 className="font-tradegothic uppercase text-xs ml-[15px] sm:ml-[176px] md:ml-[196px] mt-[24px]">
        Live
      </h2>
      <div className="container py-[24px] mx-auto grid grid-cols-2 gap-10 max-w-[500px] ml-0 sm:ml-[160px] md:ml-[176px]">
        {live.map((item) => (
          <Link
            key={item.id}
            to={`/portfolio/${item.line2.toLowerCase().replace(/\s+/g, "-")}`}
            className="group relative bg-transparent hover:underline px-4"
          >
            <p className="font-tradegothic text-xs uppercase leading-[2.1]">
              {item.line0}
            </p>
            <h2 className="font-tradegothicbd text-l uppercase leading-[1.1]">
              {item.line1}
              <br />
              {item.line2}
            </h2>
            <p className="font-tradegothic text-xs uppercase">{item.line3}</p>
            <p className="font-tradegothic text-xs uppercase">{item.line4}</p>
            <p className="font-tradegothic text-xs uppercase">{item.line5}</p>
            {/* Popup thumbnail – positioned to the right */}
            <div className="absolute z-10 w-[500px] hidden group-hover:block  left-full top-0 ml-2">
              <img src={item.thumb} alt="Thumbnail" className="w-[500px]" />
            </div>
          </Link>
        ))}
      </div>

      {/* Video Items */}
      <h2 className="font-tradegothic uppercase text-xs ml-[15px] sm:ml-[176px] md:ml-[196px] mt-[24px]">
        Video
      </h2>
      <div className="container py-[24px] mx-auto grid grid-cols-2 gap-10 max-w-[500px] ml-0 sm:ml-[160px] md:ml-[176px]">
        {video.map((item) => (
          <Link
            key={item.id}
            to={`/portfolio/${item.line2.toLowerCase().replace(/\s+/g, "-")}`}
            className="group relative bg-transparent hover:underline px-4"
          >
            <p className="font-tradegothic text-xs uppercase leading-[2.1]">
              {item.line0}
            </p>
            <h2 className="font-tradegothicbd text-l uppercase leading-[1.1]">
              {item.line1}
              <br />
              {item.line2}
            </h2>
            <p className="font-tradegothic text-xs uppercase">{item.line3}</p>
            <p className="font-tradegothic text-xs uppercase">{item.line4}</p>
            <p className="font-tradegothic text-xs uppercase">{item.line5}</p>
            {/* Popup thumbnail – positioned to the right */}
            <div className="absolute z-10 w-[500px] hidden group-hover:block left-full top-0 ml-2">
  <img src={item.thumb} alt={item.line2} className="w-[500px]" />
</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Work;