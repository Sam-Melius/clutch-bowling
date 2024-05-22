import Image from "next/image";

export default function BallEffectCard({ effectData }) {
  return (
    <Image
      src={effectData.imageUrl}
      alt={effectData.name}
      className="h-fit w-full object-cover rounded-lg hover:rotate-[360deg] transition duration-200 hover:duration-700"
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
