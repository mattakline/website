import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Fullscreen Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
      >
        <source src="./videos/website.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better readability (optional) */}
      {/* <div className="absolute inset-0 bg-black opacity-40 -z-10"></div> */}

      {/* Content */}
      {/* <div className="relative z-10 min-w-[300px]">
        <div className="font-tradegothic ml-4 mr-10 sm:ml-[40px] md:ml-[46px] text-xs uppercase space-y-4">
          <div className="font-tradegothic text-xxs uppercase mb-[130px] mt-3">
            <h2>Producer / Director</h2>
          </div>
          <div className="relative group">
            <h2 className="relative before:content-['+'] before:absolute before:-left-3 before:opacity-0 group-hover:before:opacity-100">
              Strategy
            </h2>
            <span className="absolute top-[152px] left-0 font-tradegothic text-xs uppercase hidden group-hover:block">
              Insights for modern brands, campaigns, and content.
            </span>
          </div>
          <div className="relative group">
            <h2 className="relative before:content-['+'] before:absolute before:-left-3 before:opacity-0 group-hover:before:opacity-100">
              Production
            </h2>
            <span className="absolute top-[120px] left-0 font-tradegothic text-xs uppercase hidden group-hover:block">
              Hands-on producer delivering quality media at any scale.
            </span>
          </div>
          <div className="relative group">
            <h2 className="relative before:content-['+'] before:absolute before:-left-3 before:opacity-0 group-hover:before:opacity-100">
              Marketing
            </h2>
            <span className="absolute top-[92px] left-0 font-tradegothic text-xs uppercase hidden group-hover:block">
              Digital native, multidisciplinary marketing expert.
            </span>
          </div>
          <div className="relative group">
            <h2 className="relative before:content-['+'] before:absolute before:-left-3 before:opacity-0 group-hover:before:opacity-100">
              Leadership
            </h2>
            <span className="absolute top-[56px] left-0 mt-1 font-tradegothic text-xs uppercase hidden group-hover:block">
              Proven ability to lead complex projects for top companies.
            </span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;