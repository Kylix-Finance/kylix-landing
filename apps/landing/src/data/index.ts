import { waitingListSectionId } from "./ids";
import {
  Asset,
  FeaturedPartners,
  HowItsWork,
  MarketTrend,
  NavItem,
  Security,
  SmartLending,
  Section,
} from "~/types";
import {
  BorrowImage,
  Check,
  Focus,
  Shield,
  DecentralizedFutures,
  HarbourIndustrialCapital,
  HercleFinancial,
} from "~/assets/svgs";

export const smartLendingData: Section<SmartLending> = {
  id: "smart-lending",
  header: "Protocol",
  heading: {
    left: "Your assets.",
    right: "More possibilities.",
  },
  description:
    "Kylix is building a lending market for native Hub assets, with productive collateral and all positions recorded on Polkadot Hub.",
  items: [
    {
      to: "/#markets-trends",
      heading: "Collateral with a purpose",
      description:
        "The planned self-repaying loan puts eligible collateral into a yield-bearing position. Its yield goes toward your debt, helping offset borrowing costs.",
    },
    {
      to: "/#how-it-works",
      heading: "One place to lend and borrow",
      description:
        "Supply, borrowing and liquidation share the same Hub state. Kylix works with native assets, without issuing a wrapped version of your deposit.",
    },
  ],
};

// USDT stays off this list until an icon exists and the market is confirmed.
export const supportedAssetsData: Section<Asset> = {
  header: "Assets",
  heading: { left: "Starting with", right: "DOT and USDC." },
  description:
    "The first planned markets use assets on Polkadot Hub. Further listings require an oracle and a listing decision.",
  id: "supported-assets-and-apy",
  items: [
    {
      src: "/assets/images/assets/dot.png",
      symbol: "DOT",
      isLaunched: false,
    },
    {
      src: "/assets/images/assets/usdc.png",
      symbol: "USDC",
      isLaunched: false,
    },
  ],
};

export const howItsWorksData: Section<HowItsWork> = {
  header: "How it works",
  heading: {
    left: "One market.",
    right: "Three ways to participate.",
  },
  description:
    "Supply liquidity, borrow against your assets, or bid for collateral. Each role keeps the lending market moving.",
  id: "how-it-works",
  items: [
    {
      id: "deposit",
      heading: "Supply",
      description:
        "Deposit DOT or USDC to earn the pool rate. Withdrawals depend on the liquidity available in the pool.",
    },
    {
      id: "convert",
      heading: "Borrow",
      description:
        "Provide collateral and borrow against it on Hub. Keep its value above the required threshold to avoid liquidation.",
    },
    {
      id: "borrow",
      heading: "Liquidate",
      description:
        "Bid for collateral from positions that fall below the required threshold. The queue fills the smallest discount first, with an external market maker covering any remainder.",
      image: BorrowImage,
    },
  ],
};

export const securityAndAuditsData: Section<Security> = {
  header: "Roadmap",
  heading: {
    left: "Built in stages.",
    right: "Reviewed before release.",
  },
  description:
    "Kylix is in development. External review and testing come before mainnet; a launch date has not been announced.",
  id: "security-and-audits",
  items: [
    {
      heading: "Protocol development",
      description:
        "The lending pool, interest curve and liquidation queue are being built and tested against the collateral rules.",
      icon: Shield,
    },
    {
      heading: "External audit & private beta",
      description:
        "External review comes before the private beta. Audit reports will be published when available.",
      icon: Focus,
    },
    {
      heading: "Public testnet & mainnet",
      description:
        "A public testnet follows the private beta. Mainnet comes after testing; join the list to hear when dates are confirmed.",
      icon: Check,
    },
  ],
};

export const marketTrendsData: Section<MarketTrend> = {
  header: "Mechanics",
  heading: {
    left: "Designed around",
    right: "your collateral.",
  },
  description:
    "Yield, interest rates and liquidation work together to shape what happens to a lending position.",
  id: "markets-trends",
  items: [
    {
      id: 0,
      label: "Lending",
      image: "/assets/images/market-trends/0.png",
      imageAlt:
        "Sample Kylix dashboard with made-up totals for value locked, price and treasury. Not live data.",
      imageNote: "Sample screen. These figures are not live.",
      items: [
        {
          title: "Yield that works toward repayment",
          description:
            "Eligible collateral can generate yield that is applied to your loan. If that yield is below the borrowing interest, you remain responsible for the difference.",
        },
        {
          title: "Rates that respond to demand",
          description:
            "The polynomial interest curve is designed to reward supply at lower utilization, then rise faster as more of the pool is borrowed.",
        },
        {
          title: "An orderly liquidation queue",
          description:
            "Bids fill from the smallest discount first. When the queue cannot cover the debt, the remainder is swapped with an external market maker.",
        },
      ],
    },
  ],
};

export const featuredPartnersData: Section<FeaturedPartners> = {
  header: "Backers",
  id: "featured-partners",
  heading: {
    left: "Supported by",
  },
  items: [
    {
      link: "https://wiki.polkadot.com/learn/decentralized-futures/",
      name: "Decentralized Futures",
      icon: DecentralizedFutures,
    },
    {
      link: "https://hercle.com/",
      name: "Hercle",
      icon: HercleFinancial,
    },
    {
      link: "https://www.harbourindustrial.com/",
      name: "Harbour Industrial Capital",
      icon: HarbourIndustrialCapital,
    },
  ],
};

export const navItems: NavItem[] = [
  {
    label: smartLendingData.header ?? "Protocol",
    link: `/#${smartLendingData.id}`,
  },
  {
    label: marketTrendsData.header ?? "Mechanics",
    link: `/#${marketTrendsData.id}`,
  },
  {
    label: supportedAssetsData.header ?? "Assets",
    link: `/#${supportedAssetsData.id}`,
  },
  {
    label: howItsWorksData.header ?? "Why Kylix",
    link: `/#${howItsWorksData.id}`,
  },
  {
    label: securityAndAuditsData.header ?? "Roadmap",
    link: `/#${securityAndAuditsData.id}`,
  },
  {
    label: "Join",
    link: `/#${waitingListSectionId}`,
  },
];
