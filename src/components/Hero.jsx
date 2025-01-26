import React, { useEffect, useState } from "react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="text-center z-10">
        <h1 className="font-tradegothic uppercase text-l text-white leading-[1.2]">
          {/* Explore Line */}
          <p
            className="relative"
            style={{
              transform: `translateX(-${offsetY * 0.1}px)`, // Moves left as you scroll down
              transition: "transform 0.1s ease-out",
            }}
          >
            elevate
          </p>

          {/* Imagine Line */}
          <p
            className="relative"
            style={{
              transform: `translateX(0)`, // Stays in the center
              transition: "transform 0.1s ease-out",
            }}
          >
            your
          </p>

          {/* Create Line */}
          <p
            className="relative"
            style={{
              transform: `translateX(${offsetY * 0.1}px)`, // Moves right as you scroll down
              transition: "transform 0.1s ease-out",
            }}
          >
            brand
          </p>
        </h1>
      </div>
    </section>
  );
};

export default Hero;