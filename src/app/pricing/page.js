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

const standardData = {
  title: "Standard",
  startingPrice: 4495,
  includes: [
    "36 Month Commitment",
    "$100 Per Lane Per Month (6 lane minimum)",
    "Unlimited hardware warranty",
    "Unlimited software updates",
    "Bulb replacement",
    "Customer-controlled mobile app",
    "Net revenue tracking abilities",
    "Ability to upload photos/logos to lane (parties, special occasions, etc)",
    "50+ ball and lane effects",
    "5+ interactive games",
    "10 gutter cap effects",
    "New monthly content",
    "Specto software",
  ],
};

const premiumData = {
  title: "Premium",
  startingPrice: 9000,
  includes: [
    "Unlimited hours of use",
    "Unlimited hardware warranty (first 3 years)",
    "Unlimited software updates",
    "Bulb replacement (2 per pair per year for  first 3 years)",
    "Customer-controlled mobile app",
    "Net revenue tracking abilities",
    "Ability to upload photos/logos to lane (parties, special occasions, etc)",
    "50+ ball and lane effects",
    "5+ interactive games",
    "10 gutter cap effects",
    "New monthly content",
    "Specto software",
  ],
};

export default function PricingPage() {
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
            <PricingCard pricingData={standardData} />
            <PricingCard pricingData={premiumData} />
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
