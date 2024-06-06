"use client";

import { useState } from "react";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import placeholder from "../../../public/images/placeholder.png";
import { MdOutlineClose } from "react-icons/md";

export default function LaneEffectCard({ effectData }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <figure
      className="flex flex-col gap-2 relative"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
    >
      {/* <button
        className="absolute top-0 right-0 text-2xl z-10 bg-clutchBlue-800 hover:bg-clutchBlue-600 hover:cursor-pointer rounded-tr-md rounded-bl-md p-1 h-8 w-8"
        onClick={() => setShowModal(true)}
      >
        <FaEye />
      </button> */}

      <Image
        src={effectData.imageUrl}
        alt={effectData.name}
        className="h-auto w-full object-cover rounded-lg"
        placeholder="blur"
        blurDataURL={effectData.blurDataUrl}
        height={effectData.height}
        width={effectData.width}
      />

      <figcaption className="flex flex-col font-medium md:text-lg">
        {effectData.name}
      </figcaption>

      {/* {showModal && (
        <div className="fixed inset-0 z-50">
          <div className="rounded-lg relative">
            <button
              className="absolute top-0 right-0 text-2xl z-10 bg-clutchBlue-800 hover:bg-clutchBlue-600 hover:cursor-pointer rounded-tr-md rounded-bl-md p-1 h-8 w-8"
              onClick={() => setShowModal(false)}
            >
              <MdOutlineClose />
            </button>
            <Image
              src={placeholder}
              alt="placeholder"
              className="max-w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      )} */}
    </figure>
  );
}
