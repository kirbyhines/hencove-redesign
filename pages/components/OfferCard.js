/** @format */

import React from 'react';

function OfferCard({ title, image, description }) {
  return (
    <div className=" py-3 px-2 border-2 rounded-lg border-orange border-opacity-30 hover:border-opacity-100 cursor-pointer text-blue font-medium shadow-md h-[525px] w-[90vw] md:w-[400px] lg:w-[500px] relative flex flex-col items-center hover:scale-105">
      <img
        src={image}
        alt=""
        className="object-cover h-4/5 absolute top-3 w-[95%] rounded-lg shadow-md"
      />
      <div className=" absolute bottom-2 left-3">
        <h1 className="text-2xl">{title}</h1>
        <p className=" opacity-70 font-light">{description}</p>
      </div>
    </div>
  );
}

export default OfferCard;
