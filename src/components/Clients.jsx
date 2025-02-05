import React from "react";
import { brands, agencies } from "../data/data";

const Clients = () => {
  return (
    <section id="clients" className="font-tradegothic text-xs uppercase" style={{marginLeft: "188px"}}>
      <div className="container mx-auto px-4 py-12">
        <h2 className="uppercase mb-4">Brands _</h2>
        <ul className="mb-4">
          {brands.map((brand, index) => (
            <li key={`brand-${index}`}>
              {brand}
            </li>
          ))}
        </ul>
        <h2 className="uppercase mb-4">Agencies _</h2>
        <ul>
          {agencies.map((agency, index) => (
            <li key={`agency-${index}`}>
              {agency}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
