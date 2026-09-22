// Shared with Hero3D.tsx (currently unused by Hero/index.tsx, kept for a
// possible future re-enable) so the copy does not shift when the 3D loads.
export const heroTitleClassName =
  "flex w-full flex-col items-center justify-center gap-2.5 text-balance text-center font-heading text-4xl font-bold tracking-[0.02em] [text-shadow:0_2px_24px_rgb(3_4_4/0.9)] sm:flex-row md:text-5xl lg:text-6xl";

export const heroIntroClassName =
  "w-full max-w-xl text-pretty text-center text-sm font-normal leading-6 text-secondary-100 [text-shadow:0_1px_16px_rgb(3_4_4/0.95)] md:text-base";

export const heroCopy = {
  titleLead: "Lending on",
  titleRest: "Polkadot Hub.",
  intro:
    "Put your DOT and USDC to work. Supply assets, borrow against collateral, and take part in a lending market built on Polkadot Hub.",
  primary: { label: "Get launch updates", href: "#waiting-list" },
  secondary: { label: "How it works", href: "#how-it-works" },
  secondLead: "Collateral that",
  secondRest: "pays the debt.",
  secondIntro:
    "A self-repaying loan puts collateral into a yield-bearing position and applies that yield to the debt.",
  secondCta: { label: "See the mechanism", href: "#markets-trends" },
} as const;
