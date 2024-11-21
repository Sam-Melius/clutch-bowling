import HeroVideoAlt from "../components/HeroVideoAlt";
import TrianglesSection from "../components/TrianglesSection";

export const metadata = {
  title: "Clutch Bowling | Contact Us",
  url: "https://clutchbowling.com/contact",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Contact Us",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/contact",
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

export default async function ContactPage() {
  return (
    <main>
      <HeroVideoAlt
        videoUrl="/videos/clutch-lane-effects.mp4"
        mainHeading="Get in touch."
        subheading="For general inquiries, please check out our FAQ page. If you still have questions please fill out the form below."
        linkText="Start now"
        isPreInstallForm={false}
        isContact={true}
      />
      <TrianglesSection
        heading="Have questions about our technology?"
        linkText="View FAQs"
        linkTo={`/frequently-asked-questions`}
      />
    </main>
  );
}
