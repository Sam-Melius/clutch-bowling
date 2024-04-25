import LinkButton from "./Buttons/LinkButton";

export default function HeroVideo() {
  return (
    <section className="flex h-svh w-full relative">
      <video
        autoPlay
        muted
        // loop
        className="w-full h-full object-cover brightness-50"
        preload="auto"
      >
        <source src="/videos/clutch-bowling.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="flex flex-col gap-8 w-fit p-5 items-center">
          <h1 className="text-4xl md:text-7xl xl:text-8xl">
            The{" "}
            <span className="italic text-6xl md:text-9xl xl:text-[150px] neon-text">
              <span className="neon-letter">u</span>
              <span className="neon-letter">l</span>
              <span className="neon-letter">t</span>
              <span className="neon-letter">i</span>
              <span className="neon-letter">m</span>
              <span className="neon-letter">a</span>
              <span className="neon-letter">t</span>
              <span className="neon-letter">e</span>
            </span>
            <br />
            bowling experience
          </h1>
          <LinkButton
            linkTo="/about"
            buttonText="Learn More"
            variation="primary"
          />
        </div>
      </div>
    </section>
  );
}
