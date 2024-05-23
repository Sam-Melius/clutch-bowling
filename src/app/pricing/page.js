import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";

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
      <HeadingAndBreadcrumbs pageHeading="Pricing" />
    </main>
  );
}
