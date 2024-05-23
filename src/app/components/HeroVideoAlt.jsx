import LinkButton from "./Buttons/LinkButton";
import { FaArrowRight } from "react-icons/fa";
import HeadingAndBreadcrumbs from "./HeadingAndBreadcrumbs";

export default function HeroVideoAlt({
  videoUrl,
  breadcrumbHeading,
  mainHeading,
  subheading,
  linkTo,
  linkText,
  isContact,
}) {
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
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute -z-30 w-full h-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 place-items-center bg-primaryDark"></div>

      <div className="absolute grid h-full w-full">
        <HeadingAndBreadcrumbs pageHeading={breadcrumbHeading} />
        <div className="grid w-full md:w-2/3 lg:w-1/2 place-items-end justify-items-start px-5 py-10 md:p-10">
          <div
            className="col-span-full flex flex-col gap-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h4 className="text-7xl md:text-8xl 2xl:text-9xl text-stroke">
              {mainHeading}
            </h4>
            <p className="2xl:text-xl">{subheading}</p>
            <LinkButton
              variant="secondary"
              linkText={linkText}
              linkTo={linkTo}
              icon={<FaArrowRight />}
              isContact={isContact}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
