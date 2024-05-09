import LinkButton from "../components/Buttons/LinkButton";
import { FaArrowRight } from "react-icons/fa";
import FeatureCard from "../components/FeatureCard";
import { GiLaserSparks } from "react-icons/gi";
import { SiImagedotsc } from "react-icons/si";
import { PiCrosshairBold } from "react-icons/pi";
import Breadcrumbs from "../components/Breadcrumbs";

export default function AboutPage() {
  return (
    <main className="pt-28">
      <section className="flex flex-col gap-4 h-fit w-full relative">
        <h2 className="text-3xl md:text-6xl xl:text-7xl font-medium pt-5 lg:px-10">
          About
        </h2>
        <Breadcrumbs />
      </section>

      <section>
        <div className="flex flex-col h-full w-full">
          <div className="h-[60px] bg-red-400"></div>
          <div className="flex flex-col gap-5 p-10">
            <h4 className="text-5xl md:text-7xl lg:text-8xl">
              Built to impress.
            </h4>
            <p className="lg:w-1/2">
              With precise tracking and crisp imaging we strive to immerse
              bowlers of all ages in our system. Clutch Bowling is a new kind of
              bowling experience that combines vibrant graphics and motion
              tracking with the sport of bowling.
            </p>
          </div>

          <div className="h-[20px] bg-orange-400"></div>
          <div className="h-[20px]  bg-yellow-400"></div>
          <div className="h-[20px] bg-green-400"></div>
        </div>
      </section>

      <section
        id="all-features"
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10"
      >
        <h3 className="col-span-full text-4xl md:text-5xl">All Features</h3>
        <FeatureCard
          icon={<GiLaserSparks />}
          title="On-Lane Projection Mapping"
          content="Clutch Bowling projects games and effects which interact with objects on the lane. In order for these images to look perfect, we custom configure each system to map to your specific install."
        />
        <FeatureCard
          icon={<SiImagedotsc />}
          title="Anamorphic Image Engine"
          content="Just making sure the image is on the lane properly isn't enough, with our system the image is rendered from a perspective view so it always looks best when standing at the foul line."
        />
        <FeatureCard
          icon={<PiCrosshairBold />}
          title="Specto Tracking Integration"
          content="None of this would function without Specto. Whether you're destroying monsters, viewing passive effects, or hitting a target on a specific board, Specto helps us locate the ball in real time."
        />
        <div className="col-span-full">
          <LinkButton
            linkText="Get in touch"
            linkTo="/contact"
            icon={<FaArrowRight />}
            variant="secondary"
          />
        </div>
      </section>
    </main>
  );
}
