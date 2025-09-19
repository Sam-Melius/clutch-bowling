import HeroVideoAlt from "../components/HeroVideoAlt";
import TrianglesSection from "../components/TrianglesSection";
import MSPFeaturesSection from "../components/MSPFeaturesSection";

export default function MSPPage() {
  return (
    <main>
      <HeroVideoAlt
        videoUrl="/videos/clutch-bowling.mp4"
        mainHeading="IT & Network Support"
        subheading="Modern bowling centers rely on more than just lanes and lights—they run on networks, servers, and secure digital systems. From scoring systems and POS terminals to guest Wi-Fi and security cameras, every device depends on stable, well-managed infrastructure. Our Managed Service Provider (MSP) solutions are built specifically for entertainment venues, offering proactive monitoring, secure data management, and fast-response support. Whether you're managing one location or a multi-center operation, we keep your tech running smoothly so you can focus on delivering a great guest experience."
        linkTo="#all-features"
        linkText="See all services"
      />
    <MSPFeaturesSection />
    <TrianglesSection
            heading="Have more questions?"
            linkText="View our FAQs"
            linkTo="/frequently-asked-questions"
          />
    </main>
  );
}