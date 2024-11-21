import LaneEffectCard from "./LaneEffectCard";
import BallEffectCard from "./BallEffectCard";

export default function AllEffectsSection({ laneData, ballData }) {
  return (
    <section
      id="all-effects"
      className="flex flex-col gap-20 px-5 md:px-10 pt-10 pb-20"
    >
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-5 lg:gap-10 ">
        <div className="col-span-full md:flex items-end gap-5">
          <h2 className="text-2xl md:text-3xl font-medium">
          Available Lane Effects
          </h2>
          <h1 className="text-lg md:text-2xl"><span className="hidden sm:inline">(Hover over effect to see demonstration)</span>
          <span className="sm:hidden">(Click on effect to see demonstration)</span></h1>
        </div>
        
        {laneData.map((effect, index) => (
          <div key={index}>
            <LaneEffectCard effectData={effect} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-10 gap-5 lg:gap-10 ">
        <div className="col-span-full md:flex items-end gap-5">
          <h2 className="text-2xl md:text-3xl font-medium">
          Available Ball Effects
          </h2>
          <h1 className="text-lg md:text-2xl"><span className="hidden sm:inline">(Hover over effect to see demonstration)</span>
          <span className="sm:hidden">(Click on effect to see demonstration)</span></h1>
        </div>
        
        {ballData.map((effect, index) => (
          <div key={index}>
            <BallEffectCard effectData={effect} />
          </div>
        ))}
      </div>
    </section>
  );
}
