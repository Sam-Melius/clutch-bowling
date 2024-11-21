import { client } from "../../../sanity/lib/client";
import HeroVideoAlt from "../components/HeroVideoAlt";
import PricingCard from "../components/PricingCard";
import TrianglesSection from "../components/TrianglesSection";

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

export default async function PricingPage() {
  const data = await client.fetch(`
  {
    "standardTier": *[_type == "pricing" && tier == "Standard"]{
      tier,
      startingPrice,
      bulletPoints
    },
    "premiumTier": *[_type == "pricing" && tier == "Premium"]{
      tier,
      startingPrice,
      bulletPoints
    }
  }`);

  const standardTier = data?.standardTier[0];
  const premiumTier = data?.premiumTier[0];

  return (
    <main>
      <HeroVideoAlt
        videoUrl="/videos/clutch-bowling-demo.mp4"
        mainHeading="Pricing that pleases."
        subheading="Our install packages are designed to deliver exceptional value and a strong return on investment. Choose from a range of tailored options that meet your needs and budget, ensuring you get the best solution and ROI for your bowling center."
        linkText="See pricing info"
        linkTo="#pricing-info"
      />

      <section id="pricing-info" className="px-5 lg:p-10 py-20 lg:my-10">
        <div className="flex flex-col gap-10 lg:gap-20">
          <h3 className="col-span-full text-4xl md:text-5xl text-center">
            Available Packages
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            <PricingCard pricingData={standardTier} />
            <PricingCard pricingData={premiumTier} />
          </div>
        </div>
      </section>

      <TrianglesSection
        heading="Ready to talk shop?"
        linkText="Get in touch"
        isContact
      />
    </main>
  );
}
