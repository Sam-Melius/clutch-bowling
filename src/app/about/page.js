import LinkButton from "../components/Buttons/LinkButton";
import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import { FaArrowRight } from "react-icons/fa";
import fireballEffect from "../../../public/videos/fireball.gif";
import Image from "next/image";
import GradientSection from "../components/GradientSection";
import FAQsSection from "../components/FAQsSection";
import AllFeaturesSection from "../components/AllFeaturesSection";

export default function AboutPage() {
  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="About" />

      <section>
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 p-10">
            <div className="flex flex-col gap-5 lg:w-1/2">
              <h4 className="text-7xl 2xl:text-8xl">Built to impress.</h4>
              <p>
                With precise tracking and crisp imaging we strive to immerse
                bowlers of all ages in our system. Clutch Bowling is a new kind
                of bowling experience that combines vibrant graphics and motion
                tracking with the sport of bowling.
              </p>
              <LinkButton
                variant="secondary"
                linkText="See all features"
                linkTo="#all-features"
                icon={<FaArrowRight />}
              />
            </div>
            <Image
              src={fireballEffect}
              alt="Fireball effect"
              className="w-full lg:w-1/2 lg:p-10"
            />
          </div>
        </div>
      </section>

      <GradientSection variant="dark" size="large" isRotated />

      <AllFeaturesSection />

      <GradientSection variant="dark" size="small" isRotated />

      <FAQsSection />

      <GradientSection variant="dark" size="small" />
    </main>
  );
}
