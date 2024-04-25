import { bowlingCentersArray } from "./data/BowlingCenters";
import BowlingCenterCard from "./BowlingCenterCard";

export default function TrustedBySection() {
  return (
    <section
      id="trusted-by"
      className="h-fit grid gap-5 lg:gap-x-10 lg:gap-y-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white p-10"
    >
      <h3 className="col-span-full text-center text-xl text-black">
        Trusted By
      </h3>
      {bowlingCentersArray.map((item, index) => (
        <figure key={index}>
          <BowlingCenterCard name={item.name} logo={item.logo} url={item.url} />
        </figure>
      ))}
    </section>
  );
}
