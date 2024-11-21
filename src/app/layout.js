import "animate.css";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { roboto } from "./styles/fonts/fonts";
import AOSLoader from "./utils/AOSLoader";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

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
