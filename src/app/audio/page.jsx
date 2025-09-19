import HeroVideoAlt from "../components/HeroVideoAlt";
import TrianglesSection from "../components/TrianglesSection";
import AudioFeaturesSection from "../components/AudioFeaturesSection";

export default function AboutPage() {
  return (
    <main>
      <HeroVideoAlt
        videoUrl="/videos/clutch-bowling-demo.mp4"
        mainHeading="Audio That Enhances Play"
        subheading="Bowling alleys aren’t quiet places—pins crash, balls roll, and crowds cheer. Delivering music, announcements, and interactive audio without overwhelming the natural sounds of bowling requires purpose-built solutions. Our professional audio systems are designed specifically for bowling environments, combining advanced acoustics and multi-zone control. Whether you’re upgrading a boutique center or outfitting a large entertainment complex, we deliver reliable, cost-effective audio that keeps your guests engaged and your operations seamless."
        linkTo="#all-features"
        linkText="See all features"
      />
    <AudioFeaturesSection />
    <TrianglesSection
            heading="Have more questions?"
            linkText="View our FAQs"
            linkTo="/frequently-asked-questions"
          />
    </main>
  );
}