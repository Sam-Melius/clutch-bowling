"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navLinksArray } from "./data/NavItems";
import ContactButton from "./ContactButton";
import NeonLasers from "./NeonLasers";

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className={isMenuOpen ? "hidden" : "flex flex-row"}>
        <button
          onClick={toggleMenu}
          className="underline underline-offset-4 hover-underline"
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-primaryDark/90 text-white backdrop-blur-md z-[9000] animate__animated animate__slideInRight animate__fast">
          <NeonLasers />

          <div className="flex flex-col h-full justify-start space-y-12 items-end mt-5 mr-5">
            <button
              onClick={toggleMenu}
              className="z-[9991] underline underline-offset-4 hover-underline"
            >
              Close
            </button>
            {navLinksArray.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                onClick={toggleMenu}
                className="text-3xl lg:text-5xl hover:text-clutchBlue-700 transition duration-300"
              >
                {item.text}
              </Link>
            ))}
            <p className="text-3xl lg:text-5xl hover:text-clutchBlue-700 transition duration-300">
              <ContactButton buttonText="Contact Us" />
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
