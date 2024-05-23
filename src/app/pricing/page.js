import HeroVideoAlt from "../components/HeroVideoAlt";

export const metadata = {
  title: "Clutch Bowling | Pricing",
  url: "https://clutchbowling.com/pricing",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Pricing",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/pricing",
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

export default function PricingPage() {
  return (
    <main>
      <HeroVideoAlt
        videoUrl="/videos/clutch-bowling-demo.mp4"
        mainHeading="Pricing that pleases."
        subheading="Our install packages are designed to deliver exceptional value and a strong return on investment. Choose from a range of tailored options that meet your needs and budget, ensuring you get the best solution and ROI for your bowling center."
        isContact
        linkText="Contact for pricing"
      />
    </main>
  );
}
