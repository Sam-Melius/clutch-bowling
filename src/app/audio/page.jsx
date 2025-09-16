import AllFeaturesSection from "../components/AllFeaturesSection";
import HeroVideoAlt from "../components/HeroVideoAlt";
import TrianglesSection from "../components/TrianglesSection";

export default function AboutPage() {
  return (
    <main>
      <HeroVideoAlt
        videoUrl="/videos/clutch-bowling-demo.mp4"
        mainHeading="Built to impress."
        subheading="With precise tracking and crisp imaging we strive to immerse
        bowlers of all ages in our system. Clutch Bowling is a new kind of
        bowling experience that combines vibrant graphics and motion
        tracking with the sport of bowling."
        linkTo="#all-features"
        linkText="See all features"
      />
    <div>AUDIO SOLUTIONS</div>
    </main>
  );
}