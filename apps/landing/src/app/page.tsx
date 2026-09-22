import { mergeMetadata } from "@repo/shared";
import { Metadata } from "next";
import Hero from "./_parts/Hero";
import ClosingArt from "./_parts/ClosingArt";
import FeaturedPartners from "./_parts/FeaturedPartners";
import HowItWorks from "./_parts/HowItWorks";
import MarketTrends from "./_parts/MarketTrends";
import SecurityAndAudits from "./_parts/SecurityAndAudits";
import SmartLending from "./_parts/SmartLending";
import SupportedAssetsAndAPY from "./_parts/SupportedAssetsAndAPY";
import WaitingList from "./_parts/WaitingList";
export const metadata: Metadata = mergeMetadata(
  {
    title: { absolute: "Lending on Polkadot Hub | Kylix Finance" },
    description:
      "Kylix is building over-collateralized lending on Polkadot Hub. Explore DOT and USDC markets, lending mechanics, and the path to launch.",
    alternates: { canonical: "/" },
  },
  "Kylix Finance"
);
export default function Page() {
  return (
    <>
      <Hero />
      <FeaturedPartners />
      <SmartLending />
      <HowItWorks />
      <MarketTrends />
      <SupportedAssetsAndAPY />
      <SecurityAndAudits />
      <WaitingList />
      <ClosingArt />
    </>
  );
}
