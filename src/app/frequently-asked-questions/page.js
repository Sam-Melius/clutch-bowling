import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import FAQCard from "../components/FAQCard";
import { client } from "../../../sanity/lib/client";
import TrianglesSection from "../components/TrianglesSection";

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

export default async function FAQsPage() {
  const data = await client.fetch(`
    *[_type == "faqs"]
  `);

  const FAQsArray = data[0]?.frequentlyAskedQuestions;

  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="FAQs" />
      <section className="flex flex-col h-full w-full px-5 lg:px-10 pt-10 pb-20">
        <ul>
          {FAQsArray.map((item, index) => (
            <li key={index}>
              <FAQCard faq={item} />
            </li>
          ))}
        </ul>
      </section>

      <TrianglesSection
        heading="Didn't answer your question?"
        linkText="Get in touch"
        isContact
      />
    </main>
  );
}
