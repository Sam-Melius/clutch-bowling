import { FaArrowRight } from "react-icons/fa6";
import LinkButton from "./Buttons/LinkButton";

export default function HeroVideo() {
  return (
    <section className="flex h-svh w-full relative">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        preload="auto"
        playsInline
      >
        <source src="/videos/clutch-bowling.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute -z-30 w-full h-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 place-items-center bg-primaryDark"></div>

      <div className="absolute w-full h-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 place-items-center">
        <div
          className="flex flex-col gap-2 md:gap-4 col-span-full"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <h1 className="text-3xl md:text-6xl xl:text-8xl 2xl:text-8xl font-medium text-stroke">
            The ultimate interactive
            <br />
            <span className="pl-1 md:pl-2.5 lg:pl-2.5 xl:pl-3 2xl:pl-4">
              bowling experience.
            </span>
          </h1>
          <div className="ml-1 md:ml-2.5 lg:ml-3 xl:ml-3.5 2xl:ml-5">
            <LinkButton
              linkTo="#mission"
              linkText="Learn more"
              icon={<FaArrowRight />}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
