export default function FeatureCard({ variant, icon, title, content }) {
  if (variant === "small") {
    return (
      <div className="flex flex-col gap-3 col-span-1">
        <div className="flex flex-row items-center gap-3 xl:gap-4 text-xl text-clutchBlue-300">
          <h4 className="font-medium">{title}</h4>
          {icon}
        </div>
        <div className="text-sm md:text-base 2xl:text-lg">{content}</div>
      </div>
    );
  } else if (variant === "large") {
    return (
      <div className="flex flex-row items-center justify-start gap-5 col-span-1">
        <div className="text-6xl lg:text-8xl text-clutchBlue-50">{icon}</div>

        <div className="flex flex-col gap-3 text-xl">
          <h4 className="font-medium xl:text-2xl text-clutchBlue-300 text-shadow-xl">
            {title}
          </h4>
          <div className="text-sm md:text-base 2xl:text-lg">{content}</div>
        </div>
      </div>
    );
  } else {
    return <div>Invalid variant type</div>;
  }
}
