import React, { useEffect } from "react";

const Hero = () => {
  // Prevent scrolling on mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when unmounting
    };
  }, []);

  return (
    <section id="home" className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
      {/* Fullscreen Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="./videos/website.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better readability (optional) */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

      {/* Content - Uncomment if needed */}
      {/* <div className="relative z-10">
        <h1 className="text-white text-4xl">Your Hero Content</h1>
      </div> */}
    </section>
  );
};

export default Hero;