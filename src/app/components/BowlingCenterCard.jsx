import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function BowlingCenterCard({ center, viewMode }) {
  if (viewMode === "grid") {
    return (
      <div
        className={`flex flex-col lg:flex-row items-start justify-start gap-5 border border-gray-600 hover:border-gray-200 hover:bg-gray-500/20 transition-all duration-500 rounded-lg p-5 bg-transparent custom-backdrop-blur-lg w-full h-full"}`}
      >
        <div className="w-full lg:w-3/5 flex flex-col gap-5">
          <div className=" border-gray-500 flex flex-col gap-1">
            <p className="text-gray-500 uppercase text-xs">Name</p>
            <p className="text-clutchBlue-300 text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-medium">
              {center.name}
            </p>
          </div>
          <div className=" border-gray-500 marker:flex flex-col gap-1">
            <p className="text-gray-500 uppercase text-xs">Location</p>
            <p className="text-white text-lg">{center.location}</p>
          </div>
          <div className=" border-gray-500 grid grid-cols-3 gap-5 w-full">
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 uppercase text-xs">Website</p>
              <a
                href={center.url}
                target="_blank"
                className="text-white hover:text-clutchBlue-300 text-2xl"
              >
                <FiExternalLink />
              </a>
            </div>
            {center.facebook && (
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 uppercase text-xs">Facebook</p>
                <a
                  href={center.facebook}
                  target="_blank"
                  className="text-white hover:text-clutchBlue-300 text-2xl"
                >
                  <AiFillFacebook />
                </a>
              </div>
            )}
            {center.instagram && (
              <div className="flex flex-col gap-2">
                <p className="text-gray-500 uppercase text-xs">Instagram</p>
                <a
                  href={center.instagram}
                  target="_blank"
                  className="text-white hover:text-clutchBlue-300 text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-2 justify-between">
          <p className="text-gray-500 uppercase text-xs">Logo</p>
          <Image
            src={center.imageUrl}
            alt={center.name}
            className="object-fit h-auto w-auto"
            height={center.height}
            width={center.width}
            blurDataURL={center.blurDataURL}
          />
        </div>
      </div>
    );
  } else if (viewMode === "list") {
    return (
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-5 border-b border-gray-600 p-5">
        <div className="col-span-full md:col-span-3 lg:col-span-5 flex flex-col gap-1">
          <p className="text-gray-500 uppercase text-xs">Name</p>
          <p className="text-clutchBlue-300 text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium">
            {center.name}
          </p>
        </div>

        <div className="col-span-full md:col-span-3 lg:col-span-4 flex flex-col gap-1">
          <p className="text-gray-500 uppercase text-xs">Location</p>
          <p className="text-white text-lg">{center.location}</p>
        </div>

        <div className="col-span-full md:col-span-3 md:col-start-4 lg:col-span-3 flex flex-row justify-between md:justify-normal gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 uppercase text-xs">Website</p>
            <a
              href={center.url}
              target="_blank"
              className="text-white hover:text-clutchBlue-300 text-2xl"
            >
              <FiExternalLink />
            </a>
          </div>

          {center.facebook && (
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 uppercase text-xs">Facebook</p>
              <a
                href={center.facebook}
                target="_blank"
                className="text-white hover:text-clutchBlue-300 text-2xl"
              >
                <AiFillFacebook />
              </a>
            </div>
          )}

          {center.instagram && (
            <div className="flex flex-col gap-2">
              <p className="text-gray-500 uppercase text-xs">Instagram</p>
              <a
                href={center.instagram}
                target="_blank"
                className="text-white hover:text-clutchBlue-300 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
