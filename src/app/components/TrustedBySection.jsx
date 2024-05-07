import { bowlingCentersArray } from "./data/BowlingCenters";
import BowlingCenterCard from "./BowlingCenterCard";

export default function TrustedBySection() {
  return (
    <section
      id="trusted-by"
      className="h-fit grid gap-y-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gray-400 p-10 pb-0"
    >
      <p className="col-span-full text-center text-xl text-black font-medium">
        Trusted By
      </p>
      {bowlingCentersArray.map((item, index) => (
        <figure key={index}>
          <BowlingCenterCard name={item.name} logo={item.logo} url={item.url} />
        </figure>
      ))}
    </section>
  );
}
