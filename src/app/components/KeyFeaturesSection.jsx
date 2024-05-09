import FeatureCard from "./FeatureCard";
import { GiLaserSparks } from "react-icons/gi";
import { SiImagedotsc } from "react-icons/si";
import { PiCrosshairBold } from "react-icons/pi";
import LinkButton from "./Buttons/LinkButton";
import { FaArrowRight } from "react-icons/fa";

export default function KeyFeaturesSection() {
  return (
    <section
      id="key-features"
      className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10 py-20"
    >
      <h3 className="col-span-full text-4xl md:text-5xl">Key Features</h3>
      <FeatureCard
        variant="small"
        icon={<GiLaserSparks />}
        title="On-Lane Projection Mapping"
        content="Clutch Bowling projects games and effects which interact with objects on the lane. In order for these images to look perfect, we custom configure each system to map to your specific install."
      />
      <FeatureCard
        variant="small"
        icon={<SiImagedotsc />}
        title="Anamorphic Image Engine"
        content="Just making sure the image is on the lane properly isn't enough, with our system the image is rendered from a perspective view so it always looks best when standing at the foul line."
      />
      <FeatureCard
        variant="small"
        icon={<PiCrosshairBold />}
        title="Specto Tracking Integration"
        content="None of this would function without Specto. Whether you're destroying monsters, viewing passive effects, or hitting a target on a specific board, Specto helps us locate the ball in real time."
      />
      <div className="col-span-full">
        <LinkButton
          linkText="View all features"
          linkTo="/about"
          icon={<FaArrowRight />}
          variant="secondary"
        />
      </div>
    </section>
  );
}
