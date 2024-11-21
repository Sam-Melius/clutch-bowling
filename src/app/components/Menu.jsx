"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinksArray } from "./data/NavItems";
import NeonLasers from "./NeonLasers";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    
    <nav className=" ">
      <div className={isMenuOpen ? "hidden" : "lg:hidden flex flex-row"}>
        <button
          onClick={toggleMenu}
          className="underline underline-offset-4 hover-underline"
        >
          <AiOutlineMenu className="text-white h-8 w-8 hover:text-secondaryBlue"/>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 m-0 h-full w-full bg-primaryDark/95 text-white custom-backdrop-blur-lg z-[9000] animate__animated animate__slideInRight animate__fast 2xl:animate__faster">
          <NeonLasers />
          <div className="flex flex-col h-full justify-between items-end p-5">
            <button
              onClick={toggleMenu}
              className="z-[9991] underline underline-offset-4 hover-underline"
            >
              <AiOutlineClose className="h-8 w-10 text-white hover:text-secondaryBlue" />
            </button>
            {navLinksArray.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                onClick={toggleMenu}
                className="text-5xl md:text-7xl xl:text-7xl 2xl:text-8xl hover:text-secondaryBlue transition duration-300"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
