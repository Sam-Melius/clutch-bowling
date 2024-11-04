"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BallEffectCard({ effectData }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let hoverTimeout;
    if (isHovering) {
      hoverTimeout = setTimeout(() => setIsVideoPlaying(true), 500); // 0.5-second delay
    } else {
      clearTimeout(hoverTimeout);
      setIsVideoPlaying(false);
    }
    return () => clearTimeout(hoverTimeout);
  }, [isHovering]);

  const handleImageClick = () => {
    if (window.innerWidth <= 768) { // Activate on click only for mobile
      setIsVideoPlaying(true);
    }
  };

  return (
    <figure
      className="flex flex-col gap-2 relative transition ease-in-out delay-150 duration-300 pb-10 h-[200] md:h-[300px] md:w-[150px]"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isVideoPlaying ? (
        <video
          id="effectsVideo"
          src={effectData.video}
          controls
          autoPlay
          muted
          onEnded={() => setIsVideoPlaying(false)}
          className="h-full w-full object-cover rounded-lg cursor-pointer"
          height={effectData.height}
          width={effectData.width}
        />
      ) : (
        <Image
          src={effectData.imageUrl}
          alt={effectData.name}
          className="h-auto hover:ring-4 ring-secondaryBlue ring-offset-2 w-full object-cover rounded-full cursor-pointer"
          placeholder="blur"
          blurDataURL={effectData.blurDataUrl}
          height={effectData.height}
          width={effectData.width}
          onClick={handleImageClick}
        />
      )}
      <figcaption className="flex flex-col self-center font-medium md:text-lg">
        {effectData.name}
      </figcaption>
    </figure>
  );
}