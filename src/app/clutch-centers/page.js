import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import { client } from "../../../sanity/lib/client";
import TrianglesSection from "../components/TrianglesSection";

export const metadata = {
  title: "Clutch Bowling | Centers",
  url: "https://clutchbowling.com/clutch-centers",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Centers",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/clutch-centers",
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

export default async function ClutchCentersPage() {
  // const data = await client.fetch(`
  //   *[_type == "centers"]
  // `);

  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="Clutch Centers" />

      {/* <TrianglesSection
        heading="Interested in becoming a Clutch Bowling Center?"
        linkText="Get in touch"
        isContact
      /> */}
    </main>
  );
}
