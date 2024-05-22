import { bowlingCentersArray } from "./data/BowlingCenters";
import BowlingCenterCard from "./BowlingCenterCard";
import GradientSection from "./GradientSection";
import LinkButton from "./Buttons/LinkButton";
import { FaArrowRight } from "react-icons/fa";

export default function TrustedBySection() {
  return (
    <>
      <GradientSection variant="light" size="small" />
      <section
        id="trusted-by"
        className="h-fit grid gap-y-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-clutchBlue-100 p-10"
      >
        <p className="col-span-full text-center text-2xl text-black font-medium">
          Trusted By
        </p>
        {bowlingCentersArray.map((item, index) => (
          <figure
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <BowlingCenterCard
              name={item.name}
              logo={item.logo}
              url={item.url}
            />
          </figure>
        ))}
        <div className="col-span-full mx-auto justify-center items-center">
          <LinkButton
            linkText="View all"
            linkTo="/clutch-centers"
            variant="black"
            icon={<FaArrowRight />}
          />
        </div>
      </section>
      <GradientSection variant="light" size="small" isRotated />
    </>
  );
}
