import React from "react";

const Media = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex justify-center items-center"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/website.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>

      {/* Content */}
      <div className="text-left z-10 text-white hover:underline">
          <p className="font-tradegothic text-xs uppercase text-white hover:underline leading-[2.1]">
            + +
          </p>
          <h2 className="font-tradegothicbd text-l uppercase leading-[1.1]">
            ELEVATE
            <br />
            YOUR BRAND
          </h2>
          {/* <p className="font-tradegothic text-xs uppercase">
            Custom branding solutions to fit
          </p>
          <p className="font-tradegothic text-xs uppercase">
            your needs and your budget.
          </p> */}
        {/* <h1 className="font-tradegothic uppercase text-xs text-white leading-[1.2]">
          <p className="relative">elevate your brand</p>
          {/* <p className="relative">your</p>
          <p className="relative">brand</p>>/hi> */}
    </div>
    </section >
  );
};

export default Media;