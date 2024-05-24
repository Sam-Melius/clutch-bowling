import HeroVideo from "./components/HeroVideo";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import GradientSection from "./components/GradientSection";
import TrustedBySection from "./components/TrustedBySection";
import GridlinesSection from "./components/GridlinesSection";
import NeonLasers from "./components/NeonLasers";
import TrianglesSection from "./components/TrianglesSection";

export const metadata = {
  title: "Clutch Bowling",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling",
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

export default function Home() {
  return (
    <main>
      <HeroVideo />
      {/* <GridlinesSection
        variant="large"
        id="mission"
        heading="We're on a mission to revolutionize the way you think about
      bowling."
        linkText="See how"
        linkTo="#key-features"
      /> */}
      <TrianglesSection
        id="mission"
        heading="We're on a mission to revolutionize the way you think about
    bowling."
        linkText="See how"
        linkTo="#key-features"
      />
      <KeyFeaturesSection />
      <TrustedBySection />
    </main>
  );
}
