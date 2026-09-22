import Section from "~/components/Section";
import { supportedAssetsData } from "~/data";
import Card from "./components/Card";
export default function SupportedAssetsAndAPY() {
  return (
    <Section
      heading={supportedAssetsData.heading}
      eyebrow="04 / Launch markets"
      description={supportedAssetsData.description}
      id={supportedAssetsData.id}
    >
      <ul className="asset-list">
        {supportedAssetsData.items.map((asset) => (
          <li key={asset.symbol}>
            <Card {...asset} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
