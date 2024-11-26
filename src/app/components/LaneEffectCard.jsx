"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LaneEffectCard({ effectData }) {
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
      className="flex flex-col gap-2 relative transition ease-in-out delay-150 duration-300 rounded-lg"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-once="true"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="w-full h-[200px] md:h-[300px]"> {/* Adjust height here */}
        {isVideoPlaying && videoSrc ? (
          <video
          id="effectsVideo"
          src={videoSrc}
          controls
          autoPlay
          muted
          onEnded={() => setIsVideoPlaying(false)} // Reset after playback
          onError={(e) => {
            console.error("Video failed to load:", e);
            setIsVideoPlaying(false); // Reset state
            setVideoSrc(null); // Clear source
          }}
          className="w-full h-full object-cover rounded-lg cursor-pointer"
        />
        ) : (
          <Image
            src={effectData.imageUrl}
            alt={effectData.name}
            className="w-full h-full object-cover rounded-lg cursor-pointer hover:ring-4 ring-secondaryBlue ring-offset-2"
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
