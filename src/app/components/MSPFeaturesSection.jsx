import FeatureCard from "../components/FeatureCard";
import { FaArrowRight } from "react-icons/fa";
import LinkButton from "./Buttons/LinkButton";
import { MdSecurity } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { MdOutlineWifiTethering } from "react-icons/md";
import { FaTools } from "react-icons/fa";

export default function MSPFeaturesSection() {
  return (
    <section id="all-features" className="px-5 lg:p-10 py-20 lg:my-10">
      <div className="flex flex-col gap-10 lg:gap-20">
        <h3 className="col-span-full text-4xl md:text-5xl text-center">
          Features & Benefits
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-20">
          <FeatureCard
            variant="large"
            icon={<FaServer />}
            title="End-to-End Infrastructure Management"
            content="From scoring systems to POS, we manage your entire IT stack—ensuring every device stays online, updated, and secure. Centralized management with minimal disruption."
          />
          <FeatureCard
            variant="large"
            icon={<MdSecurity />}
            title="Cybersecurity & Compliance"
            content="Protect your business and your guests with firewalls, threat detection, and data encryption. We help you stay ahead of security risks and industry compliance."
          />
          <FeatureCard
            variant="large"
            icon={<MdOutlineWifiTethering />}
            title="Reliable Network & Guest Wi-Fi"
            content="High-performance Wi-Fi for guests and staff, segmented for safety and optimized for traffic peaks. We build rock-solid networks with full monitoring and support."
          />
          <FeatureCard
            variant="large"
            icon={<FaTools />}
            title="24/7 Monitoring & Support"
            content="Proactive monitoring, fast-response troubleshooting, and expert support whenever you need it. Keep operations smooth with a dedicated tech partner who knows bowling."
          />
        </div>

        <div className="flex justify-center">
          <LinkButton
            variant="secondary"
            linkText="Request a Free MSP Quote"
            linkTo="/contact"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </section>
  );
}
