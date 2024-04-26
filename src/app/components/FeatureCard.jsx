export default function FeatureCard({ icon, title, content }) {
  return (
    <div className="flex flex-col gap-3 col-span-1">
      <div className="flex flex-row items-center gap-3 xl:gap-4 text-xl">
        <h4 className="font-medium">{title}</h4>
        {icon}
      </div>
      <div className="text-sm md:text-base 2xl:text-lg">{content}</div>
    </div>
  );
}
