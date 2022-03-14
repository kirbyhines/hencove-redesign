/** @format */

import React, { useState } from 'react';
import { CloseRounded, MenuRounded } from '@mui/icons-material';

function MobileMenu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className=" z-50">
      <div className=" md:hidden mr-3">
        <MenuRounded
          className="text-orange cursor-pointer "
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        {toggleMenu && (
          <div className="h-screen bg-blue absolute right-0 top-0 w-2/5">
            <CloseRounded
              className="text-[30px] text-[#fff] absolute top-3 right-3 cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
            <div className="flex flex-col justify-center items-start py-5 pl-5">
              <h2 className=" text-[#fff] font-semibold tracking-widest cursor-pointer my-3 hover:underline hover:decoration-orange underline-offset-1">
                + US
              </h2>
              <h2 className="text-[#fff] font-semibold tracking-widest cursor-pointer my-3 hover:underline hover:decoration-orange underline-offset-1">
                + OUR WORK
              </h2>
              <h2 className="text-[#fff] font-semibold tracking-widest cursor-pointer my-3 hover:underline hover:decoration-orange underline-offset-1">
                + YOU
              </h2>
              <h2 className="text-[#fff] font-semibold tracking-widest cursor-pointer mt-3 mb-5 hover:underline hover:decoration-orange underline-offset-1">
                + BLOG
              </h2>

              <button className="text-[#fff] font-semibold tracking-widest text-sm py-2 px-2 bg-orange rounded-md">
                LET`&apos;`S CHAT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
