import { bowlingCentersArray } from "./data/BowlingCenters";
import BowlingCenterCard from "./BowlingCenterCard";
import GradientSection from "./GradientSection";

export default function TrustedBySection() {
  return (
    <>
      <GradientSection variant="light" size="small" />
      <section
        id="trusted-by"
        className="h-fit grid gap-y-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-clutchBlue-100 p-10 pb-0"
      >
        <p className="col-span-full text-center text-xl text-black font-medium">
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
      </section>
      <GradientSection variant="light" size="small" isRotated />
    </>
  );
}
