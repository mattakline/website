import React from "react";
import { brands, agencies } from "../data/data";

const Clients = () => {
  return (
    <section id="clients" className="font-tradegothic text-xs uppercase" style={{ marginLeft: "186px" }}>
      <div className="container mx-auto px-4 py-12">
        <h2 className="uppercase mb-4">Brands _</h2>
        <div className="mb-4">
          {[...brands].sort().map((brand, index) => (
            <p key={`brand-${index}`}>{brand}</p>
          ))}
        </div>
        <h2 className="uppercase mb-4">Agencies _</h2>
        <ul>
          {[...agencies].sort().map((agency, index) => (
            <li key={`agency-${index}`}>{agency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;