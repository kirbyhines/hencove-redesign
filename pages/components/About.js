/** @format */

import React from 'react';

function About() {
  return (
    <div className="flex flex-col md:flex-row mt-10 md:w-[90vw] mx-auto gap-5">
      <img
        src="https://images.squarespace-cdn.com/content/v1/558abaf2e4b0dae1a3ded08c/1554127680893-IZON5E6W4BT34FIZT93K/IMG_8530_1_2_tonemapped_edited-1.jpg?format=1000w"
        alt=""
        className=" w-[80vw] object-contain rounded-lg  mx-auto md:w-[40vw] "
      />
      <div className="flex flex-col w-[80vw] mx-auto">
        <h1 className="text-4xl font-extralight mb-2 text-blue">
          About Our Name
        </h1>
        <p className="text-sm font-extralight text-blue leading-5 w-[90%]  mb-5">
          The name Hencove is inspired by a tranquil harbor in Massachusetts
          called Hen`&apos;`s Cove. Every brand is on a journey and we are the
          proud co-captains with our clients on their voyage. Based in
          Watertown, Hencove offers both the personal feel of a boutique shop
          and the power of a full-service marketing agency. As a values-based
          agency, we are guided by a set of core principles that influence how
          we think, act and work.
        </p>
        <p className="text-blue font-semibold cursor-pointer">
          Learn about our values
        </p>
      </div>
    </div>
  );
}

export default About;
