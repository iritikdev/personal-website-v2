import React, { useState } from "react";

import { close, logo1, menu } from "../assets";
import { navLinks } from "../constants";
function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="w-full flex py-6 justify-center item-center navbar">
        <img src={logo1} alt="hoobank" className="w-[80px]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-roboto font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-10`}
            >
              <a href={`#${nav.id}`}>
                <span className="text-gradient font-semibold">{`${
                  index + 1
                }.`}</span>{" "}
                {` ${nav.title}`}
              </a>
            </li>
          ))}
          <li className="font-roboto font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white">
            <a
              href=""
              className="cursor-pointer border-solid border-slate-500 border-2  rounded-[4px] px-3 py-2 text-gradient font-semibold"
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="hamburger"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex-col justify-center items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-roboto py-5 font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white mr-10`}
                >
                  <a href={`#${nav.id}`}>
                    <span className="text-gradient font-semibold">{`${
                      index + 1
                    }.`}</span>{" "}
                    {` ${nav.title}`}
                  </a>
                </li>
              ))}
              <li className="py-6 font-roboto font-normal cursor-pointer text-[16px] text-dimWhite hover:text-white">
                <a
                  href=""
                  className="cursor-pointer border-solid border-slate-500 border-2  rounded-[4px] px-3 py-2 text-gradient font-semibold"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
