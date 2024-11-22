import React from "react";
import TrianglesSection from "../components/TrianglesSection";
import HeroVideoAlt from "../components/HeroVideoAlt";
import MapChart from "../components/MapChart";
import { client } from "../../../sanity/lib/client";
import CentersView from "../components/CentersView";

export const metadata = {
  title: "Clutch Bowling | Centers",
  url: "https://clutchbowling.com/clutch-centers",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Centers",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/clutch-centers",
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

export default async function ClutchCentersPage() {
  const centerData = await client.fetch(`
    *[_type == "centers"]{
      name, 
      "location": locationName,
      coordinates,
      url,
      "imageUrl": logo.asset->url,
      "height": logo.asset->metadata.dimensions.height,
      "width": logo.asset->metadata.dimensions.width,
      "blurDataURL": logo.asset->metadata.lqip,
      "facebook": facebookUrl,
      "instagram": instagramUrl,
    } | order(name asc)
  `);

  return (
    <main>
      <HeroVideoAlt
        videoUrl="/videos/clutch-bowling-demo.mp4"
        mainHeading="Trusted worldwide."
        subheading="Bowling centers around the world rely on Clutch technology to provide top-tier experiences for their customers. We currently power eight different locations across five countries."
        linkTo="#all-locations"
        linkText="See all locations"
      />
      
      <section id="all-locations" className="px-5 lg:p-10 my-10">
        <div className="flex flex-col gap-5 w-full">
          <h3 className="col-span-full text-4xl md:text-5xl text-center">
            All Locations
          </h3>
          <CentersView centerData={centerData} />
        </div>
      </section>

      <TrianglesSection
        heading="Interested in becoming a Clutch Bowling Center?"
        linkText="Get in touch"
        isContact
      />
    </main>
  );
}
