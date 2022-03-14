/** @format */

import React from 'react';
import { EmailOutlined, Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Email } from '@mui/icons-material';

function Footer() {
  return (
    <div className="bg-blue flex flex-col justify-center items-center py-10 mt-10 md:flex-row md:justify-start relative">
      {/* Subscribe/Links */}
      <div className="flex flex-col justify-center items-center w-5/6 md:w-1/2 md:items-start md:ml-14">
        <h1 className="text-[#fff] font-light text-2xl tracking-widest mb-5">
          SUBSCRIBE
        </h1>
        <p className="text-xs text-[#fff] text-center leading-5 tracking-wider mb-5 md:w-80 md:text-left">
          Get our blog straight to your inbox for thoughts on all things
          marketing in complex industries.
        </p>

        <div className="flex flex-row justify-between w-80">
          <input
            type="text"
            className="bg-[#FFF] py-2 rounded-md placeholder:pl-2 outline-orange"
            placeholder="Email Address"
          />
          <button className="text-[#fff] font-semibold tracking-widest text-sm py-3 px-3  bg-orange rounded-md shadow-md  hover:scale-105">
            SIGN UP
          </button>
        </div>

        <div className="mt-5 flex flex-row w-40 justify-evenly md:justify-between">
          <div className="bg-[#fff] p-2 rounded-full text-center text-blue cursor-pointer">
            <LinkedIn className="" />
          </div>
          <div className="bg-[#fff] p-2 rounded-full text-center text-blue cursor-pointer">
            <Email />
          </div>
          <div className="bg-[#fff] p-2 rounded-full text-center text-blue cursor-pointer">
            <Twitter />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex flex-row justify-around  items- w-1/2 absolute top-10 left-1/2">
        <div className="text-[#fff]">
          <h1 className="text-xl font-semibold mb-2 cursor-pointer">US</h1>
          <p className="mb-2 font-thin cursor-pointer">Philosophy</p>
          <p className="mb-2 font-thin cursor-pointer">Values</p>
          <p className="mb-2 font-thin cursor-pointer">Storytellers</p>
          <p className="mb-2 font-thin cursor-pointer">Careers</p>
        </div>
        <div className="text-[#fff]">
          <h1 className="text-xl font-semibold mb-2 cursor-pointer">
            OUR WORK
          </h1>
          <p className="mb-2 font-thin cursor-pointer">Identity</p>
          <p className="mb-2 font-thin cursor-pointer">Awareness</p>
          <p className="mb-2 font-thin cursor-pointer">Engagement</p>
          <p className="mb-2 font-thin cursor-pointer">Reputation</p>
        </div>
        <div className="text-[#fff]">
          <h1 className="text-xl font-semibold mb-2 cursor-pointer">YOU</h1>
          <p className="mb-2 font-thin cursor-pointer">Areas Of Focus</p>
        </div>
        <div className="text-[#fff]">
          <h1 className="text-xl font-semibold mb-2 cursor-pointer">BLOG</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
