import SmallHeadingAndText from "../components/SmallHeadingAndText";
import HeadingAndBreadcrumbs from "../components/HeadingAndBreadcrumbs";
import GridlinesSection from "../components/GridlinesSection";

export const metadata = {
  title: "Clutch Bowling | Terms of Service",
  url: "https://clutchbowling.com/terms",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling | Terms of Service",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com/terms",
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

export default async function TermsPage() {
  const termsArray = [
    {
      heading: "Acceptance of Terms",
      paragraph:
        "By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Site.",
    },
    {
      heading: "Use of the Site",
      paragraph:
        "You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:",
      bullets: [
        "Violate any applicable laws or regulations.",
        "Infringe on the rights of others.",
        "Attempt to gain unauthorized access to the Site or any accounts, computer systems, or networks connected to the Site",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraph:
        "The Site and its original content, features, and functionality are owned by Clutch Bowling and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
    },
    {
      heading: "Disclaimer of Warranties",
      paragraph:
        "The Site is provided on an 'as is' and 'as available' basis, without any warranties of any kind, express or implied. We do not warrant that the Site will be error-free or uninterrupted, or that any defects will be corrected.",
    },
    {
      heading: "Limitation of Liability",
      paragraph:
        "In no event shall Clutch Bowling be liable for any indirect, incidental, special, consequential, or punitive damages, arising out of or in connection with your use of the Site.",
    },
    {
      heading: "Indemnification",
      paragraph:
        "You agree to indemnify and hold harmless Clutch Bowling and its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your use of the Site or violation of these Terms.",
    },
    {
      heading: "Changes to Terms",
      paragraph:
        "We may revise these Terms from time to time. The revised Terms will be effective immediately upon posting on the Site. By continuing to use the Site after any such revisions, you agree to be bound by the revised Terms.",
    },
  ];

  return (
    <main>
      <HeadingAndBreadcrumbs pageHeading="Terms of Service" />
      <section className="flex flex-col gap-10 h-full px-5 md:px-10 pt-10 pb-20 w-full lg:w-2/3 xl:w-3/4 mx-auto">
        <p>
          These Terms of Service ('Terms') govern your use of the Clutch Bowling
          ('we', 'us', or 'our') website clutchbowling.com (the 'Site')and any
          services provided through the Site.
        </p>
        <ul className="flex flex-col gap-6">
          {termsArray.map((item, index) => (
            <li key={index} className="flex flex-col gap-3">
              <SmallHeadingAndText
                heading={item.heading}
                paragraph={item.paragraph}
                uniqueKey={index}
                bullets={item.bullets}
              />
            </li>
          ))}
        </ul>
      </section>
      <GridlinesSection
        variant="small"
        heading="For any questions about these Terms, please contact us!"
        linkText="Get in touch"
        isContact
      />
    </main>
  );
}
