import LinkButton from "./Buttons/LinkButton";
import { FaArrowRight } from "react-icons/fa";
import HeadingAndBreadcrumbs from "./HeadingAndBreadcrumbs";

export default function AboutVideo() {
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

      <div className="absolute grid h-full w-full">
        <HeadingAndBreadcrumbs pageHeading="About" />
        <div className="grid w-full md:w-2/3 lg:w-1/2 place-items-end justify-items-start px-5 py-10 md:p-10">
          <div
            className="col-span-full flex flex-col gap-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h4 className="text-7xl md:text-8xl lg:text-8xl xl:text-9xl">
              Built to impress.
            </h4>
            <p className="2xl:text-xl">
              With precise tracking and crisp imaging we strive to immerse
              bowlers of all ages in our system. Clutch Bowling is a new kind of
              bowling experience that combines vibrant graphics and motion
              tracking with the sport of bowling.
            </p>
            <LinkButton
              variant="secondary"
              linkText="See all features"
              linkTo="#all-features"
              icon={<FaArrowRight />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
