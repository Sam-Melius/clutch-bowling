"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LaneEffectCard({ effectData }) {
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
      className="flex flex-col gap-2 relative transition ease-in-out delay-150 duration-300 rounded-lg"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-full h-[200px] md:h-[300px]"> {/* Adjust height here to match effectData */}
        {isVideoPlaying ? (
          <video
            id="effectsVideo"
            src={effectData.video}
            controls
            autoPlay
            muted
            onEnded={() => setIsVideoPlaying(false)} // Set video to revert to image after ending
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            
          />
        ) : (
          <Image
            src={effectData.imageUrl}
            alt={effectData.name}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            placeholder="blur"
            blurDataURL={effectData.blurDataUrl}
            height={effectData.height}
            width={effectData.width}
            onClick={handleImageClick} // Start video on image click
          />
        )}
      </div>
      <figcaption className="flex flex-col font-medium md:text-lg">
        {effectData.name}
      </figcaption>
    </figure>
  );
}
