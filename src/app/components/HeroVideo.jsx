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
    </section>
  );
}
