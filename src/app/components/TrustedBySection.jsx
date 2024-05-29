import { client } from "../../../sanity/lib/client";
import TrustedByImage from "./TrustedByImage";
import LinkButton from "./Buttons/LinkButton";
import { FaArrowRight } from "react-icons/fa";

export default async function TrustedBySection() {
  const centerData = await client.fetch(`
    *[_type == "centers" && includeInTrustedBySection][0..5]{
      _createdAt,
      name, 
      "location": locationName,
      url,
      "imageUrl": logo.asset->url,
      "height": logo.asset->metadata.dimensions.height,
      "width": logo.asset->metadata.dimensions.width,
    } | order(_createdAt desc)
  `);

  return (
    <section
      id="trusted-by"
      className="h-fit grid gap-y-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-20 border-t border-b border-dashed border-[#4A4A4A]"
    >
      <p className="col-span-full text-center text-xl font-medium pb-5 lg:pb-0">
        Trusted By
      </p>
      {centerData.map((center, index) => (
        <figure
          key={index}
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <TrustedByImage center={center} />
        </figure>
      ))}
      <div className="col-span-full mx-auto justify-center items-center">
        <LinkButton
          linkText="View all"
          linkTo="/clutch-centers"
          variant="secondary"
          icon={<FaArrowRight />}
        />
      </div>
    </section>
  );
}
