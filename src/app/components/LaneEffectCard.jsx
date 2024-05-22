import Image from "next/image";

export default function LaneEffectCard({ effectData }) {
  return (
    <Image
      src={effectData.imageUrl}
      alt={effectData.name}
      className="h-fit w-full object-cover rounded-lg hover:scale-105 transition duration-300"
      placeholder="blur"
      blurDataURL={effectData.blurDataUrl}
      height={effectData.height}
      width={effectData.width}
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
    />
  );
}
