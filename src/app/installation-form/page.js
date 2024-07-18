import HeroVideoAlt from "../components/HeroVideoAlt";
import TrianglesSection from "../components/TrianglesSection";

export const metadata = {
  title: "Clutch Bowling | Installation Form",
  url: "https://clutchbowling.com/installation-form",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Installation Form",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/installation-form",
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

export default async function InstallationFormPage() {
  return (
    <main>
      <HeroVideoAlt
        videoUrl="/videos/clutch-lane-effects.mp4"
        mainHeading="Pre-install form"
        subheading="In order to get Clutch Bowling up and running at your center, lease fill out the form linked below."
        linkText="Start now"
        isPreInstallForm={true}
        isContact={false}
      />

      <TrianglesSection
        heading="Have questions about our technology?"
        linkText="View FAQs"
        linkTo={`/frequently-asked-questions`}
      />
    </main>
  );
}
