import { FaArrowRight } from "react-icons/fa";
import LinkButton from "./Buttons/LinkButton";

export default function GridlinesSection({
  variant,
  id,
  heading,
  linkText,
  linkTo,
}) {
  if (variant === "large") {
    return (
      <section
        id={id}
        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-0.5 h-fit bg-clutchBlue-400 relative"
      >
        {/* Mobile gridlines */}
        {[...Array(24)].map((_, index) => (
          <div
            key={index}
            className="bg-primaryDark aspect-square md:hidden shadow-inner shadow-clutchBlue-400"
          ></div>
        ))}
        {/* Tablet gridlines */}
        {[...Array(48)].map((_, index) => (
          <div
            key={index}
            className="bg-primaryDark aspect-square hidden md:flex lg:hidden shadow-inner shadow-clutchBlue-400"
          ></div>
        ))}
        {/* Desktop gridlines */}
        {[...Array(60)].map((_, index) => (
          <div
            key={index}
            className="bg-primaryDark aspect-square hidden lg:flex shadow-inner shadow-clutchBlue-400"
          ></div>
        ))}
        <div className="absolute w-full h-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 place-items-center">
          <div className="flex flex-col gap-2 md:gap-4 col-span-full">
            <h4 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl p-5 md:p-10 lg:px-20 text-center">
              {heading}
            </h4>
            <div className="flex mx-auto">
              <LinkButton
                linkText={linkText}
                linkTo={linkTo}
                icon={<FaArrowRight />}
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } else if (variant === "small") {
    return (
      <section
        id={id}
        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-0.5 h-fit bg-clutchBlue-400 relative"
      >
        {/* Mobile gridlines */}
        {[...Array(16)].map((_, index) => (
          <div
            key={index}
            className="bg-primaryDark aspect-square md:hidden shadow-inner shadow-clutchBlue-400"
          ></div>
        ))}
        {/* Tablet gridlines */}
        {[...Array(32)].map((_, index) => (
          <div
            key={index}
            className="bg-primaryDark aspect-square hidden md:flex lg:hidden shadow-inner shadow-clutchBlue-400"
          ></div>
        ))}
        {/* Desktop gridlines */}
        {[...Array(48)].map((_, index) => (
          <div
            key={index}
            className="bg-primaryDark aspect-square hidden lg:flex shadow-inner shadow-clutchBlue-400"
          ></div>
        ))}
        <div className="absolute w-full h-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 place-items-center">
          <div className="flex flex-col gap-2 md:gap-4 col-span-full">
            <h4 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl p-5 md:p-10 lg:px-20 text-center">
              {heading}
            </h4>
            <div className="flex mx-auto">
              <LinkButton
                linkText={linkText}
                linkTo={linkTo}
                icon={<FaArrowRight />}
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <div>Invalid variant type</div>;
  }
}
