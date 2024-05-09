import HeroVideo from "./components/HeroVideo";
import HomeGridlinesSection from "./components/HomeGridlinesSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import ShadowBars from "./components/ShadowBars";
import TrustedBySection from "./components/TrustedBySection";

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <HomeGridlinesSection />
      <KeyFeaturesSection />
      <ShadowBars />
      <TrustedBySection />
    </main>
  );
}
