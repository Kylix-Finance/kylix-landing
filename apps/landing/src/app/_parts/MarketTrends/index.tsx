import Section from "~/components/Section";
import { marketTrendsData } from "~/data";
import Card from "./components/Card";
export default function MarketTrends() {
  return (
    <Section
      heading={marketTrendsData.heading}
      eyebrow="03 / The mechanics"
      description={marketTrendsData.description}
      id={marketTrendsData.id}
    >
      {marketTrendsData.items.map((item) => (
        <Card key={item.id} id={item.id} />
      ))}
    </Section>
  );
}
