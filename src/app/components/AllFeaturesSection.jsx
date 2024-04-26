import Accordion from "./Accordion";
import { GiLaserSparks } from "react-icons/gi";
import { SiImagedotsc } from "react-icons/si";
import { PiCrosshairBold } from "react-icons/pi";
import { BsClipboard2Pulse } from "react-icons/bs";
import { GiBowlingAlley } from "react-icons/gi";
import { BiBowlingBall } from "react-icons/bi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdTabletMac } from "react-icons/md";
import LinkButton from "./Buttons/LinkButton";
import Image from "next/image";
import lane from "../../../public/images/lane.png";

export default function AllFeaturesSection() {
  return (
    <section
      id="key-features"
      className="flex flex-col gap-8 lg:gap-12 px-5 py-10 lg:p-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-6xl text-center font-medium">
        All Features
      </h2>
      <div className="flex flex-row gap-10 items-center">
        <div className="w-full h-full lg:w-1/2">
          <Image src={lane} alt="lane" className="h-auto w-full object-cover" />
        </div>
        <div className="grid w-full lg:w-1/2 grid-cols-1 gap-5 lg:gap-10">
          <Accordion
            icon={<GiLaserSparks />}
            title="On-Lane Projection Mapping"
            content="Clutch Bowling projects games and effects which interact with objects on the lane. In order for these images to look perfect, we custom configure each system to map to your specific install."
          />
          <Accordion
            icon={<SiImagedotsc />}
            title="Anamorphic Image Engine"
            content="Just making sure the image is on the lane properly isn't enough, with our system the image is rendered from a perspective view so it always looks best when standing at the foul line."
          />
          <Accordion
            icon={<PiCrosshairBold />}
            title="Specto Tracking Integration"
            content="None of this would function without Specto. Whether you're destroying monsters, viewing passive effects, or hitting a target on a specific board, Specto helps us locate the ball in real time."
          />
          <div className="flex justify-start">
            <LinkButton
              linkTo="/about"
              buttonText="View All"
              variation="primary"
            />
          </div>
          <Accordion
            icon={<BsClipboard2Pulse />}
            title="Training"
            content="We're bowlers ourselves, so one thing we wanted to improve upon was how training was done. With our system you can set specific goals and targets, and see immediate feedback when you reach those goals."
          />
          <Accordion
            icon={<GiBowlingAlley />}
            title="Lane Effects"
            content="Visual lane effects that interact with the ball are displayed on the lane. These can be set to random, center wide, or individually on each lane."
          />
          <Accordion
            icon={<BiBowlingBall />}
            title="Ball Effects"
            content="Ever wanted to throw a fireball down the lane? Well that's exactly what our ball effects allow you to do. From escorting the ball with airships to shooting cannons at pirate ships, or ball effects provide a whole new level of interaction while bowling."
          />
          <Accordion
            icon={<HiOutlineTrophy />}
            title="Games"
            content="Clutch Bowling introduces a new way to bowl with games projected onto the lane that interact with the ball. Battle head to head in our lane vs lane games, or try to beat a high score and get on the local, or global leader boards."
          />
          <Accordion
            icon={<MdTabletMac />}
            title="Control Panel"
            content="We provide software that easily allows you to control all of the system's features such as starting the system, setting effects, starting games, uploading logos and ads, and much more"
          />
        </div>
      </div>
    </section>
  );
}
