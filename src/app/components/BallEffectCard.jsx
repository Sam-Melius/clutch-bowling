"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BallEffectCard({ effectData }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    let hoverTimeout;
  
    if (isHovering) {
      hoverTimeout = setTimeout(() => {
        console.log("Hovering: setting video source and playing video");
        console.log("Effect data for video:", effectData);
        setVideoSrc(effectData.video); // Dynamically fetch the video source
        setIsVideoPlaying(true); // Start playing the video
      }, 250); // 0.25-second delay
    } else {
      clearTimeout(hoverTimeout);
      console.log("Not hovering: clearing video source and stopping video");
      setIsVideoPlaying(false); // Stop playing the video
      setVideoSrc(null); // Clear the video source
    }
  
    return () => clearTimeout(hoverTimeout);
  }, [isHovering, effectData.video]);
  
  // Additional Debugging: Log state changes
  useEffect(() => {
    console.log("Hover state:", isHovering);
    console.log("Video source being set:", videoSrc);
    console.log("Is video playing:", isVideoPlaying);
  }, [isHovering, videoSrc, isVideoPlaying]);

  const handleImageClick = () => {
    if (window.innerWidth <= 768) {
      // Activate video on click for mobile
      setVideoSrc(effectData.video);
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