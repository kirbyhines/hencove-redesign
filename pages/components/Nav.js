/** @format */

import React from 'react';
import { MenuRounded } from '@mui/icons-material';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className=" flex flex-row w-screen items-center justify-between absolute top-0  shadow-md ">
      {/* left */}
      <div className="font-body  py-3 mx-2">
        <h1 className=" text-4xl font-bold text-orange">HENCOVE</h1>
      </div>

      {/* right */}
      <MobileMenu />
      <div className="md:flex flex-row items-center my-3 pl-5 hidden">
        <h2 className=" text-orange font-semibold tracking-widest cursor-pointer mr-5 hover:underline hover:decoration-blue underline-offset-1">
          + US
        </h2>
        <h2 className="text-orange font-semibold tracking-widest cursor-pointer mr-5 hover:underline hover:decoration-blue underline-offset-1">
          + OUR WORK
        </h2>
        <h2 className="text-orange font-semibold tracking-widest cursor-pointer mr-5 hover:underline hover:decoration-blue underline-offset-1">
          + YOU
        </h2>
        <h2 className="text-orange font-semibold tracking-widest cursor-pointer mr-5 hover:underline hover:decoration-blue underline-offset-1">
          + BLOG
        </h2>

        <button className="text-[#fff] font-semibold tracking-widest text-sm py-2 px-2 mr-5 bg-orange rounded-md hover:scale-105">
          LET&apos;S CHAT
        </button>
      </div>
    </div>
  );
}

export default Nav;
