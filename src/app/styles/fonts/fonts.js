import localFont from "next/font/local";
import { MuseoModerno, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const museo = MuseoModerno({ subsets: ["latin"] });

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
