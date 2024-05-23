import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import GridlinesSection from "../components/GridlinesSection";
import { client } from "../../../sanity/lib/client";
import PatchNotesSection from "../components/PatchNotesSection";

export const metadata = {
  title: "Clutch Bowling | Patch Notes",
  url: "https://clutchbowling.com/patch-notes",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Patch Notes",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/patch-notes",
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

export default async function PatchNotesPage() {
  const data = await client.fetch(`
    *[_type == "PatchNotes"] | order(_createdAt desc)
  `);

  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="Patch Notes" />

      <PatchNotesSection patchNotesData={data} />

      <GridlinesSection
        variant="small"
        heading="Have a request for our next update?"
        linkText="Get in touch"
        isContact
      />
    </main>
  );
}
