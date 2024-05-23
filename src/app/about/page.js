import LinkButton from "../components/Buttons/LinkButton";
import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import { FaArrowRight } from "react-icons/fa";
import fireballEffect from "../../../public/videos/fireball.gif";
import Image from "next/image";
import GradientSection from "../components/GradientSection";
import GridlinesSection from "../components/GridlinesSection";
import AllFeaturesSection from "../components/AllFeaturesSection";

export const metadata = {
  title: "Clutch Bowling | About",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | About",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com",
    images: [
      {
        url: "https://clutchbowling.com/images/og-image.png",
        alt: "Clutch Bowling",
      },
    ],
  },
  images: [
    {
      url: "https://clutchbowling.com/images/og-image.png",
      alt: "Clutch Bowling",
    },
  ],
};

export default function AboutPage() {
  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="About" />

      <section>
        <div className="flex flex-col h-full w-full">
          <div className="flex flex-col lg:flex-row mx-auto lg:items-center justify-between gap-5 xl:gap-0 py-10 px-5 md:px-10 lg:p-10 2xl:p-28">
            <div
              className="flex flex-col gap-5 lg:w-1/2 xl:min-w-[530px] 2xl:min-w-[950px]"
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-once="true"
            >
              <h4 className="text-7xl lg:text-6xl xl:text-7xl 2xl:text-9xl">
                Built to impress.
              </h4>
              <p className="2xl:text-xl">
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
              className="w-full lg:w-1/2 lg:p-10 2xl:p-16"
              unoptimized
            />
          </div>
        </div>
      </section>

      <AllFeaturesSection />

      <GridlinesSection
        variant="small"
        heading="Have more questions?"
        linkText="View our FAQs"
        linkTo="/frequently-asked-questions"
      />
    </main>
  );
}
