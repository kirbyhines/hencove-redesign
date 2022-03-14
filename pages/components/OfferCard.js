/** @format */

import React from 'react';

function OfferCard({ title, image, description }) {
  return (
    <div className=" py-3 px-2 border-2 rounded-lg border-orange border-opacity-30 hover:border-opacity-100 cursor-pointer text-blue font-medium shadow-md h-[500px] w-[90vw] md:w-[400px] lg:w-[500px] relative flex flex-col items-center hover:scale-105">
      <img
        src={image}
        alt=""
        className="object-cover h-4/5 absolute top-3 w-[95%] rounded-lg shadow-md"
      />
      <h1 className="text-2xl absolute bottom-10 left-3">{title}</h1>
      <p className=" opacity-70 font-light absolute bottom-5 left-3">
        {description}
      </p>
    </div>
  );
}

export default OfferCard;
