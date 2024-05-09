import HeroVideo from "./components/HeroVideo";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import GradientSection from "./components/GradientSection";
import TrustedBySection from "./components/TrustedBySection";
import GridlinesSection from "./components/GridlinesSection";

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <TrustedBySection />
      <GridlinesSection
        variant="large"
        id="mission"
        heading="We're on a mission to revolutionize the way you think about
      bowling."
        linkText="See how"
        linkTo="#key-features"
      />
      <GradientSection size="small" variant="dark" />
      <KeyFeaturesSection />
      <GradientSection size="small" variant="dark" isRotated />
      <GridlinesSection
        variant="small"
        heading="Have more questions?"
        linkText="View our FAQs"
        linkTo="/faqs"
      />
      <GradientSection size="small" variant="dark" />
    </main>
  );
}
