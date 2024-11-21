import AllFeaturesSection from "../components/AllFeaturesSection";
import HeroVideoAlt from "../components/HeroVideoAlt";
import TrianglesSection from "../components/TrianglesSection";

export const metadata = {
  title: "Clutch Bowling | About",
  url: "https://clutchbowling.com/about",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | About",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/about",
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
      <HeroVideoAlt
        videoUrl="/videos/clutch-bowling-demo.mp4"
        mainHeading="Built to impress."
        subheading="With precise tracking and crisp imaging we strive to immerse
        bowlers of all ages in our system. Clutch Bowling is a new kind of
        bowling experience that combines vibrant graphics and motion
        tracking with the sport of bowling."
        linkTo="#all-features"
        linkText="See all features"
      />
      <AllFeaturesSection />
      <TrianglesSection
        heading="Have more questions?"
        linkText="View our FAQs"
        linkTo="/frequently-asked-questions"
      />
    </main>
  );
}
