import Image from "next/image";

export default function BallEffectCard({ effectData }) {
  return (
    <Image
      src={effectData.imageUrl}
      alt={effectData.name}
      className="h-auto w-full object-cover rounded-lg"
      // placeholder="blur"
      // blurDataURL={effectData.blurDataUrl}
      height={effectData.height}
      width={effectData.width}
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
    />
  );
}
