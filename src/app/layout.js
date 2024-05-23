import "animate.css";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { roboto } from "./styles/fonts/fonts";
import AOSLoader from "./utils/AOSLoader";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Clutch Bowling",
  description: "The ultimate interactive bowling experience",
  keywords:
    "Bowling, interactive bowling, cosmic bowling, immersive bowling, unreal bowling, training, games, bowling experience",
  openGraph: {
    title: "Clutch Bowling",
    description: "The ultimate interactive bowling experience",
    siteName: "Clutch Bowling",
    type: "website",
    locale: "en_US",
    url: "https://clutchbowling.com",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-y-auto overflow-x-clip">
      <body
        className={`min-h-svh max-w-full flex flex-col mx-auto relative ${roboto.className} antialiased overflow-y-auto overflow-x-clip`}
      >
        <TheHeader />
        {children}
        <TheFooter />
        <AOSLoader />
        <Analytics />
        <GoogleAnalytics gaId="G-Q6EGTNFW63" />
      </body>
    </html>
  );
}
