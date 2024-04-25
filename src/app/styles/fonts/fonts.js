import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const goshaSans = localFont({
  src: [
    {
      path: "./GoshaSans/PPGoshaSans-Thin.woff2",
      display: "swap",
      style: "normal",
      weight: "100",
    },
    {
      path: "./GoshaSans/PPGoshaSans-Ultralight.woff2",
      display: "swap",
      style: "normal",
      weight: "200",
    },
    {
      path: "./GoshaSans/PPGoshaSans-Regular.woff2",
      display: "swap",
      style: "normal",
      weight: "400",
    },
    {
      path: "./GoshaSans/PPGoshaSans-Bold.woff2",
      display: "swap",
      style: "normal",
      weight: "700",
    },
    {
      path: "./GoshaSans/PPGoshaSans-Ultrabold.woff2",
      display: "swap",
      style: "normal",
      weight: "800",
    },
  ],
});
