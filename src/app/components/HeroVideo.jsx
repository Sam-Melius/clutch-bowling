import LinkButton from "./Buttons/LinkButton";
import { museo } from "../styles/fonts/fonts";

export default function HeroVideo() {
  return (
    <section className="flex h-svh w-full relative">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover brightness-50"
        preload="auto"
      >
        <source src="/videos/clutch-bowling.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="flex flex-col gap-8 w-fit p-5 items-center animate__animated animate__fadeIn animate__slower">
          <h1
            className={`${museo.className} font-semibold text-4xl md:text-7xl xl:text-8xl cursor-default`}
          >
            The{" "}
            <span className="italic text-6xl md:text-9xl xl:text-[175px] neon-text transition-colors duration-300">
              <span className="neon-letter hover:text-red-500">u</span>
              <span className="neon-letter hover:text-orange-500">l</span>
              <span className="neon-letter hover:text-amber-500">t</span>
              <span className="neon-letter hover:text-yellow-500">i</span>
              <span className="neon-letter hover:text-green-500">m</span>
              <span className="neon-letter hover:text-blue-500">a</span>
              <span className="neon-letter hover:text-indigo-700">t</span>
              <span className="neon-letter hover:text-purple-700">e</span>
            </span>
            <br /> bowling experience
          </h1>
          <LinkButton
            linkTo="#key-features"
            buttonText="Explore Features"
            variation="primary"
          />
        </div>
      </div>
    </section>
  );
}
