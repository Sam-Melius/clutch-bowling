import LargeFeatureCard from "../components/LargeFeatureCard";
import { SiImagedotsc } from "react-icons/si";
import { PiCrosshairBold } from "react-icons/pi";
import { MdMultilineChart, MdAppSettingsAlt } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { GiMagicPortal, GiLaserSparks, GiMeshNetwork } from "react-icons/gi";
import { FaBowlingBall } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { CgSync } from "react-icons/cg";

export default function AllFeaturesSection() {
  return (
    <section id="all-features" className="p-10 py-20">
      <div className="flex flex-col gap-10 lg:gap-20">
        <h3 className="col-span-full text-4xl md:text-5xl text-center">
          All Features
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-10 lg:gap-x-20 gap-y-20">
          <LargeFeatureCard
            icon={<GiLaserSparks />}
            title="On-Lane Projection Mapping"
            content="Clutch Bowling projects games and effects which interact with objects on the lane. In order for these images to look perfect, we custom configure each system to map to your specific install."
          />
          <LargeFeatureCard
            icon={<SiImagedotsc />}
            title="Anamorphic Image Engine"
            content="Just making sure the image is on the lane properly isn't enough, with our system the image is rendered from a perspective view so it always looks best when standing at the foul line."
          />
          <LargeFeatureCard
            icon={<PiCrosshairBold />}
            title="Specto Tracking Integration"
            content="None of this would function without Specto. Whether you're destroying monsters, viewing passive effects, or hitting a target on a specific board, Specto helps us locate the ball in real time."
          />
          <LargeFeatureCard
            icon={<MdMultilineChart />}
            title="Training"
            content="We're bowlers ourselves, so one thing we wanted to improve upon was how training was done. With our system you can set specific goals and targets, and see immediate feedback when you reach those goals. Goals can be speed, accuracy, amount of hook, etc."
          />
          <LargeFeatureCard
            icon={<GoTrophy />}
            title="Games"
            content="We're introducing a new way to bowl with games projected onto the lane that interact with the ball. Battle head to head in our lane vs lane games, or try to beat a high score and get on the local, or global leader boards."
          />
          <LargeFeatureCard
            icon={<GiMagicPortal />}
            title="Lane Effects"
            content="Highly customizable visual lane effects that interact with the ball are displayed on the lane, amplifying your bowling experience. These can be set to random, center wide, or individually on each lane."
          />
          <LargeFeatureCard
            icon={<FaBowlingBall />}
            title="Ball Effects"
            content="Ever wanted to throw a fireball down the lane? Well that's exactly what our ball effects allow you to do. From escorting the ball with airships to shooting cannons at pirate ships, or ball effects provide a whole new level of interaction while bowling."
          />
          <LargeFeatureCard
            icon={<RiAdminLine />}
            title="Admin Panel"
            content="We provide software that easily allows you to control all of the system's features such as starting the system, setting effects, starting games, uploading logos and ads, and much more! The Clutch Control Panel is also where you can allow your bowlers to control their own lanes through our mobile app."
          />
          <LargeFeatureCard
            icon={<GiMeshNetwork />}
            title="Networking"
            content="Our system is all backed up on our cloud servers. If anything were to happen to the system, then all high scores, user training preferences, edge blending and everything else is backed up. Our custom built server also allows the mobile app to interact with the lanes whenever the center wants."
          />
          <LargeFeatureCard
            icon={<CgSync />}
            title="Global Effects Manager (G.E.M.)"
            content="Our software allows effects to be displayed across several lanes in your bowling center. Watch your lanes perfectly synchronized with one another as they display stunning effects."
          />
          <LargeFeatureCard
            icon={<MdAppSettingsAlt />}
            title="Mobile App"
            content="Did we mention we have a mobile app? Our system was designed to give bowlers the freedom they want. Custom user profiles allow users to set their favorite effects, games, and even customize their training routine."
          />
        </div>
      </div>
    </section>
  );
}
