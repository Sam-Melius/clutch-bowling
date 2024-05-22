import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import GridlinesSection from "../components/GridlinesSection";
import GradientSection from "../components/GradientSection";
import { client } from "../../../sanity/lib/client";
import BallEffectCard from "../components/BallEffectCard";
import LaneEffectCard from "../components/LaneEffectCard";

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
  const data = await client.fetch(`
  {
    "laneEffects": *[_type == "laneEffects"] | order(name asc) {
      name,
      'imageUrl': image.asset->url,
      'height': image.asset->metadata.dimensions.height,
      'width': image.asset->metadata.dimensions.width,
      'blurDataUrl': image.asset->metadata.lqip,
    },
    "ballEffects": *[_type == "ballEffects"] | order(name asc) {
      name,
      'imageUrl': image.asset->url,
      'height': image.asset->metadata.dimensions.height,
      'width': image.asset->metadata.dimensions.width,
      'blurDataUrl': image.asset->metadata.lqip,
    }
  }
`);

  const laneData = data.laneEffects;
  const ballData = data.ballEffects;

  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="Effects" />
      <section
        id="all-effects"
        className="flex flex-col gap-20 px-5 md:px-10 pt-10 pb-20"
      >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 gap-5 lg:gap-10 ">
          <h2 className="col-span-full text-3xl font-medium">
            Available Lane Effects
          </h2>
          {laneData.map((effect, index) => (
            <div key={index}>
              <LaneEffectCard effectData={effect} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-12 gap-5 lg:gap-10 ">
          <h2 className="col-span-full text-3xl font-medium">
            Available Ball Effects
          </h2>
          {ballData.map((effect, index) => (
            <div key={index}>
              <BallEffectCard effectData={effect} />
            </div>
          ))}
        </div>
      </section>

      <GradientSection size="small" variant="dark" isRotated />
      <GridlinesSection
        variant="small"
        heading="Have an idea for a new effect?"
        linkText="Get in touch"
        isContact
      />
      <GradientSection size="small" variant="dark" />
    </main>
  );
}
