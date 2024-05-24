import { bowlingCentersArray } from "./data/BowlingCenters";
import BowlingCenterCard from "./BowlingCenterCard";
import LinkButton from "./Buttons/LinkButton";
import { FaArrowRight } from "react-icons/fa";

export default function TrustedBySection() {
  return (
    <>
      <section
        id="trusted-by"
        className="h-fit grid gap-y-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-20 border-t border-b border-dashed border-[#4A4A4A]"
      >
        <p className="col-span-full text-center text-xl font-medium pb-5 lg:pb-0">
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
            variant="secondary"
            icon={<FaArrowRight />}
          />
        </div>
      </section>
    </>
  );
}
