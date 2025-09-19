import FeatureCard from "../components/FeatureCard";
import { FaArrowRight } from "react-icons/fa";
import LinkButton from "./Buttons/LinkButton";
import { TbDeviceRemote } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { GiBoombox } from "react-icons/gi";
import { LiaConnectdevelop } from "react-icons/lia";

export default function AudioFeaturesSection() {
  return (
    <section id="all-features" className="px-5 lg:p-10 py-20 lg:my-10">
      <div className="flex flex-col gap-10 lg:gap-20">
        <h3 className="col-span-full text-4xl md:text-5xl text-center">
          Features & Benefits
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-20">
          <FeatureCard
            variant="large"
            icon={<GiBoombox />}
            title="Purpose-Built for Bowling Acoustics"
            content="Custom speaker placement strategies reduce echo and handle high-decibel ambient noise. Balanced sound that preserves the excitement of pins and balls while enhancing music and announcements."
          />
          <FeatureCard
            variant="large"
            icon={<LiaConnectdevelop />
}
            title="Multi-Zone Audio Control"
            content="Independently adjust music levels for lanes, arcade, lounge, and bar areas. Deliver tailored soundscapes that enhance each guest’s experience without overpowering the game."
          />
          <FeatureCard
            variant="large"
            icon={<TbDeviceRemote />}
            title="Easy Management & Reliability"
            content="Intuitive control interfaces for staff—no sound engineering degree required. Commercial-grade hardware designed for all-day, high-traffic use."
          />
          <FeatureCard
            variant="large"
            icon={<GiMoneyStack />}
            title="Enhance Revenue & Customer Satisfaction"
            content="Create an energetic atmosphere that encourages longer play and higher food & beverage sales. Support themed events, cosmic bowling, or league nights with customizable playlists and effects."
          />
        </div>
        <div className="flex justify-center">
          <LinkButton
            variant="secondary"
            linkText="Get in touch"
            linkTo="/contact"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </section>
  );
}
