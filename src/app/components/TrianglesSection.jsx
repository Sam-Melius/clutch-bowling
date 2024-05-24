import { FaArrowRight } from "react-icons/fa";
import LinkButton from "./Buttons/LinkButton";
import laneTriangles from "../../../public/images/lane-triangles.svg";
import Image from "next/image";

export default function TrianglesSection({
  id,
  heading,
  linkText,
  linkTo,
  isContact,
}) {
  return (
    <section
      id={id}
      className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-20 bg-primaryDark border-b border-t border-dashed border-[#4A4A4A] px-5 md:px-20 pt-20 relative"
    >
      <Image src={laneTriangles} className="flex opacity-50 rotate-180" />
      <Image
        src={laneTriangles}
        className="hidden lg:flex opacity-50 rotate-180"
      />

      <Image
        src={laneTriangles}
        className="opacity-50 hidden xl:flex rotate-180"
      />
      <Image
        src={laneTriangles}
        className="opacity-50 hidden 2xl:flex rotate-180"
      />

      <div className="absolute w-full h-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 place-items-center">
        <div
          className="flex flex-col gap-2 md:gap-4 col-span-full"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h4 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl p-5 md:p-10 lg:px-20 text-center">
            {heading}
          </h4>
          <div className="flex mx-auto">
            {isContact ? (
              <LinkButton
                linkText={linkText}
                icon={<FaArrowRight />}
                variant="secondary"
                isContact
              />
            ) : (
              <LinkButton
                linkText={linkText}
                linkTo={linkTo}
                icon={<FaArrowRight />}
                variant="secondary"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
