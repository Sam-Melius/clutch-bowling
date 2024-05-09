import HeroVideo from "./components/HeroVideo";
import HomeGridlinesSection from "./components/HomeGridlinesSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import GradientSection from "./components/GradientSection";
import TrustedBySection from "./components/TrustedBySection";
import FAQsSection from "./components/FAQsSection";

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <TrustedBySection />
      <HomeGridlinesSection />
      <GradientSection size="small" variant="dark" />
      <KeyFeaturesSection />
      <GradientSection size="small" variant="dark" isRotated />
      <FAQsSection />
      <GradientSection size="small" variant="dark" />
    </main>
  );
}
