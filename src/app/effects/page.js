import { client } from "../../../sanity/lib/client";
import HeroVideoAlt from "../components/HeroVideoAlt";
import AllEffectsSection from "../components/AllEffectsSection";
import TrianglesSection from "../components/TrianglesSection";

export const metadata = {
  title: "Clutch Bowling | Effects",
  url: "https://clutchbowling.com/effects",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Effects",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/effects",
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
      'video': video.asset->url,
      'height': image.asset->metadata.dimensions.height,
      'width': image.asset->metadata.dimensions.width,
      'blurDataUrl': image.asset->metadata.lqip,
    },
    "ballEffects": *[_type == "ballEffects"] | order(name asc) {
      name,
      'imageUrl': image.asset->url,
      'video': video.asset->url,
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
      <HeroVideoAlt
        videoUrl="/videos/clutch-lane-effects.mp4"
        mainHeading="Enthralling effects."
        subheading="We enhance the typical bowling experience with advanced lane and
        ball effects. Our technology creates dynamic projection-mapped
        effects, transforming training and games into an exciting,
        multi-sensory adventure for all skill levels."
        linkTo="#all-effects"
        linkText="See all effects"
      />
      <AllEffectsSection laneData={laneData} ballData={ballData} />
      <TrianglesSection
        heading="Have an idea for a new effect?"
        linkText="Get in touch"
        isContact
      />
    </main>
  );
}
