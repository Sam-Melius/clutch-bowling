import GridlinesSection from "../components/GridlinesSection";
import AllFeaturesSection from "../components/AllFeaturesSection";
import AboutHeroVideo from "../components/AboutHeroVideo";

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
      <AboutHeroVideo />

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
