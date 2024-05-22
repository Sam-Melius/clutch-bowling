import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import GridlinesSection from "../components/GridlinesSection";
import GradientSection from "../components/GradientSection";
import { client } from "../../../sanity/lib/client";
import PatchNotesSection from "../components/PatchNotesSection";

export const metadata = {
  title: "Clutch Bowling | Effects",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Effects",
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

export default async function EffectsPage() {
  // const data = await client.fetch(`
  //   *[_type == "effects"]
  // `);

  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="Effects" />
      {/* 
      Effects Section goes here
      <EffectsSection effectsData={data} /> */}

      {/* <GradientSection size="small" variant="dark" isRotated />
      <GridlinesSection
        variant="small"
        heading="Have an idea for a new effect?"
        linkText="Get in touch"
        isContact
      />
      <GradientSection size="small" variant="dark" /> */}
    </main>
  );
}
