import React from "react";

const About = () => {
  return (
    <section id="contact" className="py-6 bg-white-100 text-xs font-nunito">
         <h2 className="uppercase mb-2 px-2 ml-[15px] sm:ml-[176px] md:ml-[196px] mt-[24px] inline-block border-l-2 border-black">
          About
        </h2>
      <div className="container py-4 mx-auto max-w-[380px] px-4 sm:ml-[160px] md:ml-[180px] text-left font-tradegothic text-xs uppercase">
        <h2>
          I am an experienced Executive Producer and marketing strategist with 15+ years in media, live events, and digital content.
        </h2>
        <br />
        <h2>
          Throughout my career, I have led high-profile productions, managed global partnerships, and developed content that has reached millions.
        </h2>
        <br />
        <h2>
          After graduating from the University of Michigan, I moved to Germany to produce live broadcasts for record-breaking international esports events.
        </h2>
        <br />
        <h2>
          In 2016, I returned to the US and produced written and video content for Mashable in New York City.
        </h2>
        <br />
        <h2>
          In 2020, I joined Microsoft to plan and execute global marketing events, manage vendor and brand relationships, and lead all broadcast, content, and engagement initiatives for the Halo Championship Series.
        </h2>
      </div>

      {/* Contact Information - Now Below the Blurb */}
      {/* <h2 className="uppercase mb-2 px-2 ml-[15px] sm:ml-[176px] md:ml-[196px] mt-[24px] inline-block border-l-2 border-black">
          Contact
        </h2> */}
      <div className="container py-4 mx-auto max-w-[280px] px-4 sm:ml-[160px] md:ml-[180px] text-left font-nunito text-xs uppercase">
        <h2>Matthew Kline</h2>
        <p>607 Shelby St. Ste 700</p>
        <p>Detroit 48226</p>
        <br />
        <p className="underline">mattakline@gmail.com</p>
        <br />
        <a href="https://www.linkedin.com/in/mattakline/" className="underline">linkedin.com/in/mattakline/</a>
      </div>
    </section>
  );
};

export default About;