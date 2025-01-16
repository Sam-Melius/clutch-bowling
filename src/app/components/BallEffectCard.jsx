"use client";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

export default function BallEffectCard({ effectData }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  const videoSource = useMemo(() => effectData.video, [effectData]);

  useEffect(() => {
    let hoverTimeout;
  
    if (isHovering) {
      hoverTimeout = setTimeout(() => {
        console.log("Hovering: setting video source and playing video");
        console.log("Effect data for video:", videoSource);
        setVideoSrc(videoSource); // Dynamically fetch the video source
        setIsVideoPlaying(true); // Start playing the video
      }, 250); // 0.25-second delay
    } else {
      clearTimeout(hoverTimeout);
      console.log("Not hovering: clearing video source and stopping video");
      setIsVideoPlaying(false); // Stop playing the video
      setVideoSrc(null);
    }
  
    return () => clearTimeout(hoverTimeout);
  }, [isHovering, videoSource]);
  
  
  
  useEffect(() => {
    
  }, [isHovering, videoSrc, isVideoPlaying]);

  const handleImageClick = () => {
    if (window.innerWidth <= 768) {
      // Activate video on click for mobile
      setVideoSrc(`${effectData.video}?t=${new Date().getTime()}`);

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
      

      {isVideoPlaying && videoSrc ? (
        <video
          id="effectsVideo"
          src={videoSrc}
          controls
          autoPlay
          muted
          playsInline
          onEnded={() => setIsVideoPlaying(false)}
          className="h-full w-full object-cover rounded-lg cursor-pointer"
          onError={(e) => {
            console.error("Video failed to load:", e);
            setIsVideoPlaying(false); // Reset state
            setVideoSrc(null); // Clear source
          }}
          
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