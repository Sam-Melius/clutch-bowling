import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";

export const metadata = {
  title: "Clutch Bowling | Patch Notes",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Patch Notes",
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

export default function PatchNotesPage() {
  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="Patch Notes" />
    </main>
  );
}
