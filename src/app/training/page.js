import HeroVideoAlt from "../components/HeroVideoAlt";

export const metadata = {
  title: "Clutch Bowling | Training",
  url: "https://clutchbowling.com/training",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Training",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/training",
    images: [
      {
        url: "https://clutchbowling.com/images/og-image.png",
        alt: "Clutch Bowling",
      },
    ],
  },
  images: [
    {
      url: "https://clutchbowling.com/images/og-image.png",
      alt: "Clutch Bowling",
    },
  ],
};

export default function TrainingPage() {
  return (
    <main>
      <HeroVideoAlt
        videoUrl="/videos/clutch-bowling-training.mp4"
        breadcrumbHeading="Training"
        mainHeading="Top-notch training."
        subheading="Clutch technology enhances training by providing real-time
        tracking, feedback, and immersive visuals. This innovative
        approach allows players to analyze their performance with
        precision, making practice sessions more effective and engaging,
        ultimately improving skills and boosting confidence."
        isContact
        linkText="Contact for info"
      />
    </main>
  );
}
