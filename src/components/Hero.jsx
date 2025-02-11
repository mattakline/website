import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex"
    >
      <div className="min-w-{300px">
     
      <div className="font-tradegothic ml-4 mr-10 sm:ml-[40px] md:ml-[46px] text-xs uppercase f left-20 sm:left-40 md:left-80 space-y-4">
      <div className="font-tradegothic text-xxs uppercase mb-[130px] mt-3">
        <h2>Creative Producer</h2>
      </div>
      <div className="relative group">
        <h2 className="relative before:content-['+'] before:absolute before:-left-3 before:opacity-0 group-hover:before:opacity-100">
        Strategy
        </h2>
        <span className="absolute top-[152px] left-0 font-tradegothic text-xs uppercase hidden group-hover:block">
          Creator of high impact brands, campaigns, and content.
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
        <span className="absolute top-[88px] left-0 font-tradegothic text-xs uppercase hidden group-hover:block">
        Experienced marketer managing web, email, SEO/SEM, social, and events.</span>
      </div>
      <div className="relative group">
        <h2 className="relative before:content-['+'] before:absolute before:-left-3 before:opacity-0 group-hover:before:opacity-100">
          Leadership
        </h2>
        <span className="absolute top-[56px] left-0 mt-1 font-tradegothic text-xs uppercase hidden group-hover:block">
        Demonstrated ability to lead large-scale projects for top clients.
                </span>
      </div>
    </div>
      </div>
      {/* Video Background */}
      <video
        className="fixed top-[120px] left-[120px] sm:left-[160px] md:left-[198px] w-[720px] h-[405px] object-cover -z-10"
        autoPlay
        muted
        loop
      >
        <source src="/videos/website.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-65"></div> */}

      {/* Content */}

    </section >
  );
};

export default Hero;