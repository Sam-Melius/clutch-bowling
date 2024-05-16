"use client";

import { useState, useRef } from "react";
import { CgClose } from "react-icons/cg";

export default function PatchNoteCard({ patchData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is opened
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
  };

  const formatKey = (key) => {
    if (key === "iosUpdates") {
      return "iOS Updates";
    }
    return key
      .replace(/([A-Z])/g, " $1") // Add a space before capital letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
  };

  return (
    <>
      <div
        className="flex flex-col gap-3 h-full col-span-1 border border-gray-600 hover:border-gray-200 hover:bg-gray-500 text-clutchBlue-300 hover:text-white transition duration-500 rounded-lg w-auto hover:cursor-pointer p-5"
        onClick={openModal}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="border-b border-gray-600 pb-2">
          <h5 className="text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-medium">
            {patchData.patchNumber}
          </h5>
        </div>

        <div className="flex flex-wrap gap-2 text-white pt-2 pb-1">
          {Object.entries(patchData.changes).map(([key, value]) => {
            let displayKey = key;
            if (key === "iosUpdates") {
              displayKey = "iOS Updates";
            } else if (key === "engineUpdates") {
              displayKey = "Engine Updates";
            } else if (key === "universalUpdates") {
              displayKey = "Universal Updates";
            } else if (key === "androidUpdates") {
              displayKey = "Android Updates";
            } else if (key === "adminPanelUpdates") {
              displayKey = "Admin Panel Updates";
            } else if (key === "systemReworks") {
              displayKey = "System Reworks";
            } else if (key === "newEffects") {
              displayKey = "New Effects";
            } else if (key === "bugFixes") {
              displayKey = "Bug Fixes";
            }

            return (
              value && (
                <p
                  key={key}
                  className="text-xs h-fit w-fit px-2 py-1 border rounded-full bg-gray-600 hover:bg-clutchBlue-700"
                >
                  {displayKey}
                </p>
              )
            );
          })}
        </div>
      </div>
      {isModalOpen && (
        <div
          ref={modalRef}
          className="fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-[10000]"
        >
          <div className="bg-primaryDark border border-gray-400 rounded-lg p-5 lg:p-10 relative flex flex-col gap-5 h-svh m-5 md:h-3/4 md:w-3/4 overflow-y-auto animate__animated animate__fadeIn animate__faster">
            <div className="flex flex-col gap-2 h-fit w-full border-b border-gray-600 pb-5">
              <p className="text-xs md:text-sm text-gray-400 lg:pl-1">
                Updated: {patchData.updatedAt}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-7xl 2xl:text-8xl font-medium text-clutchBlue-300">
                Patch Notes {patchData.patchNumber}
              </h2>
            </div>

            <div className="flex h-fit w-full pb-3 border-b border-gray-600">
              <h2 className="text-lg md:text-xl">{patchData.notes}</h2>
            </div>

            {Object.entries(patchData.changes).map(
              ([key, value]) =>
                value &&
                patchData.changes &&
                patchData.changes[key] && (
                  <div
                    key={key}
                    className="flex flex-col lg:flex-row gap-3 h-fit w-full pb-5 border-b border-gray-600"
                  >
                    <h2 className="text-xl w-full lg:w-1/2 text-gray-300">
                      {formatKey(key)}
                    </h2>
                    <ul className="flex flex-col gap-2 w-full lg:w-1/2 list-disc pl-10 lg:pl-0">
                      {Array.isArray(patchData.changes[key]) ? (
                        patchData.changes[key].map((note, index) => (
                          <li key={index}>{note}</li>
                        ))
                      ) : (
                        <li>{patchData.changes[key]}</li>
                      )}
                    </ul>
                  </div>
                )
            )}

            <button
              onClick={closeModal}
              className="absolute top-5 right-10 text-2xl hover:text-clutchBlue-300 transition duration-300"
            >
              <div className="fixed">
                <CgClose />
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
