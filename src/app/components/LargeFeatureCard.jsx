export default function LargeFeatureCard({ icon, title, content }) {
  return (
    <div className="flex flex-row items-center justify-start gap-5 col-span-1">
      <div className="text-6xl lg:text-8xl">{icon}</div>

      <div className="flex flex-col gap-3 text-xl">
        <h4 className="font-medium xl:text-2xl text-clutchBlue-300 text-shadow-xl">
          {title}
        </h4>
        <div className="text-sm md:text-base 2xl:text-lg">{content}</div>
      </div>
    </div>
  );
}
