import { Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";

const migha = localFont({
  src: [
    {
      path: "./migha-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-migha",
  display: "swap",
  preload: false,
});

const body = Instrument_Sans({
  subsets: ["latin"],
  // Not "--font-body": Tailwind v4 owns that name as the font-body theme key.
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const fonts = { body, migha };
