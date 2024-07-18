import Image from "next/image";

export default function LaneEffectCard({ effectData }) {
  return (
    <figure
      className="flex flex-col gap-2 relative"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
    >
      <Image
        src={effectData.imageUrl}
        alt={effectData.name}
        className="h-auto w-full object-cover rounded-lg"
        placeholder="blur"
        blurDataURL={effectData.blurDataUrl}
        height={effectData.height}
        width={effectData.width}
      />
      <figcaption className="flex flex-col font-medium md:text-lg">
        {effectData.name}
      </figcaption>
    </figure>
  );
}
