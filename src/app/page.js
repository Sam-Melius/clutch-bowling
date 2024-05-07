import LinkButton from "./components/Buttons/LinkButton";
import HeroVideo from "./components/HeroVideo";
import HomeGridlinesSection from "./components/HomeGridlinesSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import TrustedBySection from "./components/TrustedBySection";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <HomeGridlinesSection />
      <KeyFeaturesSection />
      <TrustedBySection />
    </main>
  );
}
