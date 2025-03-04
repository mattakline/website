import React from "react";
import { brands, agencies, esports } from "../data/data";

const Clients = () => {
  return (
    <section id="clients" className="font-nunito py-6 text-xs uppercase">
      <div className="container max-w-[380px] py-6 px-4 sm:ml-[160px] md:ml-[180px]">
        {/* Brands Section */}
        <h2 className="uppercase mb-4 px-2 inline-block 
  border-l-2 border-black">
          Brands
        </h2>
        <div className="flex flex-wrap gap-4 mt-2 mb-6">
          {[...brands].sort().map((brand, index) => (
            <span key={`brand-${index}`} className="whitespace-nowrap">
              {brand}
            </span>
          ))}
        </div>

        {/* Agencies Section */}
        <h2 className="mt-4 uppercase mb-4 px-2 inline-block 
  border-l-2 border-black">
          Agencies
        </h2>       <div className="flex flex-wrap mt-2 gap-4 mb-6">
          {[...agencies].sort().map((agency, index) => (
            <span key={`agency-${index}`} className="whitespace-nowrap">
              {agency}
            </span>
          ))}
        </div>
        <h2 className="mt-4 uppercase mb-4 px-2 inline-block 
  border-l-2 border-black">
          Esports
        </h2>       <div className="flex flex-wrap mt-2 gap-4">
          {[...esports].sort().map((esport, index) => (
            <span key={`esport-${index}`} className="whitespace-nowrap">
              {esport}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;