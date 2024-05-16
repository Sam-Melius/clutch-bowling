import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import PatchNoteCard from "../components/PatchNoteCard";
import { patchNotesData } from "../components/data/PatchNotes";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 px-5 md:px-10 pt-10 pb-20">
        {patchNotesData.map((patch, index) => (
          <div key={index}>
            <PatchNoteCard patchData={patch} />
          </div>
        ))}
      </div>
    </main>
  );
}
