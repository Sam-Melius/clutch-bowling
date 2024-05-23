import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import GridlinesSection from "../components/GridlinesSection";
import FAQCard from "../components/FAQCard";

export const metadata = {
  title: "Clutch Bowling | FAQs",
  description: "The ultimate interactive bowling experience",
  url: "https://clutchbowling.com/frequently-asked-questions",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | FAQs",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/frequently-asked-questions",
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

const FAQsArray = [
  {
    question: "How can I get Clutch Bowling installed in my bowling center?",
    answer:
      "Send us a message through our contact form and we will get back to you as soon as possible with our available options and pricing for installation!",
  },
  {
    question: "I have an idea for an effect, can you make it?",
    answer:
      "If you can dream it, we can build it! Send us a message through the contact form, and we will put your idea into consideration!",
  },
  {
    question:
      "Are there any restrictions on who can use the Clutch Bowling system?",
    answer:
      "Clutch Bowling is suitable for bowlers of all ages and abilities. If you can put the ball on the lane, we can do something amazing with it!",
  },
  {
    question: "How many effects are available?",
    answer:
      "Currently we have over 100 effects in use, but many more are currently in production! If you have any ideas for possible effects, we would love to hear from you!",
  },
  {
    question: "What coaching tools are available?",
    answer:
      "One of our favorites we have is a target simulation where bowlers can practice their accuracy by hitting targets at a range of distances and sizes. We are frequently adding new tools to help users improve their bowling skill!",
  },
  {
    question:
      "Can I use different effects on different lanes, at the same time?",
    answer:
      "Yes! As the proprietor, you will have complete control over what is on the lanes. Additionally, with our new mobile app, you'll be able to allow your customers limited control over their lanes as well.",
  },
  {
    question: "How much does the Clutch Bowling system cost?",
    answer:
      "We currently offer a wide range of packages varying in ability and price, so to find the package best suited to your bowling center check out our pricing page.",
  },
];

export default function FAQsPage() {
  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="FAQs" />
      <section className="flex flex-col h-full w-full px-5 lg:px-10 pt-10 pb-20">
        <ul>
          {FAQsArray.map((question, index) => (
            <li key={index}>
              <FAQCard faq={question} />
            </li>
          ))}
        </ul>
      </section>

      <GridlinesSection
        variant="small"
        heading="Didn't answer your question?"
        linkText="Get in touch"
        isContact
      />
    </main>
  );
}
