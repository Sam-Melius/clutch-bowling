export default function HomeGridlinesSection() {
  return (
    <section className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-0.5 h-fit bg-clutchBlue-300/50 relative">
      {/* Mobile gridlines */}
      {[...Array(24)].map((_, index) => (
        <div
          key={index}
          className="bg-primaryDark aspect-square md:hidden"
        ></div>
      ))}
      {/* Tablet gridlines */}
      {[...Array(48)].map((_, index) => (
        <div
          key={index}
          className="bg-primaryDark aspect-square hidden md:flex lg:hidden"
        ></div>
      ))}
      {/* Desktop gridlines */}
      {[...Array(60)].map((_, index) => (
        <div
          key={index}
          className="bg-primaryDark aspect-square hidden lg:flex"
        ></div>
      ))}
      <div className="absolute w-full h-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 place-items-center">
        <div className="flex flex-col gap-2 md:gap-4 col-span-full">
          <h4 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl p-5 md:p-10 lg:p-20 text-center">
            We're on a mission to revolutionize the way you think about bowling.
          </h4>
        </div>
      </div>
    </section>
  );
}
