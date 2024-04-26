import Accordion from "./Accordion";
import { GiLaserSparks } from "react-icons/gi";
import { SiImagedotsc } from "react-icons/si";
import { PiCrosshairBold } from "react-icons/pi";
import LinkButton from "./Buttons/LinkButton";
import Image from "next/image";
import fireball from "../../../public/videos/fireball.gif";

export default function KeyFeaturesSection() {
  return (
    <section
      id="key-features"
      className="flex flex-col gap-8 lg:gap-12 px-5 py-10 lg:p-16 relative"
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-6xl text-center font-medium`}
      >
        Key Features
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex items-center justify-center col-span-1 p-5 lg:p-10 order-2 lg:order-1">
          <Image
            src={fireball}
            alt="fireball"
            className="flex object-cover w-full h-full"
          />
        </div>
        <div className="grid col-span-1 w-full lg:w-full grid-rows-3 lg:grid-rows-1 order-1 lg:order-2">
          <Accordion
            icon={<GiLaserSparks />}
            title="On-Lane Projection Mapping"
            content="Clutch Bowling projects games and effects which interact with objects on the lane. In order for these images to look perfect, we custom configure each system to map to your specific install."
          />
          <Accordion
            icon={<SiImagedotsc />}
            title="Anamorphic Image Engine"
            content="Just making sure the image is on the lane properly isn't enough. With our system the image is rendered from a perspective view so it always looks best when standing at the foul line."
          />
          <Accordion
            icon={<PiCrosshairBold />}
            title="Specto Tracking Integration"
            content="None of this would function without Specto. Whether you're destroying monsters, viewing passive effects, or hitting a target on a specific board, Specto helps us locate the ball in real time."
          />
        </div>
      </div>
      <div className="flex justify-center">
        <LinkButton
          linkTo="/about"
          buttonText="View All Features"
          variation="primary"
        />
      </div>
    </section>
  );
}
